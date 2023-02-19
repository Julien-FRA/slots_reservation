import axios from "axios";
import { IUser } from "../schemas/User";

const PATH = 'http://localhost:3200/api';

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}

export const registerUser = async (user: IUser): Promise<User> => (
  await axios.post(`${PATH}/user/register`, {
    email: user.email,
    name: user.name,
    password: user.password
  },
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
    .then(res => res.data)
    .catch(err => false)
);

export const loginUser = async(user: IUser): Promise<any> => (
  await fetch(`${PATH}/user/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  })
)

export const getUser = async(): Promise<any> => (
  await fetch(`${PATH}/user`, {
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  })
)
