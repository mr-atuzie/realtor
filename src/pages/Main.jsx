import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Main = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className=" p-5">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <img
            src={user?.photo}
            className=" w-[50px] h-[50px] rounded-full object-cover"
            alt=""
          />
          <h2 className=" font-medium capitalize">{user?.name}</h2>
        </div>

        <div className=" bg-purple-50 h-[50px] relative w-[50px] rounded-full">
          <IoMdNotificationsOutline size={25} />
          <div className=" w-5 h-5 bg-red-500 rounded-full absolute top-0 right-2"></div>
        </div>
      </div>
      <div className=" h-[150px] rounded-lg my-4 bg-black">
        <p className=" text-white text-2xl font-light">
          {" "}
          <span className=" text-sm">$</span>
          2000
        </p>
        {/* <div>
          
          <p className=" text-xs text-gray-500">{user?.email}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
