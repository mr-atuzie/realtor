import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiQueenCrown } from "react-icons/gi";

// const activeLink = ({ isActive }) =>
//   isActive ? "text-purple-600" : "text-black";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className=" bg-white w-full sticky top-0  z-40  py-1.5 shadow-lg   lg:py-3">
      <nav className=" w-[90%] mx-auto flex justify-between items-center">
        <div className=" text-purple-500">
          <GiQueenCrown size={30} />
        </div>

        <button className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* <ul className="hidden  font-medium text-gray-400 lg:flex gap-8 items-center">
          <li>
            <NavLink className={activeLink} to={"/"}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/products"}>
              Boutique
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/cart"}>
              Cart
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/register"}>
              Register / login
            </NavLink>
          </li>

          <li>
            <button className=" rounded bg-purple-600 border-2 border-purple-600 text-white px-6">
              Book
            </button>
          </li>
        </ul> */}

        {/* {cart} */}
      </nav>
      {showMenu && (
        <div
          onClick={hideMenu}
          className=" z-40 shadow-lg  bg-purple-50 fixed lg:hidden top-0 right-0  w-full min-h-64 p-4"
        >
          <div className=" flex justify-between items-center">
            <div className=" text-purple-500">
              <GiQueenCrown size={30} />
            </div>

            <button onClick={hideMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul className=" text-sm  px-2 flex flex-col gap-4">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="  bg-purple-600 rounded p-2 text-white font-medium ">
              <NavLink to="/login">Login/Register</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
