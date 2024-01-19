import React from "react";
import { Link, NavLink } from "react-router-dom";

const logo = (
  <Link to="/">
    <h2 className=" text-4xl font-semibold">
      Luxe<span className=" text-purple-600">.</span>
    </h2>
  </Link>
);

const activeLink = ({ isActive }) =>
  isActive ? "text-purple-600" : "text-black";

const Navbar = () => {
  return (
    <header className=" bg-white w-full sticky top-0  z-40    py-3">
      <nav className=" w-[85%] mx-auto flex justify-between items-center">
        {logo}

        <ul className="hidden  font-medium text-gray-400 lg:flex gap-8 items-center">
          <li>
            <NavLink className={activeLink} to={"/"}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/about"}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/about"}>
              Service
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/about"}>
              Team
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/about"}>
              Boutique
            </NavLink>
          </li>

          <li>
            <NavLink className={activeLink} to={"/about"}>
              Contact
            </NavLink>
          </li>

          <li>
            <button className=" rounded bg-purple-600 border-2 border-purple-600 text-white px-6">
              Book
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
