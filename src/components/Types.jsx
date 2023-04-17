import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdVilla } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa";
import { RiBuilding2Fill } from "react-icons/ri";

const Types = () => {
  return (
    <div className=" bg-gray-50 py-10">
      <div className="w-[80%] mx-auto">
        <div className=" text-center ">
          <p className="capitalize text-2xl font-semibold">
            {" "}
            Featured property types
          </p>
          <p className="text-gray-500"> Find All Type of Property</p>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-7  gap-3 md:gap-10 mt-10">
          <div className="  group bg-white hover:bg-red-700 shadow-md p-3 md:p-7 ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-red-100 group-hover:scale-125  flex justify-center items-center text-red-700  h-14 w-14 rounded-full">
                <HiHomeModern size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-semibold uppercase   text-center group-hover:text-red-100">
                  family house
                </h3>

                <p className="text-gray-600  text-center capitalize group-hover:text-red-100">
                  122 property
                </p>
              </div>
            </div>
          </div>

          <div className=" group bg-white hover:bg-green-700  shadow-md p-3 md:p-7  ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-green-100 group-hover:scale-125  flex justify-center items-center text-green-700  h-14 w-14 rounded-full">
                <MdVilla size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-medium uppercase text-center group-hover:text-green-100">
                  Villa
                </h3>

                <p className="text-gray-600 text-center capitalize group-hover:text-green-100 ">
                  67 property
                </p>
              </div>
            </div>
          </div>

          <div className="  group bg-white hover:bg-pink-700 shadow-md p-3 md:p-7 ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-pink-100 group-hover:scale-125  flex justify-center items-center text-pink-700  h-14 w-14 rounded-full">
                <HiHomeModern size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-semibold uppercase text-center group-hover:text-pink-100">
                  Bungalow
                </h3>

                <p className="text-gray-600 text-center capitalize group-hover:text-pink-100">
                  122 property
                </p>
              </div>
            </div>
          </div>

          <div className="  group bg-white hover:bg-orange-500 rounded-md  shadow-md p-3 md:p-7 ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-yellow-100 group-hover:scale-110 flex justify-center items-center text-orange-500  h-14 w-14 rounded-full">
                <BsFillBuildingsFill size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-medium group-hover:text-orange-100 uppercase text-center">
                  Apartment
                </h3>

                <p className="text-gray-600 text-center capitalize group-hover:text-orange-100 ">
                  1000 property
                </p>
              </div>
            </div>
          </div>

          <div className="  group bg-white hover:bg-gray-700 shadow-md p-3 md:p-7 ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-gray-100 group-hover:scale-125  flex justify-center items-center text-gray-700  h-14 w-14 rounded-full">
                <HiHomeModern size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-semibold uppercase text-center group-hover:text-gray-100">
                  duplex
                </h3>

                <p className="text-gray-600 text-center capitalize group-hover:text-gray-100">
                  122 property
                </p>
              </div>
            </div>
          </div>

          <div className=" group bg-white hover:bg-purple-700 shadow-md p-3 md:p-7 rounded-md   ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-purple-100 group-hover:scale-110 flex justify-center items-center text-purple-700  h-14 w-14 rounded-full">
                <FaBuilding size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-medium text-center group-hover:text-purple-100 uppercase">
                  office
                </h3>

                <p className="text-gray-600 text-center group-hover:text-purple-100 capitalize ">
                  80 property
                </p>
              </div>
            </div>
          </div>

          <div className="  group bg-white hover:bg-red-700 shadow-md p-3 md:p-7 ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-red-100 group-hover:scale-125  flex justify-center items-center text-red-700  h-14 w-14 rounded-full">
                <HiHomeModern size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-semibold uppercase text-center group-hover:text-red-100">
                  mini mansion
                </h3>

                <p className="text-gray-600 text-center capitalize group-hover:text-red-100">
                  122 property
                </p>
              </div>
            </div>
          </div>

          <div className=" group bg-white hover:bg-blue-700 shadow-md p-3 md:p-7 rounded-md ">
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-blue-100 group-hover:scale-125 flex justify-center items-center text-blue-700  h-14 w-14 rounded-full">
                <RiBuilding2Fill size={30} />
              </div>
              <div className=" mt-8">
                <h3 className="font-medium uppercase text-center group-hover:text-blue-100 ">
                  condo
                </h3>

                <p className="text-gray-600 text-center group-hover:text-blue-100  capitalize ">
                  20 property
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
