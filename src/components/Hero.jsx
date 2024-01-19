import React from "react";
import banner from "../assets/mobile_banner_1.png";
import banner2 from "../assets/mobile_banner_2.png";
import banner3 from "../assets/luxe salone 1.png";
// import banner4 from "../assets/2.png";
// import { sliderData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: banner,
    },
    {
      id: 2,
      img: banner2,
    },
    {
      id: 3,
      img: banner3,
    },
    // {
    //   id: 4,
    //   img: banner4,
    // },
  ];
  return (
    <div className=" bg-gray-100   w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => {
          const { id, img } = slide;
          return (
            <SwiperSlide key={id}>
              <img
                className="  w-full lg:hidden object-cover"
                src={img}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
