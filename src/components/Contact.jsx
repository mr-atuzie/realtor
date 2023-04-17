import React from "react";

const Contact = () => {
  return (
    <div className=" bg-green-700 py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>
          <h1 className="uppercase text-white text-3xl lg:text-4xl font-semibold tracking-wider">
            Do you have a question?
          </h1>
          <p className=" text-sm lg:text-base capitalize tracking-wide  font-medium  text-white my-2">
            We'll help you to find the best Accommodation for you.
          </p>
        </div>

        <button className=" bg-white font-medium text-green-700 px-6 py-3 capitalize rounded-full">
          contact us today
        </button>
      </div>
    </div>
  );
};

export default Contact;
