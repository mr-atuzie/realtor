import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../components/Product";

const AllProducts = () => {
  const category = ["All", "Tops", "Trouser", "Bags", "Hats", "Jackets"];
  return (
    <div className=" py-10 lg:py-16">
      <div className=" w-[95%] lg:w-[85%]  mx-auto">
        <Swiper slidesPerView={5.8}>
          {category.map((cat) => {
            return (
              <SwiperSlide key={cat}>
                <button className=" text-xs bg-purple-600 p-2 capitalize text-white font-medium rounded">
                  {cat}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Product />
    </div>
  );
};

export default AllProducts;
