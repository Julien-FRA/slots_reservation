package model

import (
	"strconv"
	"time"

	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

const SecretKey = "libererlacrim"

type User struct {
	ID       uint64 `json:"idUser"`
	EMAIL    string `json:"email"`
	NAME     string `json:"name"`
	PASSWORD string `json:"password"`
	ROLE     int16  `json:"role"`
}

type UserUpdate struct {
	ID          uint64 `json:"idUser"`
	EMAIL       string `json:"email"`
	NAME        string `json:"name"`
	PASSWORD    string `json:"password"`
	NEWPASSWORD string `json:"newpassword"`
	ROLE        int16  `json:"role"`
}

type UserLogin struct {
	EMAIL    string `json:"email"`
	PASSWORD string `json:"password"`
}

func GetAllUsers() ([]User, error) {
	var users []User

	query := `select idUser, email, name, password, role from users;`

	rows, err := db.Query(query)
	if err != nil {
		return users, err
	}

	defer rows.Close()

	for rows.Next() {
		var idUser uint64
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

func GetUser(id uint64) (User, error) {
	var user User

	query := `select email, name, password, role from users where idUser=$1;`
	row, err := db.Query(query, id)
	if err != nil {
		return user, err
	}

	defer row.Close()

	if row.Next() {
		var email, name, password string
		var role int16

		err := row.Scan(&email, &name, &password, &role)
		if err != nil {
			return user, err
		}

		user = User{
			ID:       id,
			EMAIL:    email,
			NAME:     name,
			PASSWORD: password,
			ROLE:     role,
		}
	}

	return user, nil
}

func RegisterUser(user User) (bool, error) {
	IsRegister := false

	query := `insert into users(email, name, password, role) values($1, $2, $3, $4);`

	hash, err := bcrypt.GenerateFromPassword([]byte(user.PASSWORD), 14)

	if err != nil {
		return IsRegister, err
	}

	_, err = db.Exec(query, user.EMAIL, user.NAME, hash, user.ROLE)

	if err != nil {
		return IsRegister, err
	}

	IsRegister = true

	return IsRegister, nil
}

func LoginUser(user User) (error, string) {
	token := ""

	query := `select idUser, email, password from users where email=$1;`

	row, err := db.Query(query, user.EMAIL)
	if err != nil {
		return err, token
	}

	defer row.Close()

	for row.Next() {
		var id uint64
		var email, password string

		err := row.Scan(&id, &email, &password)

		if err != nil {
			return err, token
		}

		if id == 0 {
			return err, token
		}

		err = bcrypt.CompareHashAndPassword([]byte(password), []byte(user.PASSWORD))
		if err != nil {
			return err, token
		}

		claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
			Issuer:    strconv.Itoa(int(id)),
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
		})

		newToken, err := claims.SignedString([]byte(SecretKey))

		if err != nil {
			return err, token
		}

		token = newToken
	}

	return err, token
}

func UpdateUser(user UserUpdate) error {

	query := `update users set email=$1, name=$2, password=$3, role=$4 where idUser=$5;`

	queryVerify := `select password from users where idUser=$1;`

	row, err := db.Query(queryVerify, user.ID)
	if err != nil {
		return err
	}

	defer row.Close()

	for row.Next() {
		var password string

		err := row.Scan(&password)

		if err != nil {
			return err
		}

		err = bcrypt.CompareHashAndPassword([]byte(password), []byte(user.PASSWORD))

		if err == nil {

			if len([]rune(user.NEWPASSWORD)) > 0 {
				hash, err := bcrypt.GenerateFromPassword([]byte(user.NEWPASSWORD), 14)
				if err != nil {
					return err
				}
				_, err = db.Exec(query, user.EMAIL, user.NAME, hash, user.ROLE, user.ID)
			} else {
				hash, err := bcrypt.GenerateFromPassword([]byte(user.PASSWORD), 14)
				if err != nil {
					return err
				}
				_, err = db.Exec(query, user.EMAIL, user.NAME, hash, user.ROLE, user.ID)
			}

		}
		return err
	}

	return nil
}

func DeleteUser(id uint64) error {

	query := `delete from users where idUser=$1;`

	_, err := db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}

func IsUserAdmin(id uint64) (bool, error) {
	IsUserAdmin := false
	query := `select role from users where idUser=$1;`
	row, err := db.Query(query, id)
	if err != nil {
		return IsUserAdmin, err
	}

	defer row.Close()

	for row.Next() {
		var role int16

		err := row.Scan(&role)

		if err != nil {
			return IsUserAdmin, err
		}

		if role >= 1 {
			IsUserAdmin = false
		} else {
			IsUserAdmin = true
		}
	}
	return IsUserAdmin, nil
}
