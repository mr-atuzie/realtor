import React from "react";
import phone from "../assets/pv.jpg";
import { GiOwl } from "react-icons/gi";
import { Link } from "react-router-dom";

const Phone = () => {
  return (
    <div className=" w-full bg-purple-50  py-5  h-screen">
      <div className=" w-[90%] mx-auto ">
        <div className="  flex items-center text-purple-600">
          <GiOwl className=" font-bold" size={20} />
          <h1 className=" ml-1 font-bold text-sm text-black  lg:text-base">
            ARTECH
          </h1>
        </div>
        <div className=" my-8">
          <Link to={"/"}>
            <h2 className="text-xl lg:text-3xl font-medium text-center ">
              Create your account
            </h2>
          </Link>
          <p className="text-xs text-gray-500 text-center">
            Improve your business by creating a strong digital presence.
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <img
          width={200}
          height={200}
          className=" my-8 object-cover rounded-full"
          src={phone}
          alt=""
        />

        <form className=" w-[90%] lg:w-[38%] py-5 mx-auto">
          <div>
            <p className=" text-center text-gray-500 text-xs">
              Enter your phone number to recieve a verifaction code
            </p>
          </div>
          <div className=" mb-3">
            <input
              className="border p-2 rounded-xl block w-full"
              type="tel"
              name="phone"
            />
          </div>
          <button
            className=" w-full text-center py-2 my-4 bg-purple-600 text-white  rounded-xl"
            type="submit"
          >
            SEND OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Phone;
