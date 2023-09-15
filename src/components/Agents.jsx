import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "osinachi ifedinachi",
      img: "https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/0x0.jpg?format=jpg&width=1200",
      location: "Accountant",
      listings: "42",
    },
    {
      id: 2,
      name: "Obialor Willams",
      img: "https://media.istockphoto.com/id/1350800599/photo/happy-indian-business-man-leader-manager-standing-in-office-headshot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=pz5kwfLy64_AQIwiv9FDDJWWkAzb2Lf1F5fjZW23dBo=",
      location: "Ikeja Lagos",
      listings: "10",
    },
    {
      id: 3,
      name: "Obeneme chimenem",
      img: "https://az505806.vo.msecnd.net/cms/49bcf23b-16f2-47a8-8571-a6a360910814/91f8412f-791a-443a-a607-6316d1eb757c-lg.jpg",
      location: "Asaba Delta",
      listings: "12",
    },

    {
      id: 5,
      name: "Olobo Miriam",
      img: "https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1642223720668-I2XL35T6SMPTDZPOTRFJ/DCP_0085.jpg",
      location: "Uyo Akwa-Ibom",
      listings: "14",
    },
    {
      id: 6,
      name: "Kennet Wokoma",
      img: "https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY=",
      location: "Victoria-Island Lagos",
      listings: "102",
    },
  ];
  return (
    <div className=" bg-black py-10">
      <div className=" w-[80%] mx-auto">
        <div className=" text-center ">
          <div className=" text-2xl text-white lg:text-4xl font-semibold capitalize ">
            Meet Our agents
          </div>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-16">
          {agents.map(({ id, img, name, location, listings }) => {
            return (
              <div
                key={id}
                className=" group bg-gray-900 shadow-md rounded-md  h-fit duration-200 ease-in"
              >
                <div className=" flex flex-col justify-center items-center mt-10">
                  <div className=" w-24 h-24 -mt-16 group-hover:mt-0   ">
                    <img
                      className=" group-hover:scale-110 h-full w-full rounded-full object-cover"
                      src={img}
                      alt={name}
                    />
                  </div>
                  <div className="my-4">
                    <p className=" text-white text-center  font-medium capitalize ">
                      {name}
                    </p>
                    <p className=" text-center  text-sm text-gray-400 capitalize">
                      {location}
                    </p>
                    <div className="   text-orange-500">
                      <h3 className="  text-center  text-sm underline cursor-pointer  font-medium ">
                        {listings} listings
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="hidden group-hover:flex mb-4 justify-center items-center gap-4   rounded-tl-3xl  mt-4">
                  <div className=" w-10 h-10 rounded-full bg-green-700 text-gray-50 flex items-center justify-center hover:scale-110 cursor-pointer">
                    <FaFacebookF size={20} />
                  </div>
                  <div className=" w-10 h-10 rounded-full bg-green-700 text-gray-50 flex items-center justify-center hover:scale-110 cursor-pointer">
                    <FaTwitter size={20} />
                  </div>
                  <div className=" w-10 h-10 rounded-full bg-green-700 text-gray-50 flex items-center justify-center hover:scale-110 cursor-pointer">
                    <FaEnvelope size={20} />
                  </div>
                  <div className=" w-10 h-10 rounded-full bg-green-700 text-gray-50 flex items-center justify-center hover:scale-110 cursor-pointer">
                    <FaInstagram size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Agents;
