package main

import (
	"encoding/json"
	"log"
	"os"
)

type Settings struct {
	Dev    map[string]string `json:"dev"`
	Prod   map[string]string `json:"prod"`
	Global map[string]string `json:"global"`
}

func loadSettings() (settings Settings) {
	// Open settings file.
	settingsFile, err := os.Open("./settings/web_env.json")
	if err != nil {
		log.Fatalf("Error opening settings file: %s\n", err)
	}

	// Get size of settings file.
	fileInfo, err := settingsFile.Stat()
	if err != nil {
		log.Fatalf("Error getting settings file size: %s\n", err)
	}

	// Load the settings.
	settingsBytes := make([]byte, fileInfo.Size())
	_, err = settingsFile.Read(settingsBytes)
	if err != nil {
		log.Fatalf("Error reading from settings file: %s\n", err)
	}

	// Read the settings into a settings structure.
	err = json.Unmarshal(settingsBytes, &settings)

	return
}
