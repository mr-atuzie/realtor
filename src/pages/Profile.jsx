import React from "react";
import { GiLaurelCrown } from "react-icons/gi";

const Profile = () => {
  return (
    <div className=" w-full p-6 bg-white shadow-md rounded-lg space-y-6 mt-10 mb-24 lg:mb-0">
      {/* Contestant Info */}
      <div className="flex items-center justify-center space-x-2 mb-5">
        <GiLaurelCrown size={30} className="text-pink-500" />
        <h2 className="text-lg font-semibold capitalize">Profile</h2>
      </div>
      <div className=" text-sm">
        <h2 className="font-medium capitalize text-gray-600">Name</h2>
        <p>ATUZIE REX HABINUCHI</p>
      </div>

      <div className=" text-sm">
        <h2 className="font-medium capitalize text-gray-600">Email</h2>
        <p>rexatuzie@gmail.com</p>
      </div>

      <div className=" text-sm">
        <h2 className="font-medium capitalize text-gray-600">Phone Number</h2>
        <p>0815 084 2137</p>
      </div>
    </div>
  );
};

export default Profile;
