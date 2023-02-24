import axios from 'axios';

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}

export const GetShopEmployeesWorkingHoursRequest = async (): Promise<User | false> => (
  await axios
    .get("http://localhost:3200/api/working-hours-shop/1")
    .then((response) => {
      return response.data;
    })
    .catch(error => false)
);

export const GetEmployeeWorkingHoursRequest = async (id: any): Promise<any> => (
  await axios.get(`http://localhost:3200/api/working-hours-employee/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
    .then(response => {
        console.log("this is GetEmployeeWorkingHours response", response)
        return response.data
  }).catch(error => {
        console.log("this is an error on GetEmployeeWorkingHours",error);
  })
);