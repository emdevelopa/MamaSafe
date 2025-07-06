import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboad";
import Appointments from "./pages/appointments";
import HealthLessons from "./pages/healthLesson";
import CheckSymptoms from "./pages/checksymptoms";
import AdminDashboard from "./pages/admin-dashboard";
import HealthLessonDetail from "./pages/HealthLessonDetail";
// import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes as needed */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/health-lessons" element={<HealthLessons />} />
      <Route path="/health-lessons/:id" element={<HealthLessonDetail />} />
      <Route path="/checkSymptoms" element={<CheckSymptoms />} />
      <Route path="/admin" element={<AdminDashboard />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  );
}

export default App;
   
