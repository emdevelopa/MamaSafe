import { CiWarning } from "react-icons/ci";
import { FaBars, FaBell, FaFacebook, FaInstagram, FaTimes, FaTwitter, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CheckSymptoms() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);
    const [checked, setChecked] = useState(false);

    const symptoms = [
      "Severe headache",
      "Blurred Vision",
      "Vaginal bleeding",
      "Swollen feet",
      "High fever",
      "Baby not moving"
    ];

    // Define which symptoms are severe
    const severeSymptoms = [
      "Severe headache",
      "Vaginal bleeding",
      "High fever",
      "Baby not moving"
    ];

    const handleCheckbox = (symptom) => {
      setSelected((prev) =>
        prev.includes(symptom)
          ? prev.filter((s) => s !== symptom)
          : [...prev, symptom]
      );
    };

    const handleCheck = () => {
      setChecked(true);
    };

  const hasSevere = selected.some((s) => severeSymptoms.includes(s));
  
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
        <div className="flex items-center justify-center px-8">
          <div className="w-full md:w-[60%] flex flex-col gap-[3em]">
            <div className="flex flex-col md:flex-row items-center justify-between   py-4 ">
              <div>
                {" "}
                <h1 className="text-4xl font-bold my-8">Check Symptoms</h1>
                <p>
                  Select symptoms you're experiencing. We'll guide you on next
                  step
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1650700680288-e6ea1264883e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lll"
                className="w-[12em] h-[12em] object-cover rounded-full mt-4"
              />
            </div>
            <div className="border flex gap-8 flex-col border-gray-300 rounded-lg p-4">
              {symptoms.map((symptom) => (
                <div className="flex gap-2 items-center" key={symptom}>
                  <input
                    type="checkbox"
                    className="w-6 h-6 border-2 border-green-500 rounded-md appearance-none checked:bg-green-500 checked:border-green-500"
                    checked={selected.includes(symptom)}
                    onChange={() => handleCheckbox(symptom)}
                  />
                  <p className="text-sm">{symptom}</p>
                </div>
              ))}
            </div>
            <button
              className="bg-[#4cb072de] text-white p-3 rounded-lg hover:bg-[#3a9b5c] transition duration-300"
              onClick={handleCheck}
            >
              Check Symptoms Now
            </button>
            {checked && hasSevere && (
              <div className="border flex gap-8 flex-col border-gray-300 rounded-lg p-4">
                <div className="flex gap-2 items-center">
                  <CiWarning className="text-red-400 text-3xl" />
                  <div>
                    <p className="font-bold">
                      Urgent: Visit a clinic immediately
                    </p>
                    <p>please seek medical attention right away</p>
                  </div>
                </div>
                <button className="bg-red-400 text-white p-3 rounded-lg hover:bg-red-500 transition duration-300">
                  Get Help Now
                </button>
              </div>
            )}
            {checked && !hasSevere && (
              <div className="border flex gap-8 flex-col border-green-400 rounded-lg p-4">
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-green-600">
                    No urgent symptoms detected.
                  </p>
                  <p className="text-green-600">
                    Continue to monitor your health and contact your healthcare
                    provider if you feel unwell.
                  </p>
                </div>
              </div>
            )}
          </div>
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
