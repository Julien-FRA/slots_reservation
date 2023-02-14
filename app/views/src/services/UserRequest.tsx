import axios from "axios";

const PATH = 'http://localhost:3200/api';

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}

export const registerUser = async (
  $email: string,
  $name: string,
  $password: string,
  $role = 0
) => {
  await axios
    .post(`${PATH}/user/register`, {
      email: $email,
      name: $name,
      password: $password
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = async (
  $email: string,
  $password: string
) => {
  await axios
    .post(`${PATH}/user/login`, {
      email: $email,
      password: $password
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
};
