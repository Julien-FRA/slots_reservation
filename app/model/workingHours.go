package model

type WorkingHours struct {
	ID          uint64 `json:"idWorkingHours"`
	ID_Employee uint64 `json:"idEmployee"`
	DAY         string `json:"day"`
	STARTTIME   string `json:"startTime"`
	ENDTIME     string `json:"endTime"`
}

func GetEmployeeWorkinHours(id uint64) (WorkingHours, error) {
	var workingHour WorkingHours

	query := `select idWorkingHours, day, startTime, endTime from workingHours WHERE idEmployee=$1;`
	row, err := db.Query(query, id)
	if err != nil {
		return workingHour, err
	}
	defer row.Close()

	if row.Next() {
		var idWorkingHours, idEmployee uint64
		var day, startTime, endTime string

		err := row.Scan(&idWorkingHours, &idEmployee, &day, &startTime, &endTime)
		if err != nil {
			return workingHour, err
		}

		workingHour = WorkingHours{
			ID:          idWorkingHours,
			ID_Employee: idEmployee,
			DAY:         day,
			STARTTIME:   startTime,
			ENDTIME:     endTime,
		}
	}
	return workingHour, nil
}

func GetEmployeeWorkinShop(id uint64) (WorkingHours, error) {
	var workingHour WorkingHours

	query := `select  workinghours.day, workinghours.starttime, workinghours.endtime,  employees.idemployee, employees.name, shops.name from ((workinghours
INNER JOIN employees ON workinghours.idemployee = employees.idemployee)
INNER JOIN shops ON employees.idshop = shops.idshop) WHERE shops.idshop =$1 ORDER BY workinghours.day;`
	row, err := db.Query(query, id)
	if err != nil {
		return workingHour, err
	}
	defer row.Close()

	if row.Next() {
		var idWorkingHours, idEmployee uint64
		var day, startTime, endTime string

		err := row.Scan(&idWorkingHours, &idEmployee, &day, &startTime, &endTime)
		if err != nil {
			return workingHour, err
		}

		workingHour = WorkingHours{
			ID:          idWorkingHours,
			ID_Employee: idEmployee,
			DAY:         day,
			STARTTIME:   startTime,
			ENDTIME:     endTime,
		}
	}
	return workingHour, nil
}
