import React from "react";
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
      <div className=" h-[150px] rounded-lg my-6 bg-purple-700">
        <div className=" text-white text-2xl flex items-center gap-1 font-light">
          <span className=" text-sm">$</span>
          <p>2000</p>
        </div>

        <div>
          <button className=" bg-transparent text-white capitalize items-center rounded-md py-2.5">
            buy
          </button>

          <button className=" bg-transparent text-white capitalize items-center rounded-md py-2.5">
            withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
