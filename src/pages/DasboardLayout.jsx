import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import { GiLaurelCrown } from "react-icons/gi";

const DasboardLayout = () => {
  return (
    <div className=" bg-orange-50">
      <div className=" bg-white   p-4">
        <div className="flex items-center  space-x-2 ">
          <div className="text-pink-500">
            <GiLaurelCrown size={20} />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">The Grand Stage</h4>
        </div>
      </div>
      <div className="  w-[95%] md:w-[90%]  mx-auto lg:w-[85%]  flex justify-center items-center  mt-10 mb-24 lg:mb-0">
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};

export default DasboardLayout;
