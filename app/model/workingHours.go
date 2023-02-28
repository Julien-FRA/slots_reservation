package model

type WorkingHours struct {
	ID          uint64 `json:"idWorkingHours"`
	ID_Employee uint64 `json:"idEmployee"`
	DAY         string `json:"day"`
	STARTTIME   string `json:"startTime"`
	ENDTIME     string `json:"endTime"`
	STATUS      string `json:"status"`
}
type ShopEmployeesWorkingHours struct {
	ID          uint64 `json:"idWorkingHours"`
	DAY         string `json:"day"`
	STARTTIME   string `json:"startTime"`
	ENDTIME     string `json:"endTime"`
	ID_Employee uint64 `json:"idEmployee"`
	SHOP        string `json:"shopName"`
	NAME        string `json:"name"`
	STATUS      string `json:"status"`
}

func GetEmployeeWorkingHours(id uint64) ([]WorkingHours, error) {
	var employeeWorkingHours []WorkingHours

	query := `select idWorkingHours, idEmployee, day, startTime, endTime, status from workingHours WHERE idEmployee=$1;`
	row, err := db.Query(query, id)
	if err != nil {
		return employeeWorkingHours, err
	}
	defer row.Close()

	for row.Next() {
		var idWorkingHours, idEmployee uint64
		var day, startTime, endTime, status string

		err := row.Scan(&idWorkingHours, &idEmployee, &day, &startTime, &endTime, &status)
		if err != nil {
			return employeeWorkingHours, err
		}

		employeeWorkingHour := WorkingHours{
			ID:          idWorkingHours,
			ID_Employee: idEmployee,
			DAY:         day,
			STARTTIME:   startTime,
			ENDTIME:     endTime,
			STATUS:      status,
		}
		employeeWorkingHours = append(employeeWorkingHours, employeeWorkingHour)
	}
	return employeeWorkingHours, nil
}

func GetShopEmployeesWorkingHours(id uint64) ([]ShopEmployeesWorkingHours, error) {
	var shopEmployeesWorkingHours []ShopEmployeesWorkingHours

	query := `select workingHours.idWorkingHours, workingHours.day, workingHours.startTime, workingHours.endTime, workingHours.status,  employees.idEmployee, employees.name, shops.name from ((workingHours
INNER JOIN employees ON workingHours.idEmployee = employees.idEmployee)
INNER JOIN shops ON employees.idShop = shops.idShop) WHERE shops.idShop =$1 ORDER BY workingHours.day;`

	row, err := db.Query(query, id)
	if err != nil {
		return shopEmployeesWorkingHours, err
	}
	defer row.Close()

	for row.Next() {
		var idWorkingHours, idEmployee uint64
		var day, startTime, endTime, status, shopName, name string

		err := row.Scan(&idWorkingHours, &day, &startTime, &endTime, &status, &idEmployee, &name, &shopName)
		if err != nil {
			return shopEmployeesWorkingHours, err
		}

		shopEmployeesWorkingHour := ShopEmployeesWorkingHours{
			ID:          idWorkingHours,
			DAY:         day,
			STARTTIME:   startTime,
			ENDTIME:     endTime,
			STATUS:      status,
			ID_Employee: idEmployee,
			SHOP:        shopName,
			NAME:        name,
		}
		shopEmployeesWorkingHours = append(shopEmployeesWorkingHours, shopEmployeesWorkingHour)
	}
	return shopEmployeesWorkingHours, nil
}

func CreateEmployeeWorkingHours(workingHour WorkingHours) error {
	query := `insert into workingHours(idEmployee, day, startTime, endTime, status) values($1, $2, $3, $4, $5);`

	_, err := db.Exec(query, workingHour.ID_Employee, workingHour.DAY, workingHour.STARTTIME, workingHour.ENDTIME, workingHour.STATUS)

	if err != nil {
		return err
	}

	return nil
}

func DeleteEmployeeWorkingHour(id uint64) error {

	query := `DELETE FROM workingHours WHERE idWorkingHours=$1 `

	_, err := db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}

func UpdateEmployeeWorkingHours(workingHour WorkingHours) error {

	query := `update workingHours set idEmployee=$1, day=$2, startTime=$3, endTime=$4, status=$5 where idWorkingHours=$6;`

	_, err := db.Exec(query, workingHour.ID_Employee, workingHour.DAY, workingHour.STARTTIME, workingHour.ENDTIME, workingHour.STATUS, workingHour.ID)
	if err != nil {
		return err
	}
	return nil
}
