package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

type Settings struct {
	Dev    map[string]string `json:"dev"`
	Prod   map[string]string `json:"prod"`
	Test   map[string]string `json:"test"`
	Global map[string]string `json:"global"`
}

func loadSettings() (settings Settings) {
	// Open settings file.
	b, err := ioutil.ReadFile(settingsLocation)
	if err != nil {
		log.Fatalf("Failed to load settings file: %s\n", err)
	}

	// Read the settings into a settings structure.
	err = json.Unmarshal(b, &settings)

	return
}
