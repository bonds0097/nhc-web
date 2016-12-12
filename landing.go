package main

import (
	"log"
	"net/http"
	"strconv"
	"time"
)

func setLandingHandlers() {
	http.HandleFunc("/", globalHandler(centreServeHandler))
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	// Redirect based on cookies.
	if isCentreCountyCookie, err := r.Cookie("isCentreCounty"); err == nil {
		isCentreCounty, err := strconv.ParseBool(isCentreCountyCookie.Value)
		if err != nil {
			log.Printf("Invalid cookie value for isCentreCounty: %s\n", err)
			landingHandler(w, r)
		}
		if isCentreCounty {
			centreServeHandler(w, r)
		} else {
			notCentreServeHandler(w, r)
		}
	} else {
		landingHandler(w, r)
	}
}

func landingHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, rootDir+"/landing.html")
}

func centreLandingHandler(w http.ResponseWriter, r *http.Request) {
	cookie := http.Cookie{Name: "isCentreCounty", Value: "true", Expires: time.Now().Add(365 * 24 * time.Hour), Path: "/"}
	http.SetCookie(w, &cookie)
	http.Redirect(w, r, "/", http.StatusFound)
}

func centreServeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, rootDir+"/index.html")
}

func notCentreLandingHandler(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{Name: "isCentreCounty", Value: "false", Expires: time.Now().Add(365 * 24 * time.Hour), Path: "/"})
	notCentreServeHandler(w, r)
}

func notCentreServeHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "http://www.psahperd.org/PA-Nutrition-Challenge-2017", http.StatusMovedPermanently)
}
