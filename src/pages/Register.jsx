import React from "react";
import { IoLogoBuffer } from "react-icons/io";

const Register = () => {
  return (
    <div className=" w-full text-lg font-medium flex justify-center items-center h-screen">
      <form className=" w-[90%] lg:w-[38%] ">
        <div className=" flex items-center">
          <IoLogoBuffer size={20} />
          <h1 className=" ml-1 font-semibold text-xs  lg:text-base">ARTECH</h1>
        </div>

        <h2 className="text-xl lg:text-3xl mt-4 font-medium text-center ">
          Create your account
        </h2>
        <p className="text-xs text-gray-500 text-center">
          Let's get started with your 30 days free trail
        </p>

        <div className=" my-4">
          <label className=" text-sm flex items-center" htmlFor="email">
            Email <span className=" text-purple-600">*</span>
          </label>
          <input
            className="border p-2 rounded-full block w-full"
            type="email"
            name="email"
          />
        </div>

        <div className=" my-4">
          <label className=" text-sm flex items-center" htmlFor="email">
            Password <span className=" text-purple-600">*</span>
          </label>
          <input
            className="border p-2 rounded-full block w-full"
            type="password"
            name="password"
          />
        </div>

        <button
          className=" w-full text-center py-2 my-7 bg-black text-white font-semibold rounded-full"
          type="submit"
        >
          Sign up
        </button>

        <h1 className=" text-center text-lg my-4 text-gray-500">or</h1>

        <button
          className=" w-full text-center py-2 my-7 bg-white border text-black font-medium rounded-full"
          type="submit"
        >
          Sign up with Google
        </button>

        <button
          className=" w-full text-center py-2 my-7 bg-white border text-black font-medium rounded-full"
          type="submit"
        >
          Sign up with Facebook
        </button>

        <button
          className=" w-full text-center py-2 my-7 bg-white border text-black font-medium rounded-full"
          type="submit"
        >
          Sign up with X
        </button>
      </form>
    </div>
  );
};

export default Register;
