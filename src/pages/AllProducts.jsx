import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const AllProducts = () => {
  const category = ["All", "Tops", "Trouser", "Bags", "Hats", "Jackets"];
  return (
    <div className=" py-10 lg:py-16">
      <Swiper spaceBetween={8} slidesPerView={5.5}>
        {category.map((cat) => {
          return (
            <SwiperSlide key={cat}>
              <button className=" bg-purple-600 capitalize text-white font-medium rounded">
                {cat}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AllProducts;
