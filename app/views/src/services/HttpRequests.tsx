import axios from "axios";

export interface User {
    idUser?: number
    email?: string
    name?: string
    password?: string
}

export const GetAllUsers = async (): Promise<User | false> => (
    await axios.get("http://localhost:3200/api/users")
    .then((response) => {
    return response.data;
    })
    .catch(error => false)
)