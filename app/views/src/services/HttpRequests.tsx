import axios from "axios";

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}

export interface Shop {
    idShop: number;
    idUser: number;
    name: string;
    address: string;
    service: string;
}

export const GetAllUsers = async (): Promise<User | false> => (
    await axios.get("http://localhost:3200/api/users")
    .then((response) => {
      return response.data;
    })
    .catch((error) => false)
)
export const GetEmployeesWorkingHours = async (): Promise<User | false> => (
  await axios
    .get("http://localhost:3200/api/working-hours-shop/1")
    .then((response) => {
      return response.data;
    })
    .catch(error => false)
)

export const CreateShop = async (): Promise<Shop | false> => (
    await axios.post("http://localhost:3200/api/shop/create", new FormData())
    .then((response) => {
    return response.data;
    })
    .catch(error => false)
)