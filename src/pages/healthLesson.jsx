import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTimes,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function HealthLessons() {
  const [progress, setProgress] = useState(30);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      {" "}
      <nav className="flex items-center bg-[#a7e1bd25] justify-between p-4 border-b border-gray-200 relative">
        {/* Logo */}
        <h1 className="font-bold text-2xl">MamaSafe</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a
              href="/dashboard"
              onClick={() => {
                navigate(-1);
                toggleMenu;
              }}
            >
              Dashboard
            </a>
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
              <a
                
                onClick={() => {
                  toggleMenu;
                  navigate(-1);
                }}
              >
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
      {/* <nav className="flex items-center  justify-between px-8 py-4 bg-[#a7e1bd25] ">
        <h1 className="font-bold text-2xl">MamaSafe</h1>
        <ul className="flex items-center gap-8 ">
          <li>
            <a onClick={() => navigate(-1)}>Dashboard</a>
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
      </nav> */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl">Health Education</h1>
        <div className="flex items-center gap-4 mt-4 bg-[#e2e2e272] rounded-md px-4 py-3 md:w-[30%]">
          <input
            type="text"
            className="bg-transparent w-full border-none outline-none"
            placeholder="Search for lessons..."
          />
          <FaSearch className="text-[#4cb07292]" />
        </div>
        <div className="my-10  bg-[#86dea846] px-6 md:px-12 w-full py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="p-6 bg-white shadow-md rounded-md w-full max-w-md ">
            <p className="text-[#4cb072de] text-sm ">NUTRITION</p>
            <p className="text-lg mt-4">Essential Nutrients During Pregnancy</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
              <FaClock />
              <span>15 min read</span>
            </div>

            {/* Progress Loader */}
            <div className="mt-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4cb072] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                <p className="text-[#4cb072]">In Progress - {progress}%</p>
                <FaVolumeHigh className="text-[#4cb072]" />
              </div>
            </div>
          </div>{" "}
          <div className="p-6 bg-white shadow-md rounded-md w-full max-w-md ">
            <p className="text-[#4cb072de] text-sm ">NUTRITION</p>
            <p className="text-lg mt-4">Essential Nutrients During Pregnancy</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
              <FaClock />
              <span>15 min read</span>
            </div>

            {/* Progress Loader */}
            <div className="mt-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4cb072] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                <p className="text-[#4cb072]">In Progress - {progress}%</p>
                <FaVolumeHigh className="text-[#4cb072]" />
              </div>
            </div>
          </div>{" "}
          <div className="p-6 bg-white shadow-md rounded-md w-full max-w-md ">
            <p className="text-[#4cb072de] text-sm ">NUTRITION</p>
            <p className="text-lg mt-4">Essential Nutrients During Pregnancy</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
              <FaClock />
              <span>15 min read</span>
            </div>

            {/* Progress Loader */}
            <div className="mt-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4cb072] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                <p className="text-[#4cb072]">In Progress - {progress}%</p>
                <FaVolumeHigh className="text-[#4cb072]" />
              </div>
            </div>
          </div>{" "}
          <div className="p-6 bg-white shadow-md rounded-md w-full max-w-md ">
            <p className="text-[#4cb072de] text-sm ">NUTRITION</p>
            <p className="text-lg mt-4">Essential Nutrients During Pregnancy</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
              <FaClock />
              <span>15 min read</span>
            </div>

            {/* Progress Loader */}
            <div className="mt-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4cb072] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                <p className="text-[#4cb072]">In Progress - {progress}%</p>
                <FaVolumeHigh className="text-[#4cb072]" />
              </div>
            </div>
          </div>{" "}
          <div className="p-6 bg-white shadow-md rounded-md w-full max-w-md ">
            <p className="text-[#4cb072de] text-sm ">NUTRITION</p>
            <p className="text-lg mt-4">Essential Nutrients During Pregnancy</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
              <FaClock />
              <span>15 min read</span>
            </div>

            {/* Progress Loader */}
            <div className="mt-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4cb072] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                <p className="text-[#4cb072]">In Progress - {progress}%</p>
                <FaVolumeHigh className="text-[#4cb072]" />
              </div>
            </div>
          </div>{" "}
          <div className="p-6 bg-white shadow-md rounded-md w-full max-w-md ">
            <p className="text-[#4cb072de] text-sm ">NUTRITION</p>
            <p className="text-lg mt-4">Essential Nutrients During Pregnancy</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-4">
              <FaClock />
              <span>15 min read</span>
            </div>

            {/* Progress Loader */}
            <div className="mt-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4cb072] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                <p className="text-[#4cb072]">In Progress - {progress}%</p>
                <FaVolumeHigh className="text-[#4cb072]" />
              </div>
            </div>
          </div>{" "}
        </div>
        {/* <button className="  px-6 py-3 bg-[#4cb072de] text-white rounded-md">
          Load More
        </button> */}
      </div>
      <footer className="flex flex-col items-center justify-center gap-4 p-6 text-gray-400 border-t border-gray-200 mt-8">
        <p>Powered by MamaSafe</p>
        <div className="flex gap-4 text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p>&copy; 2024 MamaSafe. All rights reserved.</p>
      </footer>
    </>
  );
}
