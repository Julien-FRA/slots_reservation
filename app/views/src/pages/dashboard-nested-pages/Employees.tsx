import React from "react";
import Sidebar from "../../components/Inc/Sidebar";
import Schedule from "../../components/Inc/EmployeesWorkingHours";
import EmployeesManager from "../../components/Container/Employees/EmployeesManager";

const Employees = () => (
    <div className="employees-container">
        <h1>This is Employees SubPage</h1>
        <Schedule />
        <EmployeesManager/>
    </div>
);

export default Employees;