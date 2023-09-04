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
import OTPInput from "otp-input-react";

const Phone = () => {
  const [loading, setLoading] = useState(false);
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");

  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   setLoading(true);
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-container",
  //       {
  //         size: "normal",
  //         callback: (response) => {
  //           onSignUp();
  //         },
  //         "expired-callback": () => {
  //           // Response expired. Ask user to solve reCAPTCHA again.
  //           // ...
  //         },
  //       }
  //     );
  //   }
  // };

  // function onSignUp() {
  //   setLoading(true);
  //   // onCaptchVerify();

  //   const appVerifier = window.recaptchaVerifier;
  //   const formatPh = "+" + ph;

  //   signInWithPhoneNumber(auth, formatPh, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       setLoading(false);
  //       toast.success("OTP sent successfully");
  //       navigate("/otp");
  //     })
  //     .catch((error) => {
  //       // Error; SMS not sent
  //       console.log(error);
  //     });
  // }

  const getOTP = async (e) => {
    e.preventDefault();
    console.log(ph);
    setLoading(true);

    if (ph === "" || ph === undefined)
      return toast.error("Please enter a valid number");

    const formatPh = "+" + ph;

    try {
      const response = await setUpRecaptcha(formatPh);
      console.log(response);
      setFlag(true);
      setConfirmObj(response);
      toast.success("OTP sent successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );

    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const verifyOTP = async (e) => {
    e.preventDefault();
    console.log(otp);
    setLoading(true);

    if (otp === "" || otp === null)
      return toast.error("Invalid verification code");

    try {
      await confirmObj.confirm(otp);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className=" w-full  py-5 bg-gray-50  h-screen">
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{ duration: 4000 }}
      />
      <div className=" w-[90%] mx-auto ">
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

        {!flag && (
          <form onSubmit={getOTP} className=" w-[90%] lg:w-[30%]  mx-auto">
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
              type="submit"
              className=" w-full text-center py-2.5 rounded my-3 bg-black flex justify-center items-center gap-1 text-white  "
            >
              {loading && <CgSpinner className=" animate-spin" size={25} />}

              <span> Send code via SMS</span>
            </button>

            <div id="recaptcha-container"></div>
          </form>
        )}

        {flag && (
          <form onSubmit={verifyOTP} className=" w-[90%] lg:w-[38%]  mx-auto">
            <div className=" mb-10  flex flex-col justify-center items-center">
              <label className=" text-gray-800 text-sm mb-4" htmlFor="password">
                Enter your OTP
              </label>
              <OTPInput
                value={otp}
                onChange={setOtp}
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
              type="submit"
            >
              {loading && <CgSpinner className=" animate-spin" size={25} />}

              <span> Verify OTP</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Phone;
