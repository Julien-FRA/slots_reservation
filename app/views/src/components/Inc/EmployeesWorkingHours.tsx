import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { User } from '../../services/HttpRequests';
import { GetEmployeesWorkingHours } from '../../services/HttpRequests';

function Schedule() {
    const [schedule, setSchedule] = useState<User[]| any>([]);
  
    useEffect(() => {
      const loadSchedule = async () => {
        try {
          const schedule = await GetEmployeesWorkingHours();
          setSchedule(schedule)
        } catch(error) {
          console.log(error);
        }
      }; 
      loadSchedule();
  }, []);
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID Employee</th>
            <th>Name</th>
            <th>Shop Name</th> 
            <th>Day</th> 
            <th>Start Time</th> 
            <th>End Time</th> 
          </tr>
        </thead>
        <tbody>
          {schedule.map((slot: any) => (
            <tr>
              <td>{slot.idEmployee}</td>
              <td>{slot.name}</td>
              <td>{slot.shopName}</td>
              <td>{slot.day}</td>
              <td>{slot.startTime}</td>
              <td>{slot.endTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
  
  export default Schedule;