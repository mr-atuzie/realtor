import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";

const DasboardLayout = () => {
  return (
    <div className=" bg-orange-50">
      <div className=" w-[95%] md:w-[90%] lg:w-[85%]  mx-auto">
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};

export default DasboardLayout;
