import { FaFacebook, FaHeart, FaHeartbeat, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="px-[3em]">
      <nav className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center justify-center gap-2">
          <FaHeart className="text-[#4cb072de] text-2xl" />
          <h1 className="font-bold text-2xl">MamaSafe</h1>
        </div>

        <ul className="flex space-x-4">
          <li>
            <a>Home</a>
          </li>
          <li>
            <li>
              <a>About</a>
            </li>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex  items-center justify-between h-[80vh]">
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
          className="w-[50%] rounded-xl object-cover"
          src="https://balaoverseas.com/wp-content/uploads/2022/11/bg22.jpg"
          alt="dddd"
        />
      </div>
      <div className="bg-[#9d9d9d24] flex gap-[2em] px-[2em] py-[4em]">
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
          <h1 className="text-[28px]">Health Education</h1>
          <p className="text-gray-400">
            Access Vital maternal health information and resources
          </p>
        </div>{" "}
        <div className="flex flex-col gap-4 justify-between p-[2em] shadow-md rounded-lg bg-white">
          <FaHeartbeat className="text-[#4cb072de] text-2xl" />
          {/* icon */}
          <h1 className="text-[28px]">Health Education</h1>
          <p className="text-gray-400">
            Access Vital maternal health information and resources
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 my-[4em] px-[6em]">
        <div className="flex flex-col items-center justify-between px-[2em] py-[4em]">
          <h1 className="font-bold text-[27px]">1000+</h1>
          <p className="text-gray-400">Users</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between px-[2em] py-[4em]">
          <h1 className="font-bold text-[27px]">50+</h1>
          <p className="text-gray-400">Healthcare Partners</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between px-[2em] py-[4em]">
          <h1 className="font-bold text-[27px]">24/7</h1>
          <p className="text-gray-400">support</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between px-[2em] py-[4em]">
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
