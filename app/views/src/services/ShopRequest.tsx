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

export const CreateShops = async (shopJSON: any): Promise<any> => (
    await axios.post("http://localhost:3200/api/shop/create", {shopJSON}, {
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

export const DeleteShop = async (id:any): Promise<any> => (
  //remove the HARD CODED idShop, get it from URL/COOKIE
  await axios.delete(`http://localhost:3200/api/shop/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => {
    console.log("this is delete response", response)
  }).catch(error => {
    console.log("this is an error on delete",error);
  })
);

export const EditShop = async (id:any): Promise<any> => (
  //remove the HARD CODED idShop, get it from URL/COOKIE
  await axios.put(`http://localhost:3200/api/shop/update/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => {
    console.log("this is delete response", response)
  }).catch(error => {
    console.log("this is an error on delete",error);
  })
);