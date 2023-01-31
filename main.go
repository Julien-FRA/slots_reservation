package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		_, err := writer.Write([]byte("Hello World !"))
		if err != nil {
			http.Error(writer, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	err := http.ListenAndServe(":8888", nil)
	if err != nil {
		_ = fmt.Errorf("Une erreure est survenu lors du lancement : %w", err)
		return
	}
}
