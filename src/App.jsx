import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboad";
import Appointments from "./pages/appointments";
import HealthLessons from "./pages/healthLesson";
import CheckSymptoms from "./pages/checksymptoms";
// import "./App.css";
 

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/HealthLessons" element={<HealthLessons />} />
        <Route path="/checkSymptoms" element={<CheckSymptoms />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </>
  );
}

export default App;
