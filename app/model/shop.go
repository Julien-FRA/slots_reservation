package model

import "fmt"

type Shop struct {
	ID      uint64 `json:"idShop"`
	ID_USER uint64 `json:"idUser"`
	NAME    string `json:"name"`
	ADDRESS string `json:"address"`
	SERVICE string `json:"service"`
}

func GetAllShops() ([]Shop, error) {
	var shops []Shop

	query := `select idShop, idUser, address, service, name from shops;`

	rows, err := db.Query(query)
	if err != nil {
		return shops, err
	}

	defer rows.Close()

	for rows.Next() {
		var idShop, idUser uint64
		var service, address, name string

		err := rows.Scan(&idShop, &idUser, &address, &service, &name)
		if err != nil {
			return shops, err
		}

		shop := Shop{
			ID:      idShop,
			ID_USER: idUser,
			NAME:    name,
			ADDRESS: address,
			SERVICE: service,
		}

		shops = append(shops, shop)
	}

	return shops, nil
}

func GetUserShop(idUser uint64) ([]Shop, error) {
	var userShop []Shop

	query := `select idShop, idUser, address, service, name from shops where idUser=$1;`

	rows, err := db.Query(query, idUser)
	if err != nil {
		return userShop, err
	}

	defer rows.Close()

	for rows.Next() {
		var idShop, idUser uint64
		var service, address, name string

		err := rows.Scan(&idShop, &idUser, &address, &service, &name)
		if err != nil {
			return userShop, err
		}

		shop := Shop{
			ID:      idShop,
			ID_USER: idUser,
			NAME:    name,
			ADDRESS: address,
			SERVICE: service,
		}

		userShop = append(userShop, shop)
	}

	return userShop, nil
}

func GetShop(id uint64) (Shop, error) {
	var shop Shop

	query := `select idShop, idUser, address, service, name from shops where idShop=$1;`
	row, err := db.Query(query, id)
	if err != nil {
		return shop, err
	}

	defer row.Close()

	if row.Next() {
		var idShop, idUser uint64
		var service, address, name string

		err := row.Scan(&idShop, &idUser, &address, &service, &name)
		if err != nil {
			return shop, err
		}

		shop = Shop{
			ID:      idShop,
			ID_USER: idUser,
			NAME:    name,
			ADDRESS: address,
			SERVICE: service,
		}
	}
	return shop, nil
}

func GetShopByName(stringResearch string) (Shop, error) {
	var shop Shop
	fmt.Printf("Received shop datas: %+v\n", stringResearch)
	query := `SELECT idShop, idUser, address, service, name FROM shops WHERE name ILIKE '%' || $1 || '%'`
	fmt.Printf("Query is %+v\n", query)

	row, err := db.Query(query, stringResearch)
	if err != nil {
		return shop, err
	}

	defer row.Close()

	if row.Next() {
		var idShop, idUser uint64
		var service, address, name string

		err := row.Scan(&idShop, &idUser, &address, &service, &name)
		if err != nil {
			return shop, err
		}

		shop = Shop{
			ID:      idShop,
			ID_USER: idUser,
			NAME:    name,
			ADDRESS: address,
			SERVICE: service,
		}
	}
	return shop, nil
}

func CreateShop(shop Shop) error {

	query := `insert into shops(idUser, name, address, service ) values($1, $2, $3, $4);`

	_, err := db.Exec(query, shop.ID_USER, shop.NAME, shop.ADDRESS, shop.SERVICE)

	if err != nil {
		return err
	}

	return nil
}

func UpdateShop(shop Shop) error {

	query := `update shops set idUser=$1, name=$2, address=$3, service=$4 where idShop=$5;`

	_, err := db.Exec(query, shop.ID_USER, shop.NAME, shop.ADDRESS, shop.SERVICE, shop.ID)
	if err != nil {
		return err
	}
	return nil
}

func DeleteShop(id uint64) error {

	query := `delete from shops where idShop=$1;`

	_, err := db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}
