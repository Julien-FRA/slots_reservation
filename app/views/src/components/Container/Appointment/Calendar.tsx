import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import GlobalModal from '../../Container/Modal';

const Calendar = (props: any) => {
    const [modalShow, setModalShow] = useState(false);
    const [workingHour, setWorkingHour] = useState<any>();
    const calendarProps = {
        props: props,
        workingHour: workingHour
    }
    return (
        <div className='calendar-container'>
                <div className='calendar-toggle-buttons'>
                    <ToggleButtonGroup
                        type="radio"
                        name="options"
                        value={props.selectedEmployee}
                        onChange={props.handleToggleChange}
                        className="select-employee"
                        defaultValue={1}
                    >
                        {props.employees?.map((employee:any) => (
                            <ToggleButton id={"tbg-radio-" + employee.idEmployee} value={employee.idEmployee}>
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
                                                <button className='calendar-body-items' onClickCapture={() => (setModalShow(true), setWorkingHour(item.startTime))}> {item.startTime} </button>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        <div className='calendar-week-selectors'>
                            <i className="fa-solid fa-angle-right" onClick={props.handleNextWeek}></i>
                        </div>
                        {props.isAdmin &&
                        <GlobalModal
                                {...calendarProps}
                                type="appointmentModal"
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