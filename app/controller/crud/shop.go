package controller

import (
	"app/model"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	_ "strconv"

	"github.com/gorilla/mux"
)

func GetAllShops(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	shop, err := model.GetAllShops()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	} else {
		json.NewEncoder(w).Encode(shop)
	}
}

func GetUserShop(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	param := mux.Vars(r)["id"]
	id, err := strconv.ParseUint(param, 10, 64)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	userShop, err := model.GetUserShop(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	json.NewEncoder(w).Encode(userShop)
}

func GetShop(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	param := mux.Vars(r)["id"]
	id, err := strconv.ParseUint(param, 10, 64)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	shop, err := model.GetShop(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	json.NewEncoder(w).Encode(shop)

}

func GetShopByName(w http.ResponseWriter, r *http.Request) {
	// Set the response content type
	w.Header().Set("Content-Type", "application/json")

	// Get the string parameter from the request URL
	params := mux.Vars(r)
	stringResearch := params["stringResearch"]
	// Call the model function with the string parameter
	shopData, err := model.GetShopByName(stringResearch)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	// Return the shop as part of a JSON response
	json.NewEncoder(w).Encode(shopData)

}
func CreateShop(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var shop model.Shop

	var reqBody struct {
		ShopJSON string `json:"shopJSON"`
	}

	err := json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = json.Unmarshal([]byte(reqBody.ShopJSON), &shop)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	//This reads struct content => fmt.Printf("Received shop data: %+v\n", shop)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	err = model.CreateShop(shop)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	} else {
		w.WriteHeader(http.StatusOK)
	}
}

func UpdateShop(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var shop model.Shop

	var reqBody struct {
		ShopJSON string `json:"shopJSON"`
	}

	err := json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = json.Unmarshal([]byte(reqBody.ShopJSON), &shop)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	fmt.Printf("Received shop data: %+v\n", shop)
	err = model.UpdateShop(shop)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	} else {
		w.WriteHeader(http.StatusOK)
	}
}

func DeleteShop(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	param := mux.Vars(r)
	idStr := param["id"]
	id, err := strconv.ParseUint(idStr, 10, 64)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	err = model.DeleteShop(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	} else {
		w.WriteHeader(http.StatusOK)
	}
}
