package main

import (
	"app/controller"
	"app/model"
)

func main() {
	model.Init()
	controller.Start()
}