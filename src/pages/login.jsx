import { FaEye, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Login with Firebase Auth
      // const userCredential = await signInWithEmailAndPassword(
      //   auth,
      //   form.email,
      //   form.password
      // );
      // const user = userCredential.user;
      // Fetch user data from Firestore
      const q = query(
        collection(db, "users"),
        where("email", "==", form.email)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        navigate("/dashboard", { state: userData });
      } else {
        setError("User data not found.");
      }
    } catch (err) {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient h-screen flex justify-between w-full">
      <div className="w-[50%] flex items-center justify-center">
        <img
          className="w-[20em] h-[20em] rounded-full object-cover"
          src="https://df6yevl24pl4a.cloudfront.net/filer_public_thumbnails/filer_public/37/c5/37c59250-4029-4b82-8ad2-e49b3ccec3ce/220802-roh.jpg__376x190_q90_crop_subsampling-2_upscale.jpg.webp"
          alt="dddd"
        />
      </div>

      <div className="flex   w-[50%]  flex-col items-center gap-8 justify-center h-full]">
        <div className="text-center">
          <h1 className="text-[#000] text-4xl font-bold">MamaSafe</h1>
          <p className="text-gray-400">Your Trusted Pregnancy Companion</p>
        </div>

        <div className="flex flex-col justify-center  items-center gap-4 bg-white p-8 rounded-[1em] w-[60%]">
          <p className="font-bold">Welcome Back</p>
          <p className="text-gray-400">Login to your account</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
              <label htmlFor="">Email</label>
              <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
                <FaUser />
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
              <label htmlFor="">Password</label>
              <div className="flex justify-between gap-3 border border-gray-300 rounded-lg p-2 items-center">
                <FaLock />
                <input
                  className="border-none  w-full outline-none"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <FaEye />
              </div>
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <button
              className="bg-[#4cb072de] text-white p-3 rounded-lg hover:bg-[#3a9b5c] transition duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="flex flex-col items-center justify-center gap-4  ">
              <p className="text-center"> Secure Login</p>
              <p
                onClick={() => navigate("/login")}
                className="text-[#4cb072de] cursor-pointer text-center hover:underline"
              >
                Forgot Password
              </p>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-[#4cb072de] cursor-pointer text-center hover:underline"
                >
                  Register here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
