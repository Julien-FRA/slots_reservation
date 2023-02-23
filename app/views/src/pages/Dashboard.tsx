import React from "react";
import UserList from "../components/Inc/TableUser";
import Calendar from "./dashboard-nested-pages/Calendar";
import Employees from "./dashboard-nested-pages/Employees";
import Shop from "./dashboard-nested-pages/Shop";
import Sidebar from "../components/Inc/Sidebar";
import { Outlet } from "react-router-dom";
import { Navbar } from "react-bootstrap";


/** Ici nous allons afficher un dashboard, pro ou client, 
 * conditionnellement au role de l'User */

const DashBoard = () => (
    <div className="dashboard">
        <Sidebar/>
        <Outlet/>
    </div>
);

export default DashBoard;