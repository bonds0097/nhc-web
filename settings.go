package main

import (
	"encoding/json"
	"io/ioutil"
	"path"
)

type Settings struct {
	Dev    map[string]string `json:"dev"`
	Prod   map[string]string `json:"prod"`
	Test   map[string]string `json:"test"`
	Global map[string]string `json:"global"`
}

func loadSettings() (settings Settings) {
	ctx := logger.WithField("method", "loadSettings")

	// Open settings file.
	b, err := ioutil.ReadFile(path.Join(appDir, settingsLocation))
	if err != nil {
		ctx.WithError(err).Fatal("Failed to load settings file.")
	}

	// Read the settings into a settings structure.
	err = json.Unmarshal(b, &settings)

	return
}
