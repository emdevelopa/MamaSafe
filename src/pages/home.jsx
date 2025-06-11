import { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaHeart,
  FaHeartbeat,
  FaInstagram,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="px-[1em] sm:px-[2em] md:px-[3em]">
      <nav className="flex items-center justify-between p-4 border-b border-gray-200 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaHeart className="text-[#4cb072de] text-2xl" />
          <h1 className="font-bold text-2xl">MamaSafe</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
              <a href="#" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
      <div className="flex items-center justify-between md:h-[80vh] flex-col gap-[2em] py-8  md:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl">Welcome to MamaSafe</h1>
          <p className="text-gray-400">
            Your Trusted health companion during pregnancy and beyond
          </p>
          <div>
            <button
              className="bg-[#4cb072de] rounded-[2em] px-[1em] py-[0.5em] text-white"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>
        </div>
        <img
          className="md:w-[50%] w-[100%] rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1591451855781-9eb0f9726a33?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dddd"
        />
      </div>
      <div className="bg-[#9d9d9d24] flex flex-col md:flex-row gap-[2em] px-[2em] py-[4em]">
        <div className="flex flex-col gap-4 justify-between p-[2em] shadow-md rounded-lg bg-white">
          <FaHeartbeat className="text-[#4cb072de] text-2xl" />
          {/* icon */}
          <h1 className="text-[28px]">Health Education</h1>
          <p className="text-gray-400">
            Access Vital maternal health information and resources
          </p>
        </div>{" "}
        <div className="flex flex-col gap-4 justify-between p-[2em] shadow-md rounded-lg bg-white">
          <FaHeartbeat className="text-[#4cb072de] text-2xl" />
          {/* icon */}
          <h1 className="text-[28px]">Appointment Tracking</h1>
          <p className="text-gray-400">
            Never Miss important check-ups and vacinations
          </p>
        </div>{" "}
        <div className="flex flex-col gap-4 justify-between p-[2em] shadow-md rounded-lg bg-white">
          <FaHeartbeat className="text-[#4cb072de] text-2xl" />
          {/* icon */}
          <h1 className="text-[28px]">Community Support</h1>
          <p className="text-gray-400">
            Connect with other mothers and healthcare providers
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 my-[4em] px-[6em]">
        <div className="flex flex-col items-center justify-between px-[2em] md:py-[4em] py-[2em]">
          <h1 className="font-bold text-[27px]">1000+</h1>
          <p className="text-gray-400">Users</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between px-[2em]  md:py-[4em] py-[2em]">
          <h1 className="font-bold text-[27px]">50+</h1>
          <p className="text-gray-400 text-center">Healthcare Partners</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between px-[2em] md:py-[4em] py-[2em]">
          <h1 className="font-bold text-[27px]">24/7</h1>
          <p className="text-gray-400">support</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between px-[2em] md:py-[4em] py-[2em]">
          <h1 className="font-bold text-[27px]">100%</h1>
          <p className="text-gray-400">safe</p>
        </div>{" "}
      </div>

      <footer className="flex flex-col items-center justify-center gap-4 p-6 text-gray-400 border-t border-gray-200">
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
