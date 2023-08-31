import React from "react";
import phone from "../assets/pv.jpg";
import { GiOwl } from "react-icons/gi";
import OTPInput from "otp-input-react";

const Otp = () => {
  return (
    <div className=" w-full  py-5  h-screen">
      <div className=" w-[90%] mx-auto ">
        <div className="  flex items-center ">
          <GiOwl className=" font-bold" size={20} />
          <h1 className=" ml-1 font-bold text-sm  lg:text-base">ARTECH</h1>
        </div>

        <div className=" my-8">
          <h2 className="text-xl lg:text-3xl font-medium text-center ">
            Phone Verification
          </h2>

          <p className="text-xs text-gray-500 text-center">
            Enter your phone number to recieve a verifaction code
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <img
          width={200}
          height={200}
          className=" my-3 object-cover rounded-full"
          src={phone}
          alt=""
        />

        <form className=" w-[90%] lg:w-[38%]  mx-auto">
          <div className=" mb-3">
            <label className=" text-gray-800 text-xs" htmlFor="password">
              Enter your OTP
            </label>
            <OTPInput></OTPInput>
            <input
              className="border p-2 rounded-xl block w-full"
              type="tel"
              name="phone"
            />
          </div>
          <button
            className=" w-full text-center py-2 my-3 bg-purple-600 text-white  rounded-xl"
            type="submit"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
