import React from "react";
import { PiCrown } from "react-icons/pi";

const How = () => {
  return (
    <div className=" py-8">
      <div className=" w-[90%] mx-auto">
        <h4 className="  text-4xl text-pink-500 capitalize text-center font-bold">
          how it works
        </h4>
        <p className=" text-gray-500 capitalize text-xs md:text-sm text-center mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className=" w-full shadow-md bg-pink-50 py-2.5">
          <div className=" text-white bg-pink-500 p-2 rounded">
            <PiCrown />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, non
            ab. Sapiente!
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
