import React from "react";
import { IoLogoBuffer } from "react-icons/io";

const Register = () => {
  return (
    <div className=" w-full text-lg font-medium flex justify-center items-center h-screen">
      <form className=" w-[90%] lg:w-[38%] ">
        <div className=" flex items-center text-purple-600">
          <IoLogoBuffer size={20} />
          <h1 className=" ml-2 font-semibold text-xs  lg:text-base">ARTECH</h1>
        </div>

        <h2 className="text-xl lg:text-3xl mt-6 font-medium text-center ">
          Create your account
        </h2>
        <p className="text-sm text-gray-400 text-center">
          Let's get started with your 30 days free trail
        </p>

        <div className=" my-7">
          <label className=" text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="border p-2 rounded-md block w-full"
            type="email"
            name="email"
          />
        </div>

        <div className=" my-7">
          <label className=" text-sm" htmlFor="email">
            Password
          </label>
          <input
            className="border p-2 rounded-md block w-full"
            type="password"
            name="password"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
