import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/User";

export const RouterContainer = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
  </Routes>
);