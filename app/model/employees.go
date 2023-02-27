package model

type Employee struct {
	ID          uint64 `json:"idEmployee"`
	ID_SHOP     uint64 `json:"idShop"`
	EMAIL       string `json:"email"`
	PHONE       string `json:"phone"`
	NAME        string `json:"name"`
	LASTNAME    string `json:"lastName"`
	EXPERTISE   string `json:"expertise"`
	DESCRIPTION string `json:"description"`
	PRICE       uint64 `json:"price"`
}

func GetAllEmployees() ([]Employee, error) {
	var employees []Employee

	query := `select idEmployee, idShop, email, phone, name, lastName, expertise, description, price from employees;`

	rows, err := db.Query(query)
	if err != nil {
		return employees, err
	}

	defer rows.Close()

	for rows.Next() {
		var idEmployee, idShop, price uint64
		var email, phone, name, lastName, expertise, description string

		err := rows.Scan(&idEmployee, &idShop, &email, &phone, &name, &lastName, &expertise, &description, &price)
		if err != nil {
			return employees, err
		}

		employee := Employee{
			ID:          idEmployee,
			ID_SHOP:     idShop,
			EMAIL:       email,
			PHONE:       phone,
			NAME:        name,
			LASTNAME:    lastName,
			EXPERTISE:   expertise,
			DESCRIPTION: description,
			PRICE:       price,
		}
		employees = append(employees, employee)
	}
	return employees, nil
}

func GetEmployee(id uint64) (Employee, error) {
	var employee Employee

	query := `select idEmployee, idShop, email, phone, name, lastName, expertise, description, price from employees where idEmployee=$1;`
	row, err := db.Query(query, id)
	if err != nil {
		return employee, err
	}
	defer row.Close()

	if row.Next() {
		var idEmployee, idShop, price uint64
		var email, phone, name, lastName, expertise, description string

		err := row.Scan(&idEmployee, &idShop, &email, &phone, &name, &lastName, &expertise, &description, &price)
		if err != nil {
			return employee, err
		}

		employee = Employee{
			ID:          idEmployee,
			ID_SHOP:     idShop,
			EMAIL:       email,
			PHONE:       phone,
			NAME:        name,
			LASTNAME:    lastName,
			EXPERTISE:   expertise,
			DESCRIPTION: description,
			PRICE:       price,
		}
	}
	return employee, nil
}

func GetShopEmployees(id uint64) ([]Employee, error) {
	var employees []Employee

	query := `select idEmployee, idShop, email, phone, name, lastName, expertise, description, price from employees where idShop=$1;`
	rows, err := db.Query(query, id)
	if err != nil {
		return employees, err
	}
	defer rows.Close()

	for rows.Next() {
		var idEmployee, idShop, price uint64
		var email, phone, name, lastName, expertise, description string

		err := rows.Scan(&idEmployee, &idShop, &email, &phone, &name, &lastName, &expertise, &description, &price)
		if err != nil {
			return employees, err
		}

		employee := Employee{
			ID:          idEmployee,
			ID_SHOP:     idShop,
			EMAIL:       email,
			PHONE:       phone,
			NAME:        name,
			LASTNAME:    lastName,
			EXPERTISE:   expertise,
			DESCRIPTION: description,
			PRICE:       price,
		}
		employees = append(employees, employee)
	}
	return employees, nil
}

func CreateEmployee(employee Employee) error {

	query := `insert into employees(idShop, email, phone, name, lastName, expertise, description, price) values($1, $2, $3, $4, $5, $6, $7, $8);`

	_, err := db.Exec(query, employee.ID_SHOP, employee.EMAIL, employee.PHONE, employee.NAME, employee.LASTNAME, employee.EXPERTISE, employee.DESCRIPTION, employee.PRICE)

	if err != nil {
		return err
	}

	return nil
}

func UpdateEmployee(employee Employee) error {

	query := `update employees set email=$1, phone=$2, name=$3, lastName=$4, expertise=$5, description=$6, price=$7 where idEmployee=$8;`

	_, err := db.Exec(query, employee.EMAIL, employee.PHONE, employee.NAME, employee.LASTNAME, employee.EXPERTISE, employee.DESCRIPTION, employee.PRICE, employee.ID)
	if err != nil {
		return err
	}
	return nil
}

func DeleteEmployee(id uint64) error {

	query := `delete from employees where idEmployee=$1;`

	_, err := db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}
