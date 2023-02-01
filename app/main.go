package main

import (
	"app/controller"
	"app/model/crud"
)

func main() {
	model.Init()
	controller.Start()
}
