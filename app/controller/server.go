package controller

import (
	controller "app/controller/crud"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

var router *mux.Router

func initHandlers() {
	// Router for Post test
	router.HandleFunc("/api/posts", controller.GetAllPosts).Methods("GET")
	router.HandleFunc("/api/post/{id}", controller.GetPost).Methods("GET")
	router.HandleFunc("/api/post/create", controller.CreatePost).Methods("POST")
	router.HandleFunc("/api/post/update", controller.UpdatePost).Methods("PUT")
	router.HandleFunc("/api/post/delete/{id}", controller.DeletePost).Methods("DELETE")

	// Router for user
	router.HandleFunc("/api/user", controller.GetUser).Methods("GET")
	router.HandleFunc("/api/user/register", controller.RegisterUser).Methods("POST")
	router.HandleFunc("/api/user/login", controller.LoginUser).Methods("POST")
	router.HandleFunc("/api/user/logout", controller.LogoutUser).Methods("POST")
	router.HandleFunc("/api/users", controller.GetAllUsers).Methods("GET")
	router.HandleFunc("/api/user/update/{id}", controller.UpdateUser).Methods("PUT")
	router.HandleFunc("/api/user/delete/{id}", controller.DeleteUser).Methods("DELETE")

	// Router for professionals  test
	router.HandleFunc("/api/shops", controller.GetAllShops).Methods("GET")
	router.HandleFunc("/api/shop/user/{id}", controller.GetUserShop).Methods("GET")
	router.HandleFunc("/api/shop/{id}", controller.GetShop).Methods("GET")
	router.HandleFunc("/api/shop/research/{stringResearch}", controller.GetShopByName).Methods("GET")
	router.HandleFunc("/api/shop/create", controller.CreateShop).Methods("POST")
	router.HandleFunc("/api/shop/update", controller.UpdateShop).Methods("PUT")
	router.HandleFunc("/api/shop/delete/{id}", controller.DeleteShop).Methods("DELETE")

	//router for employees
	router.HandleFunc("/api/employees", controller.GetAllEmployees).Methods("GET")
	router.HandleFunc("/api/employee/{id}", controller.GetEmployee).Methods("GET")
	router.HandleFunc("/api/employee/shop/{id}", controller.GetShopEmployees).Methods("GET")
	router.HandleFunc("/api/employee/create", controller.CreateEmployee).Methods("POST")
	router.HandleFunc("/api/employee/update", controller.UpdateEmployee).Methods("PUT")
	router.HandleFunc("/api/employee/delete/{id}", controller.DeleteEmployee).Methods("DELETE")

	//router for workingHours
	router.HandleFunc("/api/working-hours-employee/{id}", controller.GetEmployeeWorkingHours).Methods("GET")
	router.HandleFunc("/api/working-hours-shop/{id}", controller.GetShopEmployeesWorkingHours).Methods("GET")
	router.HandleFunc("/api/working-hours/create", controller.CreateEmployeeWorkingHours).Methods("POST")
	router.HandleFunc("/api/working-hours/update", controller.UpdateEmployeeWorkingHours).Methods("PUT")
	router.HandleFunc("/api/working-hours/delete/{id}", controller.DeleteEmployeeWorkingHour).Methods("DELETE")

	// Router for appointments
	router.HandleFunc("/api/appointments", controller.GetAllAppointmentsController).Methods("GET")
	router.HandleFunc("/api/appointment/customer/{id}", controller.GetCustomerAppointmentsController).Methods("GET")
	router.HandleFunc("/api/appointment/shop/{id}", controller.GetShopAppointmentsController).Methods("GET")
	router.HandleFunc("/api/appointment/create", controller.CreateAppointmentController).Methods("POST")
	router.HandleFunc("/api/appointment/update", controller.UpdateAppointmentController).Methods("PUT")
	router.HandleFunc("/api/appointment/delete/{id}", controller.DeleteAppointmentController).Methods("DELETE")

	//check status user
	router.HandleFunc("/api/user/role/{id}", controller.RolesManagement).Methods("GET")

}

func Start() {
	router = mux.NewRouter()

	corsOpts := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"}, //for this base url
		AllowedMethods: []string{
			http.MethodGet, //http methods
			http.MethodPost,
			http.MethodPut,
			http.MethodPatch,
			http.MethodDelete,
			http.MethodOptions,
			http.MethodHead,
		},
		AllowCredentials: true,
		AllowedHeaders: []string{
			"*",
		},
	})

	handler := corsOpts.Handler(router)

	initHandlers()
	fmt.Printf("router initialized and listening on 3200\n")
	log.Fatal(http.ListenAndServe(":3200", handler))
}
