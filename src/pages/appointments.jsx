import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Calendar, Clock, MapPin, Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaBell,
  FaFacebook,
  FaGreaterThan,
  FaHome,
  FaInstagram,
  FaTimes,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

export default function Appointments() {
  const navigate = useNavigate();
  // const remindersData = [
  //   {
  //     title: "Take Folic Acid",
  //     time: "9:00 AM",
  //     recurring: "Daily",
  //     icon: "clock",
  //   },
  //   {
  //     title: "Child Immunization",
  //     date: "June 15",
  //     location: "City Hospital",
  //     icon: "calendar",
  //   },
  //   {
  //     title: "Prenatal Checkup",
  //     date: "June 20, 10:30 AM",
  //     location: "Sunshine Clinic",
  //     icon: "calendar",
  //   },
  // ];
  const [reminders, setReminders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // null means "add" mode
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    date: "",
    location: "",
    recurring: "",
  });
  const handleSave = async () => {
    if (editIndex !== null) {
      // Editing existing reminder
      const reminder = reminders[editIndex];
      const reminderRef = doc(db, "reminders", reminder.id);
      await updateDoc(reminderRef, formData);
      setReminders(
        reminders.map((r, i) =>
          i === editIndex ? { ...reminder, ...formData } : r
        )
      );
    } else {
      // Adding new reminder
      const docRef = await addDoc(collection(db, "reminders"), formData);
      setReminders([...reminders, { ...formData, id: docRef.id }]);
    }
    setShowModal(false);
  };

  useEffect(() => {
    const fetchReminders = async () => {
      const querySnapshot = await getDocs(collection(db, "reminders"));
      const fetched = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReminders(fetched);
    };

    fetchReminders();
  }, []);

  const handleDeleteReminder = async (id) => {
    await deleteDoc(doc(db, "reminders", id));
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const handleAddReminder = async () => {
    const newReminder = {
      title: "New Reminder",
      time: "8:00 AM",
      recurring: "Weekly",
    };

    const docRef = await addDoc(collection(db, "reminders"), newReminder);
    setReminders([...reminders, { ...newReminder, id: docRef.id }]);
  };

  const handleEditReminder = async (id, updatedData) => {
    const reminderRef = doc(db, "reminders", id);
    await updateDoc(reminderRef, updatedData);
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id ? { ...reminder, ...updatedData } : reminder
      )
    );
  };

  return (
    <>
      <nav className="flex items-center bg-[#a7e1bd25] justify-between p-4 border-b border-gray-200 relative">
        {/* Logo */}
        <h1 className="font-bold text-2xl">MamaSafe</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
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
                href="/dashboard"
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

      <div className="px-5 md:px-10 ">
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
              <h1 className="font-bold text-[18px] md:text-[24px]">
                Parental Checkup
              </h1>
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
          <div className="flex gap-2 justify-between items-center mb-6">
            <h2 className="md:text-xl font-semibold">My Reminders</h2>
            <button
              className="flex items-center gap-2 bg-[#4cb072de] hover:bg-green-600 text-white px-2 md:px-4 py-2 rounded-md text-sm"
              onClick={() => {
                setFormData({
                  title: "",
                  time: "",
                  date: "",
                  location: "",
                  recurring: "",
                });
                setEditIndex(null);
                setShowModal(true);
              }}
            >
              <Plus size={16} /> Add New Reminder
            </button>
          </div>
          {reminders.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">No reminders yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reminders.map((reminder, index) => (
                <div
                  key={reminder.id || index}
                  className="bg-white border border-gray-300 rounded-md py-6 px-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{reminder.title}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Pencil
                        className="h-4 w-4 text-gray-500 cursor-pointer"
                        onClick={() => {
                          setFormData(reminder);
                          setEditIndex(index);
                          setShowModal(true);
                        }}
                      />

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
          )}
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
      {/* Modal for add/edit */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#5f5f5f55] bg-opacity-40">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-md">
            <h2 className="text-xl font-bold mb-4">
              {editIndex !== null ? "Edit" : "Add"} Reminder
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Recurring (e.g., Daily)"
                value={formData.recurring}
                onChange={(e) =>
                  setFormData({ ...formData, recurring: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
