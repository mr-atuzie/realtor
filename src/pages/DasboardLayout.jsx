import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import { GiLaurelCrown } from "react-icons/gi";

const DasboardLayout = () => {
  return (
    <div className=" bg-orange-50 min-h-screen ">
      <div className=" bg-white p-4">
        <div className="flex items-center  space-x-2 ">
          <div className="text-pink-500">
            <GiLaurelCrown size={20} />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">The Grand Stage</h4>
        </div>
      </div>
      <div className=" w-[95%] md:w-[90%] lg:w-[85%] my-16 flex justify-center items-center h-fit  mx-auto">
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};

export default DasboardLayout;
