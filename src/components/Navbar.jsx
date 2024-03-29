import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { selectQuantity } from "../redux/features/cartSlice";
import { useSelector } from "react-redux";
import logoImg from "../assets/logo.png";

const logo = (
  <Link to="/">
    <img width={60} src={logoImg} alt="" />
  </Link>
);

const activeLink = ({ isActive }) =>
  isActive ? "text-purple-600" : "text-black";

const Navbar = () => {
  const cartQty = useSelector(selectQuantity);

  const cart = (
    <span className="  ">
      <Link className=" flex" to={"/cart"}>
        <div className=" ml-1 relative flex items-center ">
          <FaShoppingBag size={20} />
          <p className=" bg-purple-600 text-white h-4 w-4  font-medium text-xs text-center flex justify-center items-center rounded-full absolute -top-1 left-3">
            {cartQty}
          </p>
        </div>
      </Link>
    </span>
  );

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className=" bg-white w-full sticky top-0  z-40  py-1.5 shadow-lg   lg:py-3">
      <nav className=" w-[85%] mx-auto flex justify-between items-center">
        <RxHamburgerMenu
          className="lg:hidden cursor-pointer"
          size={22}
          onClick={toggleMenu}
        />

        {logo}

        <ul className="hidden  font-medium text-gray-400 lg:flex gap-8 items-center">
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
        </ul>

        {cart}
      </nav>
      {showMenu && (
        <div
          onClick={hideMenu}
          className=" z-40 shadow-lg  bg-purple-50 fixed lg:hidden top-0 right-0  w-full min-h-64 p-4"
        >
          <div className=" flex justify-between items-center">
            {logo} <FaTimes onClick={hideMenu} size={20} />
          </div>

          <ul className=" text-sm  px-2 flex flex-col gap-4">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/products">Shop</NavLink>
            </li>
            <li className="">
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li className="">
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li className="">
              <NavLink to="/login">Login/Register</NavLink>
            </li>
            <li>
              <button className="  bg-purple-600 rounded p-2 text-white font-medium ">
                Book appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
