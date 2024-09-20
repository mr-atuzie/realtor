import React from "react";
import { PiCrown } from "react-icons/pi";

const How = () => {
  const rules = [1, 2, 3, 5, 6, 7];
  return (
    <div className=" py-4 ">
      <div className=" w-[90%] mx-auto">
        <h4 className="  text-4xl text-pink-500 capitalize text-center font-bold">
          how it works
        </h4>
        <p className=" text-gray-500 capitalize text-xs md:text-sm text-center mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {rules.map((rule) => {
          return (
            <div
              key={rule}
              className=" flex gap-2 items-center w-full shadow-md bg-pink-50 mb-4 p-2"
            >
              <div className=" text-white flex justify-center items-center  bg-pink-500 p-2 rounded">
                <PiCrown />
              </div>
              <p className=" text-sm leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                non ab. Sapiente!
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default How;
