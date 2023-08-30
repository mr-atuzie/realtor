import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Main = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className=" p-5">
      <div className=" flex items-center justify-between">
        <img
          src={user?.photo}
          className=" w-[50px] h-[50px] rounded-full object-cover"
          alt=""
        />

        <div className=" bg-purple-50 h-[50px] w-[50px] rounded-full">
          <IoMdNotificationsOutline size={25} />
        </div>
      </div>
      <div className=" f">
        <div>
          <h2 className=" font-medium capitalize">{user?.name}</h2>
          <p className=" text-xs text-gray-500">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
