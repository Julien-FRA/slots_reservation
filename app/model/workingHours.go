package model

type WorkingHours struct {
	ID          uint64 `json:"idWorkingHours"`
	ID_Employee uint64 `json:"idEmployee"`
	DAY         string `json:"day"`
	STARTTIME   string `json:"startTime"`
	ENDTIME     string `json:"endTime"`
}
type ShopEmployeesWorkingHours struct {
	DAY         string `json:"day"`
	STARTTIME   string `json:"startTime"`
	ENDTIME     string `json:"endTime"`
	ID_Employee uint64 `json:"idEmployee"`
	SHOP        string `json:"shopName"`
	NAME        string `json:"name"`
}

func GetEmployeeWorkingHours(id uint64) ([]WorkingHours, error) {
	var employeeWorkingHours []WorkingHours

	query := `select idWorkingHours, idEmployee, day, startTime, endTime from workingHours WHERE idEmployee=$1;`
	row, err := db.Query(query, id)
	if err != nil {
		return employeeWorkingHours, err
	}
	defer row.Close()

	for row.Next() {
		var idWorkingHours, idEmployee uint64
		var day, startTime, endTime string

		err := row.Scan(&idWorkingHours, &idEmployee, &day, &startTime, &endTime)
		if err != nil {
			return employeeWorkingHours, err
		}

		employeeWorkingHour := WorkingHours{
			ID:          idWorkingHours,
			ID_Employee: idEmployee,
			DAY:         day,
			STARTTIME:   startTime,
			ENDTIME:     endTime,
		}
		employeeWorkingHours = append(employeeWorkingHours, employeeWorkingHour)
	}
	return employeeWorkingHours, nil
}

func GetShopEmployeesWorkingHours(id uint64) ([]ShopEmployeesWorkingHours, error) {
	var shopEmployeesWorkingHours []ShopEmployeesWorkingHours

	query := `select workingHours.day, workingHours.startTime, workingHours.endTime,  employees.idEmployee, employees.name, shops.name from ((workingHours
INNER JOIN employees ON workingHours.idEmployee = employees.idEmployee)
INNER JOIN shops ON employees.idShop = shops.idShop) WHERE shops.idShop =$1 ORDER BY workingHours.day;`

	row, err := db.Query(query, id)
	if err != nil {
		return shopEmployeesWorkingHours, err
	}
	defer row.Close()

	for row.Next() {
		var idEmployee uint64
		var day, startTime, endTime, shopName, name string

		err := row.Scan(&day, &startTime, &endTime, &idEmployee, &name, &shopName)
		if err != nil {
			return shopEmployeesWorkingHours, err
		}

		shopEmployeesWorkingHour := ShopEmployeesWorkingHours{
			DAY:         day,
			STARTTIME:   startTime,
			ENDTIME:     endTime,
			ID_Employee: idEmployee,
			SHOP:        shopName,
			NAME:        name,
		}
		shopEmployeesWorkingHours = append(shopEmployeesWorkingHours, shopEmployeesWorkingHour)
	}
	return shopEmployeesWorkingHours, nil
}

func CreateEmployeeWorkingHours(workingHour WorkingHours) error {
	query := `insert into workingHours(idEmployee, day, startTime, endTime) values($1, $2, $3, $4);`

	_, err := db.Exec(query, workingHour.ID_Employee, workingHour.DAY, workingHour.STARTTIME, workingHour.ENDTIME)

	if err != nil {
		return err
	}

	return nil
}

func DeleteEmployeeWorkingHour(idEmployee, idWorkingHour uint64) error {

	query := `DELETE FROM workingHours WHERE idEmployee=$1 AND idWorkingHours =$2;`

	_, err := db.Exec(query, idEmployee, idWorkingHour)
	if err != nil {
		return err
	}
	return nil
}
