import React from "react";
import { IoLogoBuffer } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Register = () => {
  return (
    <div className=" w-full  h-screen">
      <form className=" w-[90%] lg:w-[38%] py-5 mx-auto">
        <div className=" flex items-center text-purple-600">
          <IoLogoBuffer size={20} />
          <h1 className=" ml-1 font-semibold text-xs  lg:text-base">ARTECH</h1>
        </div>

        <div className=" my-8">
          <h2 className="text-xl lg:text-3xl font-medium text-center ">
            Create your account
          </h2>
          <p className="text-xs text-gray-500 text-center">
            Let's get started with your 30 days free trail
          </p>
        </div>

        <div className=" my-3">
          <div className=" text-sm flex items-center">
            <label htmlFor="email">Email</label>
            <span className=" text-purple-600">*</span>
          </div>
          <input
            className="border p-2 rounded-full block w-full"
            type="email"
            name="email"
          />
        </div>

        <div className=" my-3">
          <div className=" text-sm flex items-center">
            <label htmlFor="password">Password</label>
            <span className=" text-purple-600">*</span>
          </div>
          <input
            className="border p-2 rounded-full block w-full"
            type="password"
            name="password"
          />
        </div>

        <button
          className=" w-full text-center py-2 my-7 bg-purple-600 text-white  rounded-2xl"
          type="submit"
        >
          Sign up
        </button>

        <h1 className=" text-center text-lg my-4 text-gray-500">or</h1>

        <button
          className=" w-full  flex items-center gap-1 text-center py-2 my-7 bg-white border text-black rounded-full"
          type="submit"
        >
          <FcGoogle />
          Sign up with Google
        </button>

        <button
          className=" w-full flex items-center gap-1 text-center py-2 my-2 bg-white border text-black  rounded-full"
          type="submit"
        >
          <FaFacebook />
          Sign up with Facebook
        </button>

        <button
          className=" w-full  flex items-center gap-1 text-center py-2 my-2 bg-white border text-black  rounded-full"
          type="submit"
        >
          <FaTwitter />
          Sign up with X
        </button>
      </form>
    </div>
  );
};

export default Register;
