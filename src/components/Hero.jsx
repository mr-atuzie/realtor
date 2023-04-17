import React from "react";

const Hero = () => {
  return (
    <div className="h-[70vh] flex">
      <div className=" w-full h-full bg-gray-50 flex items-center">
        <div className=" w-full h-full">
          <div className=" w-[90%] mt-5 lg:mt-0  lg:w-[60%] h-full flex flex-col lg:justify-center   mx-auto">
            <p className="text-sm hidden lg:block text-gray-500 mb-1 capitalize">
              Do you need help find your new home?
            </p>
            <h1 className="text-3xl lg:text-4xl text-center lg:text-start font-bold text-green-700 uppercase tracking-wider">
              New home, with <br /> Great Prices.
            </h1>
            <p className=" lg:text-lg my-4 text-center lg:text-start">
              You don't have to break the bank to get your dream home.Our Agents
              are here to Find The Best Accommodation For You.
            </p>
            <div className=" flex justify-center items-center lg:hidden">
              <button className=" bg-green-700 capitalize text-white w-36 py-3  rounded-md ">
                view properties
              </button>
            </div>

            <div className=" relative mt-6">
              <div className="p-6 absolute top-0 bg-white w-full lg:w-[1000px]  shadow-md grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300  text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Location</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>

                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Property type</option>
                  <option value="US">Family home</option>
                  <option value="CA">Bungalow</option>
                  <option value="FR">Duplex</option>
                  <option value="DE">Condo</option>
                </select>

                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Price</option>
                  <option value="US">
                    &#x20A6; 30,000,000 - &#x20A6; 20,000,000
                  </option>
                  <option value="US">
                    &#x20A6; 19,000,000 - &#x20A6; 10,000,000
                  </option>
                  <option value="CA">
                    &#x20A6; 9,000,000 - &#x20A6; 1,000,000
                  </option>
                  <option value="FR">
                    &#x20A6; 900,000 - &#x20A6; 400,000
                  </option>
                </select>

                <button className=" bg-green-700 p-4 text-white rounded-lg capitalize cursor-pointer">
                  search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full h-full bg-gray-200">
          <img
            src="https://s42814.pcdn.co/wp-content/uploads/2020/09/iStock_185930591-scaled.jpg.optimal.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
