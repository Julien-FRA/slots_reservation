package controller

import (
	controller "app/controller/crud"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

var router *mux.Router

func initHandlers() {
	// Router for Post test
	router.HandleFunc("/api/posts", controller.GetAllPosts).Methods("GET")
	router.HandleFunc("/api/post/{id}", controller.GetPost).Methods("GET")
	router.HandleFunc("/api/post/create", controller.CreatePost).Methods("POST")
	router.HandleFunc("/api/post/update", controller.UpdatePost).Methods("PUT")
	router.HandleFunc("/api/post/delete/{id}", controller.DeletePost).Methods("DELETE")

	// Router for user test
	router.HandleFunc("/api/users", controller.GetAllUsers).Methods("GET")
	router.HandleFunc("/api/user/{id}", controller.GetUser).Methods("GET")
	router.HandleFunc("/api/user/create", controller.CreateUser).Methods("POST")
	router.HandleFunc("/api/user/update", controller.UpdateUser).Methods("PUT")
	router.HandleFunc("/api/user/delete/{id}", controller.DeleteUser).Methods("DELETE")
	router.HandleFunc("/api/user/role/{id}", controller.RolesManagement).Methods("GET")
}

func Start() {
	router = mux.NewRouter()

	initHandlers()
	fmt.Printf("router initialized and listening on 3200\n")
	log.Fatal(http.ListenAndServe(":3200", router))
}
