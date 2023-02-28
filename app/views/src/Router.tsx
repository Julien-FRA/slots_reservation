import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import DashBoard from "./pages/Dashboard";
import Shop from "./pages/dashboard-nested-pages/Shop";
import Employees from "./pages/dashboard-nested-pages/Employees";
import Calendar from "./pages/dashboard-nested-pages/Calendar";
import { useContext } from "react";
import { UserContext } from "./App";

const ProtectedRoute = ({ children }: any) => {
  const user = useContext(UserContext);

  if (user?.role == "0") {
    return <Navigate to="/profil" replace />;
  }

  if(!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const LoginRoute = ({ children }: any) => {
  const user = useContext(UserContext);

  if(!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


export const RouterContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profil" element={<LoginRoute><Profil /></LoginRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>}>
        <Route path ="shop" element={<Shop/>}/>
        <Route path ="employees" element={<Employees/>}/>
        <Route path ="calendar" element={<Calendar/>}/>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  )
}