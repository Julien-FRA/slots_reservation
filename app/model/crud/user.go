package model

import (
	"database/sql"
)

var db *sql.DB

type User struct {
	ID       uint8
	EMAIL    string
	NAME     string
	PASSWORD string
	ROLE     int16
}

func GetAllUsers() ([]User, error) {
	var users []User
	query := `select email, name, role, password from user;`
	rows, err := db.Query(query) //put chi db connection here

	if err != nil {
		return users, err
	}

	defer rows.Close()

	for rows.Next() {
		var idUser uint8
		var email, name, password string
		var role int16

		err := rows.Scan(&idUser, &email, &name, &password, &role)
		if err != nil {
			return users, err
		}

		user := User{
			ID:       idUser,
			EMAIL:    email,
			NAME:     name,
			PASSWORD: password,
			ROLE:     role,
		}
		users = append(users, user)
	}
	return users, nil
}
