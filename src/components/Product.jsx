import React from "react";
import "swiper/css";
// import { shortenText } from "../utils";
import { productData } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const Team = () => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full   py-8 flex flex-col  justify-center items-center lg:py-16">
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
      <div className=" w-[90%] lg:w-[85%]  mt-10  mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
        {productData.map((slide, index) => {
          const { imageurl, price, id } = slide;
          return (
            <div key={index}>
              <img
                className=" h-40 rounded lg:h-52 w-full object-cover"
                src={imageurl}
                alt=""
              />
              <p className=" my-1.5 text-center text-sm  font-medium">
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
                  className=" bg-purple-600 p-2 text-white font-medium text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
