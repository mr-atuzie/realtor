import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const AllProducts = () => {
  const category = ["All", "Tops", "Trouser", "Bags", "Hats", "Jackets"];
  return (
    <div className=" py-10 lg:py-16">
      <Swiper spaceBetween={50} slidesPerView={3}>
        {category.map((cat) => {
          return (
            <SwiperSlide key={cat}>
              <button className=" capitalize bg-white  border border-purple-600  text-purle-600 rounded">
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
