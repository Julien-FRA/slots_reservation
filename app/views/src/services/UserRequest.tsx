import axios from "axios";
import { IUser } from "../schemas/User";

const PATH = 'http://localhost:3200/api';

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}

export interface UserLogin {
  email?: string;
  password?: string;
}

export const registerUser = async (user: IUser): Promise<User | false> => (
  await axios.post(`${PATH}/user/register`, {
    email: user.email,
    name: user.name,
    password: user.password
  })
    .then(res => res.data)
    .catch(err => false)
);

export const loginUser = async (user: IUser): Promise<UserLogin | false> => (
  await axios.post(`${PATH}/user/login`, {
    email: user.email,
    password: user.password
  })
  .then(res => res.data)
  .catch(err => false)
);
