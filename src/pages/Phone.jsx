import React from "react";
import phone from "../assets/pv.jpg";

const Phone = () => {
  return (
    <div className=" w-full bg-purple-50  py-5  h-screen">
      <div className=" flex flex-col items-center">
        <img
          width={200}
          height={200}
          className=" my-8 object-cover rounded-full"
          src={phone}
          alt=""
        />

        <div>
          <h2 className=" font-semibold">Register</h2>
          <p className=" text-gray-500 text-sm">
            Enter your phone number to verify your account
          </p>
        </div>
        <form className=" w-[90%] lg:w-[38%] py-5 mx-auto"></form>
      </div>
    </div>
  );
};

export default Phone;
