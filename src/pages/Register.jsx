import React from "react";
// import { IoLogoBuffer } from "react-icons/io";
import { GiOwl } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaApple } from "react-icons/fa";

const Register = () => {
  return (
    <div className=" w-full  h-screen">
      <form className=" w-[90%] lg:w-[38%] py-5 mx-auto">
        <div className=" flex items-center text-purple-600">
          <GiOwl size={30} />
          <h1 className=" ml-1 font-bold text-xs  lg:text-base">ARTECH</h1>
        </div>

        <div className=" my-8">
          <h2 className="text-xl lg:text-3xl font-medium text-center ">
            Create your account
          </h2>
          <p className="text-xs text-gray-500 text-center">
            Improve your business by creating a strong digital presence.
          </p>
        </div>

        <div className=" my-3">
          <label className=" text-sm" htmlFor="email">
            Email
          </label>

          <input
            className="border p-2 rounded-xl block w-full"
            type="email"
            name="email"
          />
        </div>

        <div className=" my-3">
          <label className=" text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="border p-2 rounded-xl block w-full"
            type="password"
            name="password"
          />
        </div>

        <button
          className=" w-full text-center py-2 my-5 bg-purple-600 text-white  rounded-xl"
          type="submit"
        >
          Sign up
        </button>

        <h1 className=" text-center text-lg my-6 text-gray-500">or</h1>

        <button
          className=" w-full  flex items-center justify-center gap-2 text-center py-2 my-4 bg-white border text-black rounded-full"
          type="submit"
        >
          <FcGoogle />
          Sign up with Google
        </button>

        <button
          className=" w-full  flex items-center gap-2 text-center justify-center py-2 my-4 bg-white border   rounded-full"
          type="submit"
        >
          <FaFacebook className="text-blue-600" />
          Sign up with Facebook
        </button>

        <button
          className=" w-full   flex items-center gap-2 text-center justify-center py-2 my-4 bg-white border   rounded-full"
          type="submit"
        >
          <FaApple className="text-black" />
          Sign up with Apple
        </button>

        <button
          className=" w-full  flex items-center gap-2 text-center justify-center py-2 my-4 bg-white border rounded-full"
          type="submit"
        >
          <FaTwitter className="text-blue-500" />
          Sign up with Twitter
        </button>
      </form>
    </div>
  );
};

export default Register;
