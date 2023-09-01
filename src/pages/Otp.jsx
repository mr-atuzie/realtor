import React, { useState } from "react";
import phone from "../assets/pv.jpg";
import { GiOwl } from "react-icons/gi";
import { CgSpinner } from "react-icons/cg";
import OTPInput from "otp-input-react";

const Otp = () => {
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className=" w-full bg-purple-50  py-5  h-screen">
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
          <div className=" mb-10  flex flex-col justify-center items-center">
            <label className=" text-gray-800 text-sm mb-4" htmlFor="password">
              Enter your OTP
            </label>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
            ></OTPInput>
            {/* <input
              className="border p-2 rounded-xl block w-full"
              type="tel"
              name="phone"
            /> */}
          </div>
          <button
            className=" w-full text-center py-2.5 rounded my-3 bg-purple-600 flex justify-center items-center gap-1 text-white  "
            onClick={() => setLoading(false)}
          >
            {loading && <CgSpinner className=" animate-spin" size={25} />}

            <span> Verify OTP</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
