package controller

//import (
//	"app/model"
//	"encoding/json"
//	"net/http"
//	_ "strconv"
//)
//
//func GetAllUsers(w http.ResponseWriter, r *http.Request) {
//	w.Header().Set("Content-Type", "application/json")
//
//	user, err := model.GetAllUsers()
//	if err != nil {
//		w.WriteHeader(http.StatusInternalServerError)
//		w.Write([]byte(err.Error()))
//	} else {
//		json.NewEncoder(w).Encode(user)
//	}
//}
