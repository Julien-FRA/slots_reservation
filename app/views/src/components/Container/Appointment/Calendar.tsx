import React, { Key, useEffect, useState } from 'react';
import { Button, Form, InputGroup, Table, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { GetEmployeeWorkingHoursRequest } from '../../../services/WorkingHoursRequest';
import { GetAllEmployeesRequest } from '../../../services/EmployeeRequests';

interface Date {
    date: Date,
    numberDay: number,
    stringDay: string,
    stringMonth: string,
    workingHours: []
}

const CalendarContainer = () => {
// Define state variable for the current week
    const [currentWeek, setCurrentWeek] = useState(getCurrentWeekDates());
    const [selectedEmployee, setSelectedEmployee] = useState(1);
    const [employees, setEmployees] = useState<any>();
    const [employeeWorkingHours, setEmployeeWorkingHours] = useState<any>([]);

    function getCurrentWeekDates():any {
        const currentDate = new Date();
        const weekStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 1);
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStart);
            date.setDate(date.getDate() + i);
            weekDates.push(date);
        }
        return weekDates;
    }
    
    // Function to handle clicking the "previous week" arrow button
    const handlePrevWeek = () => {
        const newWeek = currentWeek.map((day:any) => {
            const newDay = new Date(day);
            newDay.setDate(newDay.getDate() - 7);
            return newDay;
        });
        setCurrentWeek(newWeek);
    };
    
    // Function to handle clicking the "next week" arrow button
    const handleNextWeek = () => {
        const newWeek = currentWeek.map((day:any) => {
            const newDay = new Date(day);
            newDay.setDate(newDay.getDate() + 7);
            return newDay;
        });
        setCurrentWeek(newWeek);
    };
    var regexHour = "([0-9]+(:[0-9]+))";
    var regexWeek = "[0-9]{4}-[0-9]{2}-[0-9]{2}";
    var dateArray:any = [];

    for (var i = 0; i < currentWeek.length; i++) {
        var dateRegexed:any = JSON.stringify(currentWeek[i]).match(regexWeek)
        var date = dateRegexed[0];
        console.log("this is date", date)
        var stringDay = new Date(date).toLocaleString('en-us', { weekday: 'long' });
        var stringMonth = new Date(date).toLocaleString('en-us', { month: 'long' });
        var numberDay = ('0' + date).slice(-2);

        dateArray.push({
            date: date,
            numberDay: numberDay,
            stringDay: stringDay,
            stringMonth: stringMonth,
            workingHours: []
        });
    };

    useEffect(() => {
        const employeeName = async() => {
            try {
                var response = await GetAllEmployeesRequest();
                setEmployees(response);
            } catch (error) {
                console.error(error);
            }
        }
        
        const workingHours = async() => {
            try {
                var response = await GetEmployeeWorkingHoursRequest(selectedEmployee);
                setEmployeeWorkingHours(response);
            } catch (error) {
                console.error(error);
            }
        }
        workingHours();
        employeeName();
    }, [selectedEmployee]);
    
    console.log("this is employeeName", employees);
    const handleToggleChange = (value:any) => {
        setSelectedEmployee(value);
    };
    if (employeeWorkingHours.length > 0) {
        for (var j = 0; j < employeeWorkingHours.length; j++) {
            var employeeWorkingHoursDate:any = JSON.stringify(employeeWorkingHours[j].day).match(regexWeek);
            var employeeWorkingHoursDay:any = employeeWorkingHoursDate[0];
            console.log("this is dateRegexed", employeeWorkingHoursDay)
    
            /**
             * Pour chacune des workingHours on regarde quel jour de la semaine elle match
             * On push la workingHour dans l'objet correspondant au jour de la semaine
             */
            for (var k = 0; k < dateArray.length; k++) {
                if (dateArray[k].date === employeeWorkingHoursDay) {
                    var employeeWorkingHoursStartTime = employeeWorkingHours[j].startTime.match(regexHour);
                    console.log("this is ITTTT", employeeWorkingHours[j].startTime);
                    dateArray[k].workingHours.push({
                        employeeId: employeeWorkingHours[j].idEmployee,
                        startTime: employeeWorkingHoursStartTime[0]
                    });
                }
            }
        }
    } else (console.log("IAZH¨ZEOUAZE¨GAEZGU¨"))

    
    console.log("resultrequest", employeeWorkingHours);
    console.log("this is selectedEmployee", selectedEmployee)
    console.log("this is array", dateArray);
    console.log("this is selectedEmployee", selectedEmployee)

    return (
        <div className='calendar-container'>
            <div className='calendar-toggle-buttons'>
                <ToggleButtonGroup
                    type="radio"
                    name="options"
                    value={selectedEmployee}
                    onChange={handleToggleChange}
                    className="select-employee"
                    defaultValue={1}
                >
                    {employees?.map((employee:any) => (
                        <ToggleButton id={"tbg-radio-" + employee.idEmployee} value={employee.idEmployee}>
                            {employee.name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div className='calendar'>
                <>
                    <div className='calendar-week-selectors'>
                        <i className="fa-solid fa-angle-left" onClick={handlePrevWeek}></i>
                    </div>
                        {dateArray.map((date:any) => {
                            return (
                                <div className='calendar-columns'>
                                    <div className='calendar-header'> {date.stringDay}
                                        <span>
                                            {date.numberDay} {date.stringMonth}
                                        </span>
                                    </div>
                                    <div className='calendar-body'>
                                        {date.workingHours.map((item: any) => (
                                            <button className='calendar-body-items'>{item.startTime}</button>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    <div className='calendar-week-selectors'>
                        <i className="fa-solid fa-angle-right" onClick={handleNextWeek}></i>
                    </div>
                </>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default CalendarContainer;