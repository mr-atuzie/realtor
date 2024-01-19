import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { shortenText } from "../utils";
import { productData } from "../data";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AllProducts = () => {
  const category = [
    "All",
    "Tops",
    "Trouser",
    "Shoes",
    "Bags",
    "Hats",
    "Jackets",
  ];

  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className=" py-10 lg:py-16">
      <div className=" w-[95%] lg:w-[85%]  mx-auto mb-5">
        <Swiper slidesPerView={4.8}>
          {category.map((cat) => {
            return (
              <SwiperSlide key={cat}>
                <button className=" border border-purple-600 text-xs bg-purple-300 p-2 capitalize text-white font-medium rounded">
                  {cat}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

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

              <p className=" mt-1  text-center text-xs lg:text-sm  font-medium">
                {shortenText(name, 23)}
              </p>

              <p className=" my-1 text-center text-xs lg:text-sm  font-medium">
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
                      totalPrice: Number(price) * 1,
                    })
                  }
                  className="flex rounded items-center gap-2 text-xs bg-purple-600  p-2 text-white font-medium lg:text-sm"
                >
                  <FaShoppingBag /> <span>Add to cart</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
