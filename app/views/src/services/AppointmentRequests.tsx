import axios from 'axios';

export const CreateAppointmentRequest = async (appointmentJSON: any): Promise<any> => (
    await axios.post("http://localhost:3200/api/appointment/create", {appointmentJSON}, {
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

export const GetCustomerAppointmentsRequest = async (): Promise<any> => (
  //remove the HARD CODED idUser, get it from URL/COOKIE
    await axios.get("http://localhost:3200/api/appointment/customer/1", {
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

export const DeleteAppointmentRequest = async (id:any): Promise<any> => (
  //remove the HARD CODED idShop, get it from URL/COOKIE
    await axios.delete(`http://localhost:3200/api/appointment/delete/${id}`, {
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