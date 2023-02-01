package model

import (
	"database/sql"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"os"

	_ "github.com/go-sql-driver/mysql"

	"github.com/joho/godotenv"

	_ "github.com/lib/pq"
)

type connection struct {
	Host     string
	Port     string
	User     string
	Password string
	DBName   string
}

// declare a db object, where we can use throughout the model package
// so in blog.go, we have access to this object
var db *sql.DB

func Init() {
	err := godotenv.Load("../.env")

	if err != nil {
		fmt.Printf("Error loading .env file: %s\n", err.Error())
		return
	}

	connInfo := mysql.Config{
		Addr:                 os.Getenv("MARIADB_HOST_DATABASE"),
		Net:                  "tcp",
		User:                 os.Getenv("MARIADB_USER_DATABASE"),
		Passwd:               os.Getenv("MARIADB_ROOT_PASSWORD"),
		DBName:               os.Getenv("MARIADB_DATABASE"),
		AllowNativePasswords: true,
	}

	// try to open our postgresql connection with our connection info
	db, err := sql.Open("mysql", connInfo.FormatDSN())
	if err != nil {
		fmt.Printf("Error connecting to the DB: %s\n", err.Error())
		return
	} else {
		fmt.Printf("DB is open\n")
	}

	defer db.Close()

	// check if we can ping our DB
	err = db.Ping()
	if err != nil {
		fmt.Printf("Error could not ping database: %s\n", err.Error())
		return
	} else {
		fmt.Printf("DB pinged successfully\n")
	}
}
