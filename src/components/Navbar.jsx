import React, { useState } from "react";
import { GiOwl } from "react-icons/gi";
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

  const handleNav = () => {
    setNav(!nav);
    console.log("nav clicked");
  };

  return (
    <div className=" p-4 absolute top-0 z-40  w-full   ">
      <div className=" w-[90%] lg:w-[80%] mx-auto  flex justify-between items-center">
        <div className=" flex items-center text-black">
          <GiOwl className=" font-bold" size={20} />
          <h1 className=" ml-1 font-bold text-sm   lg:text-base">TRADE-FAIR</h1>
        </div>

        <ul className="hidden text-gray-400 md:flex ">
          {links.map(({ id, link, name }) => {
            return (
              <li
                key={id}
                className=" capitalize px-4 cursor-pointer over:scale-105 duration-200"
              >
                <Link to={link}> {name}</Link>
              </li>
            );
          })}
        </ul>

        <Link to={"/register"}>
          <button className="hidden md:flex rounded bg-green-700 text-white px-6 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black ">
            Get Started
          </button>
        </Link>

        <button
          onClick={handleNav}
          className=" text-white  cursor-pointer pr-4 rounded-full  z-50  md:hidden"
        >
          {nav ? <IoCloseOutline size={20} /> : <HiOutlineBars3 size={20} />}
        </button>
      </div>
      {nav && (
        <div className=" p-6 z-40 duration-300 flex flex-col fixed  shadow-md bg-black/90 top-0 right-0  w-[80vw] h-screen">
          <ul className=" mt-11   ">
            {links.map(({ id, link, name }) => {
              return (
                <Link to={link} onClick={() => setNav(!nav)}>
                  <li
                    key={id}
                    className=" px-4 cursor-pointer text-gray-50 capitalize py-4   hover:scale-105 duration-200"
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>

          <Link to={"/register"}>
            <button className=" text-sm lg:text-base rounded bg-green-700 mt-16 text-white px-6 py-2.5 lg:py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black ">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
