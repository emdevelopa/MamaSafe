import { Calendar, Clock, LocateFixed, LocateIcon, MapPin, MapPinOff, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  FaBell,
  FaCalendar,
  FaClock,
  FaFacebook,
  FaGreaterThan,
  FaHeart,
  FaHome,
  FaInstagram,
  FaLock,
  FaMapMarked,
  FaMapMarker,
  FaMapMarkerAlt,
  FaMapPin,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
  const navigate = useNavigate();
  const remindersData = [
    {
      title: "Take Folic Acid",
      time: "9:00 AM",
      recurring: "Daily",
      icon: "clock",
    },
    {
      title: "Child Immunization",
      date: "June 15",
      location: "City Hospital",
      icon: "calendar",
    },
    {
      title: "Prenatal Checkup",
      date: "June 20, 10:30 AM",
      location: "Sunshine Clinic",
      icon: "calendar",
    },
  ];
  const [reminders, setReminders] = useState(remindersData);
  return (
    <>
      <nav className="flex items-center  justify-between px-8 py-4 bg-[#a7e1bd25] ">
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
      </nav>
      <div className="px-10 ">
        <p className="flex items-center gap-2  mt-8">
          <FaHome />{" "}
          <span
            className="text-gray-500 hover:underline cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Home
          </span>{" "}
          <FaGreaterThan /> Appointments & Reminders
        </p>
        <h1 className="mt-4 font-bold text-2xl">Appointments & Reminders</h1>
        <div className="border border-gray-300 rounded-lg p-6 mt-4">
          <h1>Next Appointment</h1>
          <div className="flex flex-col rounded-md p-4 gap-3 bg-[#d3fae290] mt-4">
            <div className="flex items-center gap-2 justify-between">
              <h1 className="font-bold text-[24px]">Parental Checkup</h1>
              <p className="text-[#4cb072f4] font-semibold">scheduled</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin /> <p>Sunshine Women's Clinic</p>
            </div>{" "}
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar /> <p>June 12, 2025</p>
            </div>{" "}
            <div className="flex items-center gap-2 text-gray-500">
              <Clock /> <p>10:30AM</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">My Reminders</h2>
            <button className="flex items-center gap-2 bg-[#4cb072de] cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm">
              <Plus size={16} /> Add New Reminder
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reminders.map((reminder, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-md py-6 px-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{reminder.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <Pencil className="h-4 w-4 text-gray-500 cursor-pointer" />
                    <Trash2 className="h-4 w-4 text-gray-500 cursor-pointer" />
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-600 space-y-3">
                  {reminder.time && (
                    <div className="flex items-center gap-2">
                      <Clock /> <span>{reminder.time}</span>
                    </div>
                  )}
                  {reminder.date && (
                    <div className="flex items-center gap-2">
                      <Calendar /> <span>{reminder.date}</span>
                    </div>
                  )}
                  {reminder.location && (
                    <div className="flex items-center gap-2">
                      <MapPin /> <span>{reminder.location}</span>
                    </div>
                  )}
                  {reminder.recurring && (
                    <div className="text-xs text-gray-400">
                      Recurring: {reminder.recurring}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="flex flex-col items-center justify-center gap-4 p-6 text-gray-400 border-t border-gray-200 mt-8">
        <p>Powered by MamaSafe</p>
        <div className="flex gap-4 text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p>&copy; 2024 MamaSafe. All rights reserved.</p>
      </footer>
      {/* <footer className="bg-gray-100 text-sm text-gray-600 py-8 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">About MamaSafe</h4>
            <p>
              Supporting mothers through their journey with care and compassion.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Find a Doctor</li>
              <li>Health Resources</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <ul className="space-y-1">
              <li>support@mamasafe.com</li>
              <li>1-800-MAMASAFE</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-500 border-t border-gray-300 pt-5">
          © 2024 MamaSafe. All rights reserved.
        </div>
      </footer> */}
    </>
  );
}
