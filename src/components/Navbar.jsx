import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

import { GiQueenCrown } from "react-icons/gi";

// const activeLink = ({ isActive }) =>
//   isActive ? "text-purple-600" : "text-black";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const hideMenu = () => {
  //   setShowMenu(false);
  // };

  return (
    <div className=" absolute top-0 w-full z-50">
      <div className=" flex items-center justify-between py-2.5 w-[90%] mx-auto">
        <div className=" text-pink-500">
          <GiQueenCrown size={30} />
        </div>

        <button className=" text-pink-500" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
