import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AdminHome from "./pages/home/AdminHome";
import StudentHome from "./pages/home/StudentHome";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Header } from "./components/header/Header";
import TestApp from "./pages/home/TestApp";
import JoinClass from "./pages/home/JoinClass";
import HostClass from "./pages/home/HostClass";
import Attendance from "./pages/home/Attendance"; // Import the new Attendance component

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student/test-app" element={<TestApp />} />
        <Route path="/student/join-class" element={<JoinClass />} />
        <Route path="/admin/host-class" element={<HostClass />} />
        <Route path="/attendance" element={<Attendance />} /> {/* Add the Attendance route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
