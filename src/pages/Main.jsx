import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import MobileNav from "../components/MobileNav";

const Main = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className=" p-4">
      <MobileNav />
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <img
            src={
              !user?.photo
                ? "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                : user?.photo
            }
            className=" w-[40px] h-[40px] rounded-full object-cover"
            alt=""
          />
          <div>
            <h2 className=" font-medium capitalize text-sm">{user?.name}</h2>
            <p className=" text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className=" bg-gray-50 flex justify-center items-center h-[50px] relative w-[50px] rounded-full">
          <IoMdNotificationsOutline size={30} />
          <div className=" w-2 h-2 bg-red-500 rounded-full absolute  left-2"></div>
        </div>
      </div>
      <div className="  p-4 rounded-lg my-6 bg-black shadow-xl">
        <div className="flex flex-col justify-center">
          <p className=" text-xs text-white  uppercase font-medium">
            Account Balance
          </p>
          <div className=" text-white text-2xl flex items-center gap-1 font-light">
            <span className=" text-sm">$</span>
            <p>1685</p>
          </div>
        </div>

        <div className=" my-6 flex gap-4">
          <button className="flex text-sm justify-center gap-1 bg-gray-800 px-4  text-white capitalize items-center rounded-md py-2.5">
            <BsArrowUpShort /> buy
          </button>

          <button className="text-sm flex justify-center gap-1 bg-gray-800 px-4  text-white capitalize items-center rounded-md py-2.5">
            <BsArrowDownShort />
            withdraw
          </button>
        </div>

        <div className=" flex items-center gap-3">
          <div className=" text-white flex flex-col justify-center items-center">
            <p className=" text-xs capitalize font-medium">income</p>
            <div className=" text-sm text-white text flex items-center gap-1 font-light">
              <span className=" text-xs">$</span>
              <p>2790</p>
            </div>
          </div>

          <div className=" text-white flex flex-col justify-center items-center">
            <p className=" text-xs capitalize font-medium">outcome</p>
            <div className=" text-sm text-white text flex items-center gap-1 font-light">
              <span className=" text-xs">$</span>
              <p>790</p>
            </div>
          </div>

          <div className=" text-white flex flex-col justify-center items-center">
            <p className=" text-xs capitalize font-medium">intrest</p>
            <div className="text-sm text-white text flex items-center gap-1 font-light">
              <span className=" text-xs">$</span>
              <p>3280</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
