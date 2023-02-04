import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/User";
import Register from "./pages/Register";

export const RouterContainer = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
    <Route path="/login" element={<Login />} />
    <Route path="/login" element={<Register />} />
  </Routes>
);