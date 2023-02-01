package controller

import (
	"app/controller/crud"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

var router *mux.Router

func initHandlers() {
	router.HandleFunc("/user", userController.GetAllUsers).Methods("GET")
}

func Start() {
	router = mux.NewRouter()

	initHandlers()
	fmt.Printf("router initialized and listening on 3200\n")
	log.Fatal(http.ListenAndServe(":3200", router))
}
