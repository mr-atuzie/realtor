import React, { useState } from "react";
import phone from "../assets/pv.jpg";
import { GiOwl } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase-config";
import { Toaster, toast } from "react-hot-toast";

const Phone = () => {
  const [loading, setLoading] = useState(false);
  const [ph, setPh] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            onSignUp();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  };

  function onSignUp() {
    setLoading(true);
    // onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        toast.success("OTP sent successfully");
        navigate("/otp");
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  }

  return (
    <div className=" w-full  py-5 bg-gray-50  h-screen">
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{ duration: 4000 }}
      />
      <div className=" w-[90%] mx-auto ">
        <div id="recaptcha-container"></div>
        <div className="  flex items-center ">
          <GiOwl className=" font-bold" size={20} />
          <h1 className=" ml-1 font-bold text-sm  lg:text-base">ARTECH</h1>
        </div>

        <div className=" my-8">
          <Link to={"/"}>
            <h2 className="text-xl lg:text-3xl font-medium text-center ">
              Phone Verification
            </h2>
          </Link>
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

        <div className=" w-[90%] lg:w-[30%]  mx-auto">
          <div className=" mb-8">
            <label className=" text-gray-800 text-xs" htmlFor="password">
              Phone number
            </label>
            <PhoneInput country={"ng"} value={ph} onChange={setPh} />
            {/* <input
              className="border p-2.5 block w-full"
              type="tel"
              name="phone"
            /> */}
          </div>
          <button
            onClick={handleSubmit}
            className=" w-full text-center py-2.5 rounded my-3 bg-black flex justify-center items-center gap-1 text-white  "
          >
            {loading && <CgSpinner className=" animate-spin" size={25} />}

            <span> Send code via SMS</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
