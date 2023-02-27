import axios from 'axios';

export interface User {
  idUser?: number;
  email?: string;
  name?: string;
  password?: string;
}


export const GetEmployeeWorkingHoursRequest = async (selectedEmployee: any): Promise<any> => (
  await axios.get(`http://localhost:3200/api/working-hours-employee/${selectedEmployee}`, {
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

export const GetShopEmployeesWorkingHoursRequest = async (selectedShop: any): Promise<User | false> => (
  await axios
    .get(`http://localhost:3200/api/working-hours-shop/${selectedShop}`) //SEND PROPS.SHOP HERE
    .then((response) => {
      console.log("this is GetEmployeeWorkingHoursRequest", response)
      return response.data;
    })
    .catch(error => false)
);

export const UpdateEmployeeWorkingHoursRequest = async (workingHoursJSON: any): Promise<any> => (
    await axios.put("http://localhost:3200/api/working-hours/update", {workingHoursJSON}, {
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