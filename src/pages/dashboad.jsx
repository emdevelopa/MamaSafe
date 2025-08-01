import { useState, useEffect } from "react";
import {
  FaBars,
  FaBell,
  FaBlog,
  FaCalendar,
  FaClock,
  FaFacebook,
  FaGreaterThan,
  FaHeart,
  FaInstagram,
  FaLock,
  FaPhone,
  FaSearch,
  FaSpeakerDeck,
  FaTimes,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaChartBar, FaVolumeHigh } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state || {};
  const [progress, setProgress] = useState(30); // Example progress percentage
  const [isOpen, setIsOpen] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Store user in localStorage for later use
  useEffect(() => {
    if (user && user.id) {
      localStorage.setItem("mamasafe_user", JSON.stringify(user));
    }
  }, [user]);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className=" ">
      <nav className="flex items-center bg-[#a7e1bd25] justify-between p-4 border-b border-gray-200 relative">
        {/* Logo */}
        <h1 className="font-bold text-2xl">MamaSafe</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/about">Profile</a>
          </li>
          <li>
            <a href="/services">Settings</a>
          </li>
          <li>
            <FaBell className="text-2xl" />
          </li>
          <li>
            <FaUser className="text-2xl" />
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-start p-4 gap-3 border-t shadow-md z-10 md:hidden">
            <li>
              <a href="/dashboard" onClick={toggleMenu}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/about" onClick={toggleMenu}>
                Profile
              </a>
            </li>
            <li>
              <a href="/services" onClick={toggleMenu}>
                Settings
              </a>
            </li>
            <li>
              <FaBell className="text-2xl" onClick={toggleMenu} />
            </li>
            <li>
              <FaUser className="text-2xl" onClick={toggleMenu} />
            </li>
          </ul>
        )}
      </nav>

      <div className="px-8">
        <div>
          <h1 className="text-4xl font-bold mt-8">
            Welcome back, {user.fullName ? user.fullName : "User"}
          </h1>
          <p className="text-gray-500 mt-4">Let's check on your health today</p>
        </div>

        <div className="bg-[#fab8b851] flex gap-4 rounded-md px-4 py-6 mt-8">
          <div className="bg-[#a7f5c577] p-2 rounded-md h-fit">
            <FaLock className="text-[#4cb072de]" />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Today's Health Tip</h1>
            <p>
              Stay hydrated! Aim for 8-10 glasses of water daily during
              pregnancy. proper hydration helps maintain amniotic fluid levels
              and supports you baby's development.
            </p>
            <p
              className="flex items-center jus gap-2 text-[#4cb072de] cursor-pointer"
              onClick={() => navigate("/HealthLessons")}
            >
              Read more
              <span>
                <FaGreaterThan />
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div
            className="shadow-md flex gap-4 rounded-md px-4 py-6 cursor-pointer 
             hover:scale-[1.02] transition-all duration-300 ease-in-out"
            onClick={() => navigate("/health-lessons")}
          >
            <div className="bg-[#a7f5c577] p-2 rounded-md h-fit">
              <FaLock className="text-[#4cb072de]" />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Health Lessons </h1>
              <p>Browse pregnancy education materials</p>
              {/* Progress Loader */}
              <div className="">
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4cb072] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                  <p className="text-[#4cb072]">{progress}% Completed</p>
                  {/* <FaVolumeHigh className="text-[#4cb072]" /> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="shadow-md flex gap-4 rounded-md px-4 py-6 cursor-pointer 
             hover:scale-[1.02] transition-all duration-300 ease-in-out"
            onClick={() => navigate("/appointments")}
          >
            <div className="bg-[#a7f5c577] p-2 rounded-md h-fit">
              <FaLock className="text-[#4cb072de]" />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Appointments & Reminders</h1>
              <p className="flex items-center jus gap-2">
                <FaClock /> Next: Parental Checkup - Tomorrow
              </p>
              <p className="flex items-center jus gap-2 text-[#4cb072de] cursor-pointer">
                2 upcoming appointments
              </p>
            </div>
          </div>

          <div
            className="shadow-md flex gap-4 rounded-md px-4 py-6 cursor-pointer 
             hover:scale-[1.02] transition-all duration-300 ease-in-out"
            onClick={() => navigate("/checkSymptoms")}
          >
            <div className="bg-[#a7f5c577] p-2 rounded-md h-fit">
              <FaLock className="text-[#4cb072de]" />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Check Symptoms</h1>
              <p>Track and monitor your health</p>
              <p className="flex items-center jus gap-2 text-[#4cb072de] cursor-pointer">
                <span>
                  <FaChartBar />
                </span>
                Last check 2 days ago
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#4cb072de] shadow-md flex gap-4 rounded-md px-4 py-6">
            <div className="bg-[#a7f5c577] p-2 rounded-md h-fit">
              <FaLock className="text-[#fff]" />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Ask Mama </h1>
              <p>Get Instant answers to your pregnancy questions</p>
            </div>
          </div>

          <div className="bg-[#fab8b851] shadow-md flex gap-4 items-center rounded-md px-4 py-6">
            <div className="bg-[#fab8b877] p-2 rounded-md h-fit">
              <FaPhone className="text-[#4cb072de]" />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Quick Help</h1>
              <p className="">24/7 Emergency support</p>
              <p
                onClick={() => setShowHelpModal(true)}
                className="flex items-center jus gap-2 text-[#fff] bg-[#4cb072de] p-3 rounded-md cursor-pointer hover:bg-[#3a9b5c] transition-all duration-300 ease-in-out"
              >
                Get Immediate Asssitance
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 shadow-md p-6 bg-white rounded-md">
          <h1 className="font-bold mb-6">Recent Activity</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="bg-[#a7f5c577] p-2 rounded-md h-fit w-fit">
                <FaCalendar className="text-[#4cb072de]" />
              </div>
              <div>
                <h1 className="text-[18px] ">Schedule parental checkup</h1>
                <p className="text-gray-400 text-[14px]">2 hours ago</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-[#a7f5c577] p-2 rounded-md h-fit w-fit">
                <FaCalendar className="text-[#4cb072de]" />
              </div>
              <div>
                <h1 className="text-[18px] ">Logged water intake</h1>
                <p className="text-gray-400 text-[14px]">5 hours ago</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-[#a7f5c577] p-2 rounded-md h-fit w-fit">
                <FaCalendar className="text-[#4cb072de]" />
              </div>
              <div>
                <h1 className="text-[18px] ">
                  Completed lesson: Nutrition in Pregnancy
                </h1>
                <p className="text-gray-400 text-[14px]">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000055] bg-opacity-40">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-xs shadow-md flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 text-center">
              Emergency Contact
            </h2>
            <p className="mb-6 text-center text-lg font-semibold text-[#4cb072de]">
              09087876565
            </p>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setShowHelpModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <footer className="flex flex-col items-center justify-center gap-4 p-6 text-gray-400 border-t border-gray-200 mt-8">
        <p>Powered by MamaSafe</p>
        <div className="flex gap-4 text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p>&copy; 2024 MamaSafe. All rights reserved.</p>
      </footer>
    </div>
  );
}
