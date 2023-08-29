import React from "react";

const Main = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className=" p-5">
      <div className=" flex items-center justify-between">
        <div>
          <h2 className=" font-medium capitalize">{user?.name}</h2>
          <p className=" text-xs text-gray-500">{user?.email}</p>
        </div>
        <img
          src={user?.photo}
          className=" w-[50px] h-[50px] rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
