import React from "react";

const About = () => {
  return (
    <div className=" bg-black">
      <div className=" lg:w-[80%] mx-auto py-10">
        <div className=" w-full flex-row-reverse items-center  lg:flex justify-around ">
          <img
            className=" w-[80%] mx-auto lg:w-[40%]"
            src="https://www.edubridgeindia.com/blog/storage/2022/08/jobs-in-banking-sector-scaled.jpg"
            alt=""
          />

          {/* text container */}
          <div className=" w-[80%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <h3 className=" text-white font-semibold text-xl lg:text-3xl capitalize">
              An elegant swimming pool and pool side area
            </h3>
            <p className=" text-gray-500  mt-4 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet,
              veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
            </p>
          </div>
        </div>
        <div className=" w-full my-12  lg:flex  justify-around items-center ">
          <img
            className="w-[80%] mx-auto lg:w-[40%]"
            src="https://usabilitygeek.com/wp-content/uploads/2014/05/ux-practitioners-financial-services.jpg"
            alt=""
          />

          {/* text container */}
          <div className=" w-[80%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <h3 className=" text-white font-semibold text-xl lg:text-3xl capitalize">
              Fun Games in cozy places
            </h3>
            <p className=" text-gray-500 mt-4 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet.
            </p>
          </div>
        </div>
        <div className=" w-full flex-row-reverse items-center  my-6 lg:flex  justify-around ">
          <img
            className=" w-[80%] mx-auto lg:w-[40%]"
            src="https://info.ehl.edu/hubfs/Imported_Blog_Media/client-centric-banking.jpg"
            alt=""
          />

          {/* text container */}
          <div className=" w-[80%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <h3 className=" text-white font-semibold text-xl lg:text-3xl capitalize">
              24 Hours Restaurant and Room service
            </h3>
            <p className=" text-gray-500 text-sm lg:text-base mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;