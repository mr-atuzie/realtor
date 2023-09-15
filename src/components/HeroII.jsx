import React from "react";
import vid from "../assets/crypto2.mp4";

const HeroII = () => {
  return (
    <div className="relative h-[80vh] lg:h-[80vh]  bg-black w-full">
      <video
        src={vid}
        className=" w-full h-full object-cover"
        autoPlay
        loop
        muted
      />

      <div className=" w-full h-full absolute top-0 z-30 bg-black/20 flex  items-center">
        <div className=" w-[80%] mx-auto text-center">
          <p className="text-white capitalize tracking-wide font-medium  text-base my-3">
            recieve. Transfer. Send Money Safely
          </p>
          <h1 className="  text-orange-600 uppercase text-3xl lg:text-5xl font-bold ">
            Lorem ipsum dolor sit amet consectetur.
            <br /> adipisicing elit. Aperiam.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroII;
