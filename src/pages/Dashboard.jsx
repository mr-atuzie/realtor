import React from "react";
import { AiOutlineBarChart, AiOutlineTrophy } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi";
import {
  RiBarcodeLine,
  RiCalendarCheckLine,
  RiCalendarLine,
  RiSignalWifiLine,
} from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* Contestant Info */}
      <div className="flex items-center space-x-4">
        <GiLaurelCrown size={40} className="text-pink-500" />
        <h2 className="text-2xl font-bold capitalize">Contestant Dashboard</h2>
      </div>

      {/* Contestant's Name */}
      <div className="flex items-center space-x-2">
        <span className="text-pink-500">
          <FaUser />
        </span>
        <div>
          <h2 className="font-semibold capitalize text-gray-600">
            Contestant's Name
          </h2>
          <p className="text-lg font-medium">ATUZIE REX HABINUCHI</p>
        </div>
      </div>

      {/* Contestant's Code */}
      <div className="flex items-center space-x-2">
        <span className="text-pink-500">
          <RiBarcodeLine />
        </span>
        <div>
          <h2 className="font-semibold capitalize text-gray-600">
            Contestant's Code
          </h2>
          <p className="font-mono text-lg">ART9085431</p>
        </div>
      </div>

      {/* Contestant's Status */}
      <div className="flex items-center space-x-2">
        <span className="text-pink-500">
          <RiSignalWifiLine />
        </span>
        <div>
          <h2 className="font-semibold capitalize text-gray-600">
            Contestant's Status
          </h2>
          <p className="font-mono text-lg">Active</p>
        </div>
      </div>

      {/* Votes Count */}
      <div className="flex items-center space-x-2">
        <span className="text-pink-500">
          <AiOutlineBarChart />
        </span>
        <div>
          <h2 className="font-semibold capitalize text-gray-600">
            Votes Count
          </h2>
          <p className="font-mono text-lg">9,085,431</p>
        </div>
      </div>

      {/* Votes Rank */}
      <div className="flex items-center space-x-2">
        <span className="text-pink-500">
          <AiOutlineTrophy />
        </span>
        <div>
          <h2 className="font-semibold capitalize text-gray-600">Votes Rank</h2>
          <p className="font-mono text-lg">1st</p>
        </div>
      </div>

      {/* Votes Start and End */}
      <div className="flex items-center space-x-2">
        <span className="text-pink-500">
          <RiCalendarCheckLine />
        </span>
        <div>
          <h2 className="font-semibold capitalize text-gray-600">Vote Start</h2>
          <p className="font-mono text-lg">January 1, 2024</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-pink-500">
          <RiCalendarLine />
        </span>
        <div>
          <h2 className="font-semibold capitalize text-gray-600">Vote End</h2>
          <p className="font-mono text-lg">January 31, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
