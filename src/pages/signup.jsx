import { FaCalendarWeek, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    lga: "",
    age: "",
    pregnancyStatus: "",
    stage: "",
    language: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "radio" ? (checked ? value : prev[name]) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!form.email) {
      setError("Email is required");
      return;
    }
    setLoading(true);
    try {
      // Generate a uuid for the user
      const uid = uuidv4();
      // Optionally, you can skip Firebase Auth if you only want Firestore storage
      await addDoc(collection(db, "users"), {
        uid,
        email: form.email,
        fullName: form.fullName,
        phone: form.phone,
        lga: form.lga,
        age: form.age,
        pregnancyStatus: form.pregnancyStatus,
        stage: form.stage,
        language: form.language,
        createdAt: new Date(),
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center py-8 bg-gray-100">
      <div className="flex flex-col justify-center w-[35%] items-center gap-4 bg-white p-8 rounded-lg  ">
        <h1 className="text-[#4cb072de] text-4xl font-bold">MamaSafe</h1>
        <p className="font-bold">Welcome to Mamasafe</p>
        <p className="text-gray-400">Create your account to get started</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          {/* Email field */}
          <div className="flex flex-col gap-3">
            <label htmlFor="">Email</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <input
                className="border-none outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Full Name</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaUser />
              <input
                className="border-none outline-none"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Phone Number</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaPhone />
              <input
                className="border-none outline-none"
                type="text"
                name="phone"
                placeholder="+234"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Local Government Area</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaLocationPin />
              <input
                className="border-none outline-none"
                type="text"
                name="lga"
                placeholder="Select your LGA"
                value={form.lga}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Age</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaCalendarWeek />
              <input
                className="border-none outline-none"
                type="text"
                name="age"
                placeholder="Enter your age"
                value={form.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Pregnancy Status</label>
            <div className="flex gap-3 rounded-lg p-2">
              <input
                className="border-none outline-none"
                type="radio"
                name="pregnancyStatus"
                value="Pregnant"
                checked={form.pregnancyStatus === "Pregnant"}
                onChange={handleChange}
              />
              <label>Pregnant</label>
              <input
                className="border-none outline-none"
                type="radio"
                name="pregnancyStatus"
                value="Nursing"
                checked={form.pregnancyStatus === "Nursing"}
                onChange={handleChange}
              />
              <label>Nursing</label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Stage of Pregnancy/Baby's Age</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaPhone />
              <input
                className="border-none outline-none"
                type="text"
                name="stage"
                placeholder="Enter your age"
                value={form.stage}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Preferred Language</label>
            <div className="flex gap-3 rounded-lg p-2">
              <input
                className="border-none outline-none"
                type="radio"
                name="language"
                value="English"
                checked={form.language === "English"}
                onChange={handleChange}
              />
              <label>English</label>
              <input
                className="border-none outline-none"
                type="radio"
                name="language"
                value="Igbo"
                checked={form.language === "Igbo"}
                onChange={handleChange}
              />
              <label>Igbo</label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Create Password</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaLock />
              <input
                className="border-none outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Confirm Password</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaLock />
              <input
                className="border-none outline-none"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <button
            className="bg-[#4cb072de] text-white p-3 rounded-lg hover:bg-[#3a9b5c] transition duration-300"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
          <p
            onClick={() => navigate("/login")}
            className="text-[#4cb072de] cursor-pointer text-center hover:underline"
          >
            Already have an account? Login
          </p>
        </form>
      </div>
    </div>
  );
}
