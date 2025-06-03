import { FaEye, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
          <form action="" className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
              <label htmlFor="">Phone Number</label>
              <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center">
                <FaPhone />
                <input
                  className="border-none outline-none"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Phone Number</label>
              <div className="flex justify-between gap-3 border border-gray-300 rounded-lg p-2 items-center">
                <FaLock />
                <input
                  className="border-none  w-full outline-none"
                  type="text"
                  placeholder="+234"
                />
                <FaEye />
              </div>
            </div>
            <button
              className="bg-[#4cb072de] text-white p-3 rounded-lg hover:bg-[#3a9b5c] transition duration-300"
              onClick={() => navigate("/dashboard")}
            >
              Login
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
