import React from "react";
import Sidebar from "../../components/Inc/Sidebar";
import Schedule from "../../components/Inc/EmployeesWorkingHours";

const Employees = () => (
    <div className="employees-container">
        <h1>This is Employees SubPage</h1>
        <Schedule/>
    </div>
);

export default Employees;