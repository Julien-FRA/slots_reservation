package model

type Appointment struct {
	ID          uint64 `json:"idAppointment"`
	ID_EMPLOYEE uint64 `json:"idEmployee"`
	ID_CUSTOMER uint64 `json:"idCustomer"`
	ID_SHOP     uint64 `json:"idShop"`
	START_TIME  string `json:"startTime"`
	END_TIME    string `json:"endTime"`
	NAME        string `json:"name"`
	SHOP_NAME   string `json:"shopName"`
	DAY         string `json:"day"`
}

func GetAllAppointments() ([]Appointment, error) {
	var appointments []Appointment

	query := `select idAppointment, idEmployee, idCustomer, idShop, startTime, endTime, name, shopName, day from appointments;`

	rows, err := db.Query(query)
	if err != nil {
		return appointments, err
	}

	defer rows.Close()

	for rows.Next() {
		var idAppointment, idEmployee, idCustomer, idShop uint64
		var startTime, endTime, name, shopName, day string

		err := rows.Scan(&idAppointment, &idEmployee, &idCustomer, &idShop, &startTime, &endTime, &name, &shopName, &day)
		if err != nil {
			return appointments, err
		}

		appointment := Appointment{
			ID:          idAppointment,
			ID_EMPLOYEE: idEmployee,
			ID_CUSTOMER: idCustomer,
			ID_SHOP:     idShop,
			START_TIME:  startTime,
			END_TIME:    endTime,
			NAME:        name,
			SHOP_NAME:   shopName,
			DAY:         day,
		}
		appointments = append(appointments, appointment)
	}
	return appointments, nil
}

func GetCustomerAppointments(idCustomer uint64) ([]Appointment, error) {
	var userAppointments []Appointment

	query := `select idAppointment, idEmployee, idCustomer, idShop, startTime, endTime, name, shopName, day from appointments where idCustomer=$1;`

	rows, err := db.Query(query, idCustomer)
	if err != nil {
		return userAppointments, err
	}

	defer rows.Close()

	for rows.Next() {
		var idAppointment, idEmployee, idCustomer, idShop uint64
		var startTime, endTime, name, shopName, day string

		err := rows.Scan(&idAppointment, &idEmployee, &idCustomer, &idShop, &startTime, &endTime, &name, &shopName, &day)
		if err != nil {
			return userAppointments, err
		}

		appointment := Appointment{
			ID:          idAppointment,
			ID_EMPLOYEE: idEmployee,
			ID_CUSTOMER: idCustomer,
			ID_SHOP:     idShop,
			START_TIME:  startTime,
			END_TIME:    endTime,
			NAME:        name,
			SHOP_NAME:   shopName,
			DAY:         day,
		}
		userAppointments = append(userAppointments, appointment)
	}
	return userAppointments, nil
}

func GetShopAppointments(idShop uint64) ([]Appointment, error) {
	var userAppointments []Appointment

	query := `select idAppointment, idEmployee, idCustomer, idShop, startTime, endTime, name, shopName, day from appointments where idShop=$1;`

	rows, err := db.Query(query, idShop)
	if err != nil {
		return userAppointments, err
	}

	defer rows.Close()

	for rows.Next() {
		var idAppointment, idEmployee, idCustomer, idShop uint64
		var startTime, endTime, name, shopName, day string

		err := rows.Scan(&idAppointment, &idEmployee, &idCustomer, &idShop, &startTime, &endTime, &name, &shopName, &day)
		if err != nil {
			return userAppointments, err
		}

		appointment := Appointment{
			ID:          idAppointment,
			ID_EMPLOYEE: idEmployee,
			ID_CUSTOMER: idCustomer,
			ID_SHOP:     idShop,
			START_TIME:  startTime,
			END_TIME:    endTime,
			NAME:        name,
			SHOP_NAME:   shopName,
			DAY:         day,
		}
		userAppointments = append(userAppointments, appointment)
	}
	return userAppointments, nil
}

func CreateAppointment(appointment Appointment) error {
	query := `insert into appointments(idEmployee, idCustomer, idShop, startTime, endTime, name, shopName, day) values($1, $2, $3, $4, $5, $6, $7, $8);`

	_, err := db.Exec(query, appointment.ID_EMPLOYEE, appointment.ID_CUSTOMER, appointment.ID_SHOP, appointment.START_TIME, appointment.END_TIME, appointment.NAME, appointment.SHOP_NAME, appointment.DAY)

	if err != nil {
		return err
	}

	return nil
}

func UpdateAppointment(appointment Appointment) error {

	query := `update appointments set idEmployee=$1, idCustomer=$2, idShop=$3, startTime=$4, endTime=$5, name=$6, shopName=$7, day=$8 where idAppointment=$9;`

	_, err := db.Exec(query, appointment.ID_EMPLOYEE, appointment.ID_CUSTOMER, appointment.ID_SHOP, appointment.START_TIME, appointment.END_TIME, appointment.NAME, appointment.SHOP_NAME, appointment.DAY)
	if err != nil {
		return err
	}
	return nil
}

func DeleteAppointment(id uint64) error {

	query := `delete from appointments where idAppointment=$1;`

	_, err := db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}
