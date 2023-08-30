import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const Main = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className=" p-4">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <img
            src={user?.photo}
            className=" w-[40px] h-[40px] rounded-full object-cover"
            alt=""
          />
          <div>
            <h2 className=" font-medium capitalize">{user?.name}</h2>
            <p className=" text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className=" bg-purple-50 flex justify-center items-center h-[50px] relative w-[50px] rounded-full">
          <IoMdNotificationsOutline size={30} />
          <div className=" w-2 h-2 bg-red-500 rounded-full absolute  right-2"></div>
        </div>
      </div>
      <div className="  p-3 rounded-lg my-6 bg-black">
        <div className=" text-white text-2xl flex items-center gap-1 font-light">
          <span className=" text-sm">$</span>
          <p>1685</p>
        </div>

        <div className=" my-3">
          <button className="flex justify-center gap-1 bg-gray-700 px-4  text-white capitalize items-center rounded-md py-2.5">
            <BsArrowUpShort /> buy
          </button>

          <button className=" flex justify-center gap-1 bg-gray-700 px-4  text-white capitalize items-center rounded-md py-2.5">
            <BsArrowDownShort />
            withdraw
          </button>
        </div>

        <div className=" flex items-center gap-3">
          <div className=" text-white">
            <p className=" text-sm capitalize font-medium">income</p>
            <div className=" text-white text flex items-center gap-1 font-light">
              <span className=" text-sm">$</span>
              <p>2790</p>
            </div>
          </div>

          <div className=" text-white">
            <p className=" text-sm capitalize font-medium">outcome</p>
            <div className=" text-white text flex items-center gap-1 font-light">
              <span className=" text-sm">$</span>
              <p>790</p>
            </div>
          </div>

          <div className=" text-white">
            <p className=" text-sm capitalize font-medium">intrest</p>
            <div className=" text-white text flex items-center gap-1 font-light">
              <span className=" text-sm">$</span>
              <p>3280</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
