package main

import (
	"flag"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/Sirupsen/logrus"
	sslloader "github.com/bonds0097/sslLoader"
	"github.com/bshuster-repo/logrus-logstash-hook"
)

var (
	appSettings      Settings
	settingsLocation string
	environment      string
	rootDir          string
	url              string
	enableHTTPS      bool
	appDir           string

	logger *logrus.Logger
)

func setStaticHandlers() {
	http.Handle("/fonts/", http.FileServer(http.Dir(rootDir)))
	http.Handle("/styles/", http.FileServer(http.Dir(rootDir)))
	http.Handle("/scripts/", http.FileServer(http.Dir(rootDir)))
	http.Handle("/img/", http.FileServer(http.Dir(rootDir)))
	http.Handle("/downloads/", http.FileServer(http.Dir(rootDir)))

	if environment == "prod" || environment == "test" {
		http.Handle("/bower_components/", http.FileServer(http.Dir(rootDir)))

	} else if environment == "dev" {
		rootDir := appSettings.Dev["root_dir"]

		http.Handle("/bower_components/", http.FileServer(http.Dir(rootDir+"/..")))
		http.Handle("/views/", http.FileServer(http.Dir(rootDir)))
	}
}

func init() {
	flag.StringVar(&environment, "env", "prod", "Environment in which application is running.")
	flag.StringVar(&settingsLocation, "settings", "settings.json", "Location of application settings file.")
	flag.StringVar(&appDir, "appdir", "/etc/nhc-web", "application directory")
	flag.Parse()
}

func main() {
	logger = logrus.New()
	hook, err := logrus_logstash.NewHook("udp", os.Getenv("LOGSTASH_ADDR"), "nhc-web")
	if err != nil {
		logger.WithError(err).Warn("Failed to set up logstash hook.")
	} else {
		logger.Hooks.Add(hook)
	}
	ctx := logger.WithFields(logrus.Fields{
		"method": "main",
	})

	appSettings = loadSettings()
	if environment == "prod" {
		rootDir = appSettings.Prod["root_dir"]
		url = appSettings.Prod["url"]
	} else if environment == "test" {
		rootDir = appSettings.Prod["root_dir"]
		url = appSettings.Prod["url"]
	} else if environment == "dev" {
		rootDir = appSettings.Dev["root_dir"]
		url = appSettings.Dev["url"]
	} else {
		ctx.Fatal("An invalid environment was specified.")
	}
	enableHTTPS, err := strconv.ParseBool(appSettings.Prod["enableHTTPS"])
	if err != nil {
		ctx.WithError(err).Fatal("Invalid settings file. enableHTTPS setting had invalue value.")
	}

	setStaticHandlers()
	ctx.Info("Set static handlers.")

	http.HandleFunc("/", globalHandler(rootHandler))

	// Start the servers based on whether or not HTTPS is enabled.
	s := &http.Server{
		Addr:           ":8080",
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	if (environment == "prod" || environment == "test") && enableHTTPS {
		ctx.Info("HTTPS is enabled. Starting server on port 8443 w/ redirect on 8080.")
		go func() {
			err := http.ListenAndServe(":8080", http.RedirectHandler("https://"+url, http.StatusMovedPermanently))
			if err != nil {
				ctx.Fatalf("HTTP Error: %s", err)
			}
		}()
		s.Addr = ":8443"
		sslCert, err := sslloader.LoadPEMBlockFromEnv("SSL_CERT")
		if err != nil {
			ctx.WithError(err).Fatal("Failed to load SSL cert.")
		}
		sslKey, err := sslloader.LoadPEMBlockFromEnv("SSL_KEY")
		if err != nil {
			ctx.WithError(err).Fatal("Failed to load SSL key.")
		}

		certFile, keyFile, err := sslloader.WriteSSLFiles(appDir, sslCert, sslKey, logger)
		if err != nil {
			ctx.WithError(err).Fatal("Failed to write SSL cert and key.")
		}

		ctx.Fatal(s.ListenAndServeTLS(certFile, keyFile))
	} else {
		ctx.Info("HTTPS is not enabled. Starting server on port 8080.")
		ctx.Fatal(s.ListenAndServe())
	}
}
