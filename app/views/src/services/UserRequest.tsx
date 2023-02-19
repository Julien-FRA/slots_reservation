import axios from "axios";
import { IUser } from "../schemas/User";

const PATH = 'http://localhost:3200/api';

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}

export interface UserToken {
  token: string
}

export const registerUser = async (user: IUser): Promise<User> => (
  await axios.post(`${PATH}/user/register`, {
    email: user.email,
    name: user.name,
    password: user.password
  })
    .then(res => res.data)
    .catch(err => false)
);

// export const loginUser = async (user: IUser): Promise<UserToken> => (
//   await axios.post(`${PATH}/user/login`, {
//     email: user.email,
//     password: user.password
//   })
//   .then(res => res.data)
//   .catch(err => false)
// );

export const loginUser = async(user: IUser) => (
  await fetch(`${PATH}/user/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
)
