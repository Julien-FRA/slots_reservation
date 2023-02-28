import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { CreateEmployeeWorkingHoursRequest } from "../../../services/WorkingHoursRequest";
import GlobalModal from '../../Container/Modal';

const Calendar = (props: any) => {
    const [modalShow, setModalShow] = useState(false);
    const [adminModalShow, setAdminModalShow] = useState(false);
    const [workingHour, setWorkingHour] = useState<any>();
    const [workingHourArray, setWorkingHourArray] = useState<any>();
    const [addWorkingHoursJSON, setAddWorkingHoursJSON] = useState<any>([]);
    const calendarProps = {
        props: props,
        workingHour: workingHour,
        setWorkingHour: setWorkingHour,
        workingHourArray: workingHourArray
    }
        console.log("adminModalShow",adminModalShow)

    const createWorkingHour = () => {
        console.log("adminModalShow",adminModalShow)
        //CreateEmployeeWorkingHoursRequest(addWorkingHoursJSON)
    }
    console.log("this is dateArray", props.dateArray)
    return (
        <div className='calendar-container'>
                <div className='calendar-toggle-buttons'>
                    <ToggleButtonGroup
                        type="radio"
                        name="options"
                        value={props.selectedEmployee}
                        onChange={props.handleToggleChange}
                        className="select-employee"
                        
                    >
                        {props.employees?.map((employee:any) => (
                            <ToggleButton key={employee.idEmployee} id={"tbg-radio-" + employee.idEmployee} value={employee.idEmployee}>
                                {employee.name}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </div>
                <div className='calendar'>
                    <>
                        <div className='calendar-week-selectors'>
                            <i className="fa-solid fa-angle-left" onClick={props.handlePrevWeek}></i>
                        </div>
                            {props.dateArray.map((date:any) => {
                                return (
                                    <div className='calendar-columns'>
                                        <div className='calendar-header'> {date.stringDay}
                                            <span>
                                                {date.numberDay} {date.stringMonth}
                                            </span>
                                        </div>
                                        <div className='calendar-body'>
                                            {date.workingHours.map((item: any) => (
                                                <button
                                                    disabled={!props.isAdmin && item.status === 'taken' ? true : false}
                                                    className={item.status === 'available' ? 'calendar-body-items' : 'calendar-body-items-taken'}
                                                    onClickCapture={() => (setModalShow(true), setWorkingHour(item.startTime), setWorkingHourArray(item))}
                                                >
                                                    {item.startTime}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                            {props.isAdmin ?
                                <div className="calendar-footer">
                                    <button
                                        className="calendar-footer-items"
                                        onClick={() => (setAdminModalShow(true), createWorkingHour)}
                                    >
                                        Add working hours
                                    </button>
                                </div>
                            : ''}
                        <div className='calendar-week-selectors'>
                            <i className="fa-solid fa-angle-right" onClick={props.handleNextWeek}></i>
                        </div>
                        
                        {props.isAdmin ?
                            <GlobalModal
                                {...calendarProps}
                                type={"createWorkingHourModal"}
                                show={adminModalShow}
                                onHide={() => setAdminModalShow(false)}
                            />
                            :
                            <GlobalModal
                                {...calendarProps}
                                type={"appointmentModal"}
                                show={modalShow}
                                onHide={() => (setModalShow(false), setWorkingHour(''))}
                            />
                        }
                    </>
                </div>
        </div>
    )
}

export default Calendar;