import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about-us", name: "about" },
    { id: 3, link: "/services", name: "services" },
    { id: 4, link: "/blog", name: "blog" },
    { id: 5, link: "/pricing", name: "pricing" },
    { id: 6, link: "/contact-us", name: "contacts" },
  ];

  return (
    <nav className=" flex justify-between items-center w-full h-20  px-4   bg-white">
      <div>
        <h1 className=" z-10 text-3xl lg:text-5xl font-semibold  uppercase  ml-2">
          Delve
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => {
          return (
            <li
              key={id}
              className=" capitalize px-4 cursor-pointer font-medium  hover:scale-105 duration-200"
            >
              <Link to={link}> {name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden md:flex">
        <button className=" bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black ">
          Resume
        </button>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer z-40 pr-4 md:hidden"
      >
        {nav ? <IoCloseOutline size={30} /> : <HiOutlineBars3 size={30} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-center absolute z-40 items-center bg-gray-50 top-0 left-0 w-full h-screen">
          {links.map(({ id, link, name }) => {
            return (
              <Link to={link} onClick={() => setNav(!nav)}>
                <li
                  key={id}
                  className=" px-4 cursor-pointer capitalize py-4 text-xl  hover:scale-105 duration-200"
                >
                  {name}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
