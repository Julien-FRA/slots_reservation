import axios from 'axios';

export const GetAllEmployeesRequest = async (): Promise<any> => (
  await axios.get(`http://localhost:3200/api/employees`, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
    .then(response => {
        console.log("this is GetAllEmployeesRequest response", response)
        return response.data
  }).catch(error => {
        console.log("this is an error on GetAllEmployeesRequest",error);
  })
);

export const GetEmployeeRequest = async (id: any): Promise<any> => (
  await axios.get(`http://localhost:3200/api/employee/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
    .then(response => {
        console.log("this is GetEmployeeRequest response", response)
        return response.data
  }).catch(error => {
        console.log("this is an error on GetEmployeeRequests",error);
  })
);

export const GetShopEmployeeRequest = async (id: any): Promise<any> => (
  await axios.get(`http://localhost:3200/api/employee/shop/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
    .then(response => {
        console.log("this is GetShopEmployeeRequest response", response)
        return response.data
  }).catch(error => {
        console.log("this is an error on GetShopEmployeeRequest",error);
  })
);

export const CreateEmployeeRequest = async (employeeJSON: any): Promise<any> => (
    await axios.post("http://localhost:3200/api/employee/create", {employeeJSON}, {
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(response => {
      console.log("this is a good response CreateEmployeeRequest",response);
    }).catch(error => {
      console.log("this is an error CreateEmployeeRequest",error);
    })
);

export const DeleteEmployeeRequest = async (id:any): Promise<any> => (
  //remove the HARD CODED idShop, get it from URL/COOKIE
  await axios.delete(`http://localhost:3200/api/employee/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => {
    console.log("this is delete response DeleteEmployeeRequest", response)
  }).catch(error => {
    console.log("this is an error on delete DeleteEmployeeRequest",error);
  })
);

export const UpdateEmployeesRequest = async (employeeJSON:any): Promise<any> => (
  //remove the HARD CODED idShop, get it from URL/COOKIE
  await axios.put(`http://localhost:3200/api/employee/update`, {employeeJSON}, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => {
    console.log("this is edit response UpdateEmployeesRequest", response)
  }).catch(error => {
    console.log("this is an error on edit UpdateEmployeesRequest",error);
  })
);