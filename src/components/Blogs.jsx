import React from "react";

const Blogs = () => {
  const reviews = [
    {
      id: 1,
      name: "wooden things",
      img: "https://img.freepik.com/premium-photo/luxury-interior-exterior-design-pool-villa-with-livingroom_41487-70.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe asperiores ad nisi. ",
    },
    {
      id: 2,
      name: "best interior designs",
      img: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1934.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=ais",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe asperiores ad nisi.",
    },
    {
      id: 3,
      name: "new homes",
      img: "https://img.freepik.com/free-photo/modern-residential-building_1268-14735.jpg?w=996&t=st=1679597371~exp=1679597971~hmac=3b5bd7cbf399e3205df135d328e57d988288a142bc79da9601c087494835bcec",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe asperiores ad nisi. ",
    },
    {
      id: 4,
      name: "country houses",
      img: "https://img.freepik.com/premium-photo/modern-summer-cottage-against-blue-sky-summer-garden-sunny-day_157927-9730.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=ais",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe asperiores ad nisi. ",
    },
    {
      id: 5,
      name: "new and innovative designs",
      img: "https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=sph",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe asperiores ad nisi. ",
    },
    {
      id: 6,
      name: "smart homes",
      img: "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150765.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam saepe asperiores ad nisi.",
    },
  ];
  return (
    <div className=" bg-gray-50 py-10">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="capitalize text-2xl font-semibold">Check our blog</div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-10">
          {reviews.map(({ id, img, name, role, review }) => {
            return (
              <div key={id} className=" ">
                <div className=" w-full h-60">
                  <img
                    className=" h-full w-full object-cover"
                    src={img}
                    alt={name}
                  />
                </div>

                <h3 className=" capitalize font-medium text-lg mt-2">{name}</h3>

                <p className="text-gray-500 text-sm md:text-base">{review}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
