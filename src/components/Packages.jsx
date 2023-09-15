import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Packages = () => {
  return (
    <div className="border-t border-gray-600  bg-black py-10">
      <div className="w-[80%] mx-auto">
        <div className=" text-center text-white text-lg lg:text-4xl font-semibold capitalize ">
          {" "}
          our Packages
        </div>
        <p className="text-gray-500 text-center text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis.
        </p>
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3  md:gap-10 mt-10">
          <div className=" bg-gray-900 p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-red-500 text-lg font-semibold tracking-wide uppercase">
                basic
              </h1>
              <div className=" text-white flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-white text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  65,000
                </h2>
              </div>
              <p className=" capitalize text-gray-500">Pay per momth</p>
            </div>

            <ul className=" mt-5">
              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className="text-sm lg:text-base text-gray-400  capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                8 hours of electricity daily.
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly in-house clean ups.
              </li>
            </ul>

            <button className="text-white bg-green-700  rounded-full py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start basic plan
            </button>
          </div>

          <div className=" bg-gray-900 p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-lg text-yellow-500 font-semibold tracking-wide uppercase">
                platinum
              </h1>
              <div className=" text-white flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  1, 600,000
                </h2>
              </div>
              <p className=" capitalize text-gray-500">Pay for 2 Year</p>
            </div>

            <ul className=" mt-5">
              <li className=" text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                12 hours of electricity daily.
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily in-house clean ups.
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                gym membership
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                rotary club membership
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily News paper
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                No caution fee needed
              </li>
            </ul>

            <button className="text-white bg-green-700  rounded-full py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start platinum plan
            </button>
          </div>

          <div className=" bg-gray-900 p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-lg font-semibold  text-orange-500  uppercase">
                standard
              </h1>
              <div className=" flex items-center text-white ">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className="text-white text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  750,000
                </h2>
              </div>
              <p className=" capitalize text-gray-500">Pay per years</p>
            </div>

            <ul className=" mt-5">
              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                24 hours of electricity daily.
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily in-house clean ups.
              </li>

              <li className="text-sm lg:text-base text-gray-400 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                access to gym .
              </li>
            </ul>

            <button className="text-white bg-green-700  rounded-full py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start standard plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
