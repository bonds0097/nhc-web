package main

import (
	"flag"
	"log"
	"net/http"
	"strconv"
	"time"
)

var (
	appSettings      Settings
	settingsLocation string
	environment      string
	rootDir          string
	url              string
	enableHTTPS      bool
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
	flag.StringVar(&settingsLocation, "settings", "/etc/nhc-web/settings.json", "Location of application settings file.")
	flag.Parse()
}

func main() {
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
		log.Fatalln("An invalid environment was specified.")
	}
	enableHTTPS, err := strconv.ParseBool(appSettings.Prod["enableHTTPS"])
	if err != nil {
		log.Fatalf("Invalid settings file. enableHTTPS setting had invalue value: %s\n", err)
	}

	setStaticHandlers()
	setLandingHandlers()

	// Start the servers based on whether or not HTTPS is enabled.
	s := &http.Server{
		Addr:           ":8080",
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	if (environment == "prod" || environment == "test") && enableHTTPS {
		log.Println("HTTPS is enabled. Starting server on port 8443 w/ redirect on 8080.")
		go func() {
			err := http.ListenAndServe(":8080", http.RedirectHandler("https://"+url, http.StatusMovedPermanently))
			if err != nil {
				log.Fatalf("HTTP Error: %s", err)
			}
		}()
		s.Addr = ":8443"
		log.Fatal(s.ListenAndServeTLS("/var/private/nhc_cert.pem", "/var/private/nhc_key.pem"))
	} else {
		log.Println("HTTPS is not enabled. Starting server on port 8080.")
		log.Fatal(s.ListenAndServe())
	}
}
