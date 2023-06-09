import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Packages = () => {
  return (
    <div className=" bg-gray-50 py-10">
      <div className="w-[93%] md:w-[80%] mx-auto">
        <div className="capitalize  text-2xl font-semibold text-center">
          {" "}
          our Packages
        </div>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-10">
          <div className=" bg-white p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-red-500 text-lg font-semibold tracking-wide uppercase">
                basic
              </h1>
              <div className=" flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  65,000
                </h2>
              </div>
              <p className=" capitalize text-gray-500">Pay per momth</p>
            </div>

            <ul className=" mt-5">
              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className=" text-gray-600  capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                8 hours of electricity daily.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly in-house clean ups.
              </li>
            </ul>

            <button className="text-white bg-green-700  rounded-full p-4 w-full uppercase font-medium my-4">
              start basic plan
            </button>
          </div>

          <div className=" bg-white p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-lg text-yellow-500 font-semibold tracking-wide uppercase">
                platinum
              </h1>
              <div className=" flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  1, 600,000
                </h2>
              </div>
              <p className=" capitalize text-gray-500">Pay for 2 Year</p>
            </div>

            <ul className=" mt-5">
              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                12 hours of electricity daily.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily in-house clean ups.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                gym membership
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                rotary club membership
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily News paper
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                No caution fee needed
              </li>
            </ul>

            <button className="text-white bg-green-700  rounded-full p-4 w-full uppercase font-medium my-4">
              start platinum plan
            </button>
          </div>

          <div className=" bg-white p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-lg font-semibold  text-orange-500  uppercase">
                standard
              </h1>
              <div className=" flex items-center ">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className="text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  750,000
                </h2>
              </div>
              <p className=" capitalize text-gray-500">Pay per years</p>
            </div>

            <ul className=" mt-5">
              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                24 hours of electricity daily.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily in-house clean ups.
              </li>

              <li className=" text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                access to gym .
              </li>
            </ul>

            <button className="text-white bg-green-700  rounded-full p-4 w-full uppercase font-medium my-4">
              start standard plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
