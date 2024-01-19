import React from "react";
import img from "../assets/luxe 2.png";

const About = () => {
  return (
    <div className="w-full lg:h-[90vh] py-8 flex justify-center items-center lg:py-16">
      <div className=" w-[90%] lg:w-[85%]  mx-auto  flex lg:justify-between  lg:items-center flex-col lg:flex-row">
        <img src={img} alt="" className=" rounded w-[500px]" />

        <div>
          <h4 className=" text-4xl font-semibold text-purple-600 ">About us</h4>
          <h2 className="text-2xl lg:text-4xl font-extrabold mb-4">
            About Luxe Salone
          </h2>

          <div className=" lg:max-w-2xl">
            <p className=" text-sm lg:text-base text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quisquam voluptates eum laboriosam excepturi molestiae nulla nihil
              iste non labore.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rem praesentium quis excepturi harum.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Rem praesentium quis excepturi
              harum.
            </p>

            <p className=" text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              praesentium quis excepturi harum.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rem praesentium quis excepturi
              harum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
