import React from "react";
import "swiper/css";
import { shortenText } from "../utils";
import { productData } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full   py-10 flex flex-col  justify-center items-center lg:py-16">
      <div className=" text-center">
        <h4 className=" text-4xl font-semibold text-center text-purple-600 ">
          Boutique
        </h4>
        <h2 className=" text-center text-2xl lg:text-4xl font-extrabold capitalize ">
          our Collections
        </h2>

        <p className=" text-xs lg:text-base text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          harum quisquam itaque quas? Nam provident voluptatum reprehenderit?
        </p>
      </div>

      <Link
        className=" text-xs my-10 font-medium text-purple-600 uppercase"
        to={"/products"}
      >
        sell all
      </Link>

      <div className=" w-[90%] lg:w-[85%]  mx-auto grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
        {productData.map((slide, index) => {
          const { imageurl, price, id, name } = slide;
          return (
            <div key={index}>
              <img
                className=" h-40 rounded lg:h-52 w-full object-cover"
                src={imageurl}
                alt=""
              />

              <p className="  text-center text-xs lg:text-sm  font-medium">
                {shortenText(name)}
              </p>

              <p className=" my-1.5 text-center text-xs lg:text-sm  font-medium">
                {price}
              </p>

              <div className=" flex justify-center items-center rounded">
                <button
                  onClick={() =>
                    handleClick({
                      id,
                      price,
                      imageurl,
                      quantity: 1,
                    })
                  }
                  className=" bg-purple-600 rounded p-1  lg:p-2 text-white font-medium text-sm"
                >
                  <FaShoppingBag />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" flex justify-center items-center  mt-10">
        <Link to={"/products"}>
          <button className=" text-xs lg:text-sm px-2 rounded border border-purple-600 uppercase bg-white text-purple-600  hover:bg-purple-600 hover:text-white ease-in-out duration-300">
            view more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
