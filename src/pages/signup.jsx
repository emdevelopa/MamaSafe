import { FaCalendarWeek, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center py-8 bg-gray-100">
      <div className="flex flex-col justify-center w-[35%] items-center gap-4 bg-white p-8 rounded-lg  ">
        <h1 className="text-[#4cb072de] text-4xl font-bold">MamaSafe</h1>
        <p className="font-bold">Welcome to Mamasafe</p>
        <p className="text-gray-400">Create your account to get started</p>
        <form action="" className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3">
            <label htmlFor="">Full Name</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaUser />
              <input
                className="border-none outline-none"
                type="text"
                placeholder="Enter your full name"
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
                placeholder="+234"
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
                placeholder="Select your LGA"
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
                placeholder="Enter your age"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Pregnancy Status</label>
            <div className="flex gap-3 rounded-lg p-2">
              {/* <FaPhone /> */}
              <input
                className="border-none outline-none"
                type="radio"
                placeholder="+234"
              />
              <label htmlFor="">Pregnant</label>
              <input
                className="border-none outline-none"
                type="radio"
                placeholder="+234"
              />
              <label htmlFor="">Nursing</label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Stage of Pregnancy/Baby's Age</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaPhone />
              <input
                className="border-none outline-none"
                type="text"
                placeholder="Enter your age"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Preferred Language</label>
            <div className="flex gap-3 rounded-lg p-2">
              {/* <FaPhone /> */}
              <input
                className="border-none outline-none"
                type="radio"
                placeholder="+234"
              />
              <label htmlFor="">English</label>
              <input
                className="border-none outline-none"
                type="radio"
                placeholder="+234"
              />
              <label htmlFor="">Igbo</label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Create Pasword</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaLock />
              <input
                className="border-none outline-none"
                type="text"
                placeholder="Enter your password"
              />
            </div>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <label htmlFor="">Confirm Password</label>
            <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
              <FaLock />
              <input
                className="border-none outline-none"
                type="text"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <button className="bg-[#4cb072de] text-white p-3 rounded-lg hover:bg-[#3a9b5c] transition duration-300">
            Create Account
          </button>
          <p onClick={() => navigate("/login")} className="text-[#4cb072de] cursor-pointer text-center hover:underline">
            Already have an account? Login
          </p>
        </form>
      </div>
    </div>
  );
}
