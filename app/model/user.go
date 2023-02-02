package model

type User struct {
	ID       uint64 `json:"idUser"`
	EMAIL    string `json:"email"`
	NAME     string `json:"name"`
	PASSWORD string `json:"password"`
	ROLE     int16  `json:"role"`
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

func CreateUser(user User) error {

	query := `insert into users(email, name, password, role) values($1, $2, $3, $4);`

	_, err := db.Exec(query, user.EMAIL, user.NAME, user.PASSWORD, user.ROLE)

	if err != nil {
		return err
	}

	return nil
}

func UpdateUser(user User) error {

	query := `update users set email=$1, name=$2, password=$3, role=$4 where idUser=$5;`

	_, err := db.Exec(query, user.EMAIL, user.NAME, user.PASSWORD, user.ROLE, user.ID)
	if err != nil {
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
