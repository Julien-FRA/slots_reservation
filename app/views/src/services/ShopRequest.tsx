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
);

export const GetEmployeesWorkingHours = async (): Promise<User | false> => (
  await axios
    .get("http://localhost:3200/api/working-hours-shop/1")
    .then((response) => {
      return response.data;
    })
    .catch(error => false)
);

export const CreateShops = async (shopDataJson: any): Promise<any> => (
    await axios.post("http://localhost:3200/api/shop/create", {shopDataJson}, {
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(response => {
      console.log("this is a good response",response);
    }).catch(error => {
      console.log("this is an error",error);
    })
);

export const GetUserShop = async (): Promise<any> => (
  //remove the HARD CODED idUser, get it from URL/COOKIE
  await axios.get("http://localhost:3200/api/shop/user/2", {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => {
    return response.data
  }).catch(error => {
    console.log("this is an error",error);
  })
);