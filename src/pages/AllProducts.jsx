import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const AllProducts = () => {
  const category = ["All", "Tops", "Trouser", "Bags", "Hats", "Jackets"];
  return (
    <div className=" py-10 lg:py-16">
      <div className=" w-[90%] lg:w-[85%]  mx-auto">
        <Swiper spaceBetween={8} slidesPerView={4.5}>
          {category.map((cat) => {
            return (
              <SwiperSlide key={cat}>
                <button className=" text-xs bg-purple-600  px-4 py-2 capitalize text-white font-medium rounded-lg">
                  {cat}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AllProducts;
