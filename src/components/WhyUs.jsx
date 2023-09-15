import React from "react";

const WhyUs = () => {
  const reviews = [
    {
      id: 1,
      name: "affordable",
      review:
        "Able to be bought or rented by people who do not earn a lot of money",
    },
    {
      id: 2,
      name: "reliable",
      review:
        "Can be trusted , there is complete absence of error, breakdown, or poor performance",
    },
    {
      id: 3,
      name: "safe",
      review:
        "Unlikely that any harm, damage, or unpleasant things will happen to the people or things that are there",
    },
    {
      id: 4,
      name: "new",
      review:
        "Produced, introduced, or discovered recently or now for the first time",
    },
  ];

  return (
    <div className=" bg-gray-50  py-10">
      <div className="w-[80%] mt-10 lg:mt-0 mx-auto">
        {/* <div className=" text-center capitalize text-2xl font-semibold">
          why delve?
        </div> */}
        <p className="text-gray-500 text-center">We're trusted</p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mt-10">
          {reviews.map(({ id, name, review }) => {
            return (
              <div
                key={id}
                className=" group bg-white  hover:bg-green-700 hover:mb-4  duration-300 rounded-md shadow-md p-7 "
              >
                <div className=" flex flex-col justify-center items-center group-hover:text-white">
                  <h3 className="font-medium text-lg text-green-700 group-hover:text-white uppercase  mt-4 ">
                    {name}
                  </h3>

                  <p className="text-center text-gray-600  group-hover:text-white mt-2 ">
                    {review}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
