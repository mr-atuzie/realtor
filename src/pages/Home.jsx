import React from "react";
// import Hero from "../components/Hero";
import About from "../components/About";
// import Service from "../components/Service";
import banner from "../assets/luxe salon.png";
// import banner2 from "../assets/1.png";
// import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* <iframe
          class="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=0&loop=1&playlist=VIDEO_ID"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="rex"
        ></iframe> */}

        <iframe
          className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/C4O0EfvKxFQ?si=FmLTZpyxxwg1KlTC&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Pageant</h1>
          <p className="text-xl">Vote for your favorite contestant!</p>
        </div>
      </div>
      <About />
      <img className=" w-full" src={banner} alt="" />

      {/* <img className=" w-full" src={banner2} alt="" /> */}
    </>
  );
};

export default Home;
