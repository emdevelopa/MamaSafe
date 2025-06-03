import { useState } from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";

export default function HealthLessons() {
        const [progress, setProgress] = useState(30); 
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl">Health Education</h1>
        <div className="flex items-center gap-4 mt-4 bg-[#e2e2e272] rounded-md px-4 py-3 w-[30%]">
          <input
            type="text"
            className="bg-transparent w-full border-none outline-none"
            placeholder="Search for lessons..."
          />
          <FaSearch className="text-[#4cb07292]" />
        </div>
        <div className="my-10  bg-[#86dea846] px-12 w-full py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
        <button className="  px-6 py-3 bg-[#4cb072de] text-white rounded-md">
          Load More
        </button>
      </div>
    );
} 