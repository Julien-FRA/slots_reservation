import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import DashBoard from "./pages/Dashboard";
import Shop from "./pages/dashboard-nested-pages/Shop";
import Employees from "./pages/dashboard-nested-pages/Employees";
import Calendar from "./pages/dashboard-nested-pages/Calendar";

export const RouterContainer = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profil" element={<Profil />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<DashBoard />}>
      <Route path ="shop" element={<Shop/>}/>
      <Route path ="employees" element={<Employees/>}/>
      <Route path ="calendar" element={<Calendar/>}/>
    </Route>
  </Routes>
);