import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const logos = [
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/Mastercard-logo-500x281-min.png",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIqYQfNEDn3oCmqg9KCOhctlHVAusITKLDA&s",
    },
    {
      img: "https://static-00.iconduck.com/assets.00/globacom-limited-icon-2048x2048-uovm3iz4.png",
    },
    {
      img: "https://logomak.com/blog/wp-content/uploads/2023/09/McDonalds-logo-500x281-min.png",
    },
    {
      img: "https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZvyZGvu4n4g8IS-ZUURV0JnT3tFCoRSrKQ&s",
    },
    {
      img: "https://brandcom.ng/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-29-at-4.52.23-PM-1536x1404.jpeg",
    },
    {
      img: "https://brandcom.ng/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-29-at-4.52.23-PM-1536x1404.jpeg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkT3mS6rRD5tN-EXsCTCoOx85Sg3qRMC4Pg&s",
    },
  ];
  return (
    <div className=" font2 bg-pink-100 py-4 lg:py-8">
      <div className=" w-[90%] lg:w-[60%] mx-auto">
        <h1 className=" text-center font-extrabold">Our Partners</h1>

        <Marquee direction="right" speed={70} gradient={false} pauseOnHover>
          <div className=" grid gap-4 mb-1 items-center grid-cols-5 ">
            {logos.slice(0, 5).map((logo, index) => {
              return (
                <img
                  className=" w-14 lg:w-24"
                  key={index}
                  src={logo.img}
                  alt=""
                />
              );
            })}
          </div>
        </Marquee>
        <Marquee direction="left" speed={70} gradient={false} pauseOnHover>
          <div className=" grid gap-4 items-center grid-cols-5">
            {logos.slice(5, 10).map((logo, index) => {
              return (
                <img
                  className=" w-14 lg:w-24"
                  key={index}
                  src={logo.img}
                  alt=""
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
