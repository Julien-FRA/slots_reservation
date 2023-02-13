import axios from "axios";

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}

export const getAllUsers = async (): Promise<User> =>
  await axios
    .get("http://localhost:3200/api/users")
    .then((response) => {
      return response.data;
    })
    .catch((error) => false);

export const registerUser = async (
  $email: string,
  $pseudo: string,
  $password: string,
  $role = 0
) => {
  await axios
    .post("http://localhost:3200/api/user/register", {
      email: $email,
      pseudo: $pseudo,
      password: $password
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
