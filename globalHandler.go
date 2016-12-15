package main

import (
	"net/http"
)

func globalHandler(fn func(http.ResponseWriter, *http.Request)) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Make sure this end-point is not cached.
		w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
		w.Header().Set("Pragma", "no-cache")
		w.Header().Set("Expires", "0")

		// Protect against clickjacking.
		w.Header().Set("X-Frame-Options", "SAMEORIGIN")

		// If HTTPS is enabled, set the HSTS header.
		if enableHTTPS {
			w.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
		}
		fn(w, r)
	}
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, rootDir+"/index.html")
}
