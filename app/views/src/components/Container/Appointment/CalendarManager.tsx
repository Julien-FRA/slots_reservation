import { useEffect, useState } from 'react';
import { GetEmployeeWorkingHoursRequest, GetShopEmployeesWorkingHoursRequest } from '../../../services/WorkingHoursRequest';
import { GetShopEmployeeRequest } from '../../../services/EmployeeRequests';
import Calendar from '../Appointment/Calendar';
import ShopsDropdown from '../../Input/ShopsDropdown';
import { GetUserShopRequest } from '../../../services/ShopRequest';

const CalendarManager = (props:any) => {
    const [currentWeek, setCurrentWeek] = useState(getCurrentWeekDates());
    const [employees, setEmployees] = useState<any>();
    const [employeeWorkingHours, setEmployeeWorkingHours] = useState<any>([]);
    const [userShop, setUserShop] = useState<any>([]);
    const [shopEmployeesWorkinghours, setShopEmployeesWorkinghours] = useState<any>([]);
    /**
     * On admin selected shop hook is handled by dropdown, 
     * On customer its handled by shopCard containing shopId (this is in order to display shopEmployees)
     */
    //const [selectedShop, setSetSelectedShop] = useState<any>(2);
    const [userIdShop, setUserIdShop] = useState<any>();
    const [selectedEmployee, setSelectedEmployee] = useState(4);
    /**
     * This is for testing, we need to get the role somehow, cookies ? | false === user
     * This will hide/show some components, since we're using calendar on both sessions
     */
    const [isAdmin, setIsAdmin] = useState(true);

    /**
     * Function to get currentWeekDates
     */
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
    
    /**
     * Function to handle clicking the "previous week" arrow button
     */
    const handlePrevWeek = () => {
        const newWeek = currentWeek.map((day:any) => {
            const newDay = new Date(day);
            newDay.setDate(newDay.getDate() - 7);
            return newDay;
        });
        setCurrentWeek(newWeek);
    };
    
    /**
     * Function to handle clicking the "next week" arrow button
     */
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

    /**
     * Loop over each currentWeek days and push an object of day data to dateArray array
     */
    for (var i = 0; i < currentWeek.length; i++) {
        var dateRegexed:any = JSON.stringify(currentWeek[i]).match(regexWeek)
        var date = dateRegexed[0];
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

    /**
     * Calls API requests and register their response in a useState hook, each time an employee is selected
     */
    useEffect(() => {
        const employeeName = async() => {
            try {
                var response = await GetShopEmployeeRequest(userIdShop);
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
        const ShopEmployeesWorkinghours = async() => {
            try {
                /**
                 * Here add the props.idShop from Calendar page for admin session => selectedShop hook. 
                 * For users session we need to extract the idShop from the cookies => cookie data
                 */
                var response = await GetShopEmployeesWorkingHoursRequest(userIdShop);
                setShopEmployeesWorkinghours(response);
            } catch (error) {
                console.error(error);
            }
        }
        const hasShopRequest = async() => {
            
            try {
                var result = await GetUserShopRequest();
                setUserShop(result);
                setUserIdShop(result[0].idShop);  
            } catch (error) {
                console.error(error);
            }
        }
        hasShopRequest()
        workingHours();
        employeeName();
        ShopEmployeesWorkinghours();
    }, [selectedEmployee, userIdShop]);
    /**
     * Handle selected employee toggle change
     * @param value 
     */
    const handleToggleChange = (value:any) => {
        setSelectedEmployee(value);
    };

    /**
     * Matching dateArray weekday with employeeWorkingHours day, for each employee
     * Then we push the workingHours inside an object within the weekDay
     * We will call each weekDay.workingHours for the calendar
     */
    if (employeeWorkingHours.length > 0) {
        for (var j = 0; j < employeeWorkingHours.length; j++) {
            var employeeWorkingHoursDate:any = JSON.stringify(employeeWorkingHours[j].day).match(regexWeek);
            var employeeWorkingHoursDay:any = employeeWorkingHoursDate[0];
    
            for (var k = 0; k < dateArray.length; k++) {
                if (dateArray[k].date === employeeWorkingHoursDay) {
                    var employeeWorkingHoursStartTime = employeeWorkingHours[j].startTime.match(regexHour);
                    dateArray[k].workingHours.push({
                        employeeId: employeeWorkingHours[j].idEmployee,
                        startTime: employeeWorkingHoursStartTime[0], //here maybe add the workingHour status => taken/available
                        idWorkingHours: employeeWorkingHours[j].idWorkingHours,
                        status: employeeWorkingHours[j].status,
                    });
                }
            }
        }
    };

    const calendarProps: any = {
        employees: employees,
        selectedEmployee: selectedEmployee,
        isAdmin: isAdmin,
        shopEmployeesWorkinghours: shopEmployeesWorkinghours,
        dateArray: dateArray,
        shopData: props.shopData.shopData,
        setUserIdShop: setUserIdShop,
        getCurrentWeekDates: getCurrentWeekDates,
        userIdShop: userIdShop,
        userShop: userShop,
        handlePrevWeek: handlePrevWeek,
        handleNextWeek: handleNextWeek,
        handleToggleChange: handleToggleChange

    }
    return (
        <>
            {isAdmin && <ShopsDropdown {...calendarProps} />}
            <Calendar {...calendarProps} />
        </>
    )
}

export default CalendarManager;