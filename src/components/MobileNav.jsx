import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { AiTwotoneHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className=" rounded-t-xl z-50  lg:hidden  fixed bottom-0  w-full  bg-white  shadow-xl ">
      <div className=" px-6 py-3 flex items-center justify-between lg:hidden">
        <div className=" flex flex-col items-center justify-center ">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <BiHomeAlt2 size={30} />
            <p className=" text-xs mt-2">Home</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <MdOutlineExplore size={30} />
            <p className=" text-xs mt-2">Explore</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <AiTwotoneHeart size={30} />
            <p className=" text-xs mt-2">Saved</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <IoPersonOutline size={30} />
            <p className=" text-xs mt-2">More</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
