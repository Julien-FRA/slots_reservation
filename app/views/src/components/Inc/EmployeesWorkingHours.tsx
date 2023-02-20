import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { User } from '../../services/ShopRequest';
import { GetEmployeesWorkingHours } from '../../services/ShopRequest';

function Schedule() {
    const [schedule, setSchedule] = useState <any>([]);
  
    useEffect(() => {
      const loadSchedule = async () => {
        try {
          const schedule:any = await GetEmployeesWorkingHours();
          var regex = "([0-9]+(:[0-9]+)+)";
          var regexDate = "[0-9]{4}-[0-9]{2}-[0-9]{2}";

          var scheduleRegex = [...schedule];
          for (var i=0; i < schedule.length; i++) {
            var dayRegex = schedule[i].day.match(regexDate);
            var startTimeRegex = schedule[i].startTime.match(regex);
            var endTimeRegex = schedule[i].endTime.match(regex);
            var newDate = new Date(dayRegex[0]);
            var weekDay = newDate.toLocaleString('en-us', {  weekday: 'long' });

            scheduleRegex[i].day = weekDay;
            scheduleRegex[i].startTime = startTimeRegex[0];
            scheduleRegex[i].endTime = endTimeRegex[0];
          }
          setSchedule(scheduleRegex);
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