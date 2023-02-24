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