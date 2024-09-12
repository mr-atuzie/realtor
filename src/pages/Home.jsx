import React from "react";
// import Hero from "../components/Hero";
import About from "../components/About";
// import Service from "../components/Service";
import banner from "../assets/luxe salon.png";
// import banner2 from "../assets/1.png";
// import Product from "../components/Product";
import bgVid from "../assets/pageantry.mp4";

const Home = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoplay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content on top of the video */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to [Your Pageant Name]
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Vote for your favorite contestant and make them win!
          </p>
          <a
            href="#contestants"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
          >
            View Contestants
          </a>
        </div>

        {/* Overlay  */}
        <div class="absolute inset-0 bg-black opacity-50 z-0"></div>
      </div>
      <About />
      <img className=" w-full" src={banner} alt="" />
    </>
  );
};

export default Home;
