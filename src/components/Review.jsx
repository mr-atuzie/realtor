import React from "react";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Review = () => {
  const reviews = [
    {
      id: 10,
      name: "Amarachi Nwabuko",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuydsp3RjWux3ih_fwNiTUpL5bu9mTxRk9Q&usqp=CAU",
      role: "Youtuber",
      review: "Lorem ipsum dolor sit amet,   amet nulla, ipsum ex molestias.",
    },
    {
      id: 1,
      name: "sarah Adeyemi",
      img: "https://img.freepik.com/free-photo/people-beauty-style-fashion-glamour-concept-head-shoulders-mysterious-young-african-american-woman-dressed-stylishly-posing-staring-with-playful-charming-smile_344912-1028.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=ais",
      role: "photographer",
      review:
        "Lorem  Veniam saepe asperiores ad nisi impedit doloribus amet nulla, ipsum ex molestias.",
    },
    {
      id: 2,
      name: "John Okafor",
      img: "https://img.freepik.com/free-photo/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isolated_158538-6979.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=ais",
      role: "medical doctor",
      review:
        "Lorem ipsum  Veniam saepe asperiores ad nisi impedit doloribus amet nulla, ipsum ex molestias.",
    },
    {
      id: 3,
      name: "salman bin umar",
      img: "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=ais",
      role: "pilot",
      review:
        "Lorem ipsum dolor .consectetur adipisicing elit. Veniam  impedit doloribus amet nulla, ipsum ex molestias.",
    },
    {
      id: 4,
      name: "Daniel benson",
      img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=ais",
      role: "artist",
      review:
        "Lorem  saepe asperiores ad nisi impedit doloribus amet nulla, ipsum ex molestias.",
    },
    {
      id: 5,
      name: "Okoro Annabell",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6xf8RlQTcX0ZV19PMTJodosUZJg-m2H2iw&usqp=CAU",
      role: "gym instructor",
      review: "Lorem ipsum dolor sit amet,  amet nulla, ipsum ex molestias.",
    },
    {
      id: 6,
      name: "Lisa amadi",
      img: "https://media.istockphoto.com/id/1301953681/photo/young-woman-student-outdoor-portrait.jpg?s=612x612&w=0&k=20&c=T4IhT-D5RgQqdn5oBz_utSRrsWQFqvkC-VtLjeEN8kg=",
      role: "model",
      review:
        "Lorem ipsum nisi impedit doloribus amet nulla, ipsum ex molestias.",
    },
    {
      id: 7,
      name: "Abubakar Abdul",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmA11lkr6AqM3WKu7fFIN9oA3mbI7XJ9b6w&usqp=CAU",
      role: "Naval officer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam   amet .",
    },
    {
      id: 8,
      name: "Grace hartly",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuydsp3RjWux3ih_fwNiTUpL5bu9mTxRk9Q&usqp=CAU",
      role: "Youtuber",
      review:
        "Lorem ipsum dolor sit amet,  Veniam saepe asperiores ad  doloribus amet .",
    },
    {
      id: 9,
      name: "Mr charles",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuydsp3RjWux3ih_fwNiTUpL5bu9mTxRk9Q&usqp=CAU",
      role: "Youtuber",
      review:
        "Lorem ipsum dolor sit amet. Veniam saepe asperiores ad ipsum ex molestias.",
    },
  ];

  return (
    <div className=" bg-black py-10 lg:py-40 border-t border-gray-200 ">
      <div className="w-[80%] mx-auto">
        <div className=" text-white flex justify-center items-center">
          <FaQuoteLeft />
          <div className=" mt-6 text-center capitalize text-white lg:text-4xl font-semibold">
            What our customer say about us
          </div>
          <FaQuoteRight />
        </div>
        <p className="text-gray-500 text-xs lg:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis.
        </p>

        <div className="  mt-16">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1.7,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            spaceBetween={50}
            // navigation
            // pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {reviews.map(({ id, img, name, role, review }) => {
              return (
                <SwiperSlide
                  key={id}
                  className="group hover:bg-white duration-200 ease-in bg-gray-900 shadow-md  p-4 lg:p-7   rounded-md"
                >
                  <div>
                    <div className=" ">
                      <p className="text-gray-300 text-sm lg:text-base group-hover:text-black ">
                        {review}
                      </p>

                      <div className="flex  items-center gap-4">
                        <img
                          className=" w-10 h-10 rounded-full object-cover"
                          src={img}
                          alt={name}
                        />

                        <div>
                          <h3 className=" text-sm group-hover:text-black  text-white capitalize   mt-4">
                            {name}
                          </h3>

                          <p className=" text-gray-400 group-hover:text-black text-xs  capitalize">
                            {role}
                          </p>
                        </div>
                      </div>

                      {/* <div className=" flex gap-1 my-3 text-yellow-700">
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                        <BsStarFill size={20} />
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
