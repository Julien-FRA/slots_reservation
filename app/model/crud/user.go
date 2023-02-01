package model

import "fmt"

type User struct {
	ID       uint8  `json:"idUser"`
	EMAIL    string `json:"email"`
	NAME     string `json:"name"`
	PASSWORD string `json:"password"`
	ROLE     int16  `json:"role"`
}

func GetAllUsers() ([]User, error) {
	var users []User
	query := `select idUser, email, name, password, role from user;`
	fmt.Println("before err")
	rows, err := db.Query(query) //put chi db connection here
	fmt.Println("after err")

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
