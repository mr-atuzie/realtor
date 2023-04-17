import React from "react";
import lagos from "../assets/lagos.jpg";
import ibadan from "../assets/ibadan.jpg";
import abuja from "../assets/abuja.jpg";
import delta from "../assets/delta.jpg";
import ph from "../assets/ph.jpg";
import akwa from "../assets/akwa.jpg";

const Location = () => {
  const cities = [
    {
      id: 1,
      img: abuja,
      name: "Abuja",
    },
    {
      id: 2,
      img: lagos,
      name: "Lagos",
    },
    {
      id: 3,
      img: ph,
      name: "port-harcourt",
    },
    {
      id: 4,
      img: delta,
      name: "delta",
    },
    {
      id: 5,
      img: akwa,
      name: "akwa-ibom",
    },
    {
      id: 6,
      img: ibadan,
      name: "ibadan",
    },
  ];
  return (
    <div className=" bg-gray-50  py-10">
      <div className=" w-[90%] lg:w-[80%] mx-auto ">
        <div>
          <div className=" text-2xl capitalize text-center font-medium">
            {" "}
            explore by location{" "}
          </div>
          <p className="text-gray-500 text-center">
            Voluptatibus officia et quo.Ipsa nobis sint consectetur adipisicing
            elit.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10">
          {cities.map(({ id, img, name }) => {
            return <CityCard img={img} name={name} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

const CityCard = ({ name, img }) => {
  return (
    <div className=" relative">
      <img src={img} alt={name} className=" w-full h-60 object-cover " />
      <div className=" bg-black/25 w-full   z-10 h-full absolute top-0 bottom-0  ">
        <div className=" text-center uppercase text-white flex justify-center items-center font-bold text-lg w-full h-full">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Location;
