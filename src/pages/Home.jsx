import React, { useState, useEffect } from "react";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Service from "../components/Service";
import banner from "../assets/luxe salon.png";
// import banner2 from "../assets/1.png";
// import Product from "../components/Product";
import bgVid from "../assets/pageantry.mp4";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-14T23:59:59").getTime(); // Set your target date here
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear the interval when the component is unmounted
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col justify-center items-center bg-gray-900/60 text-white w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg mx-2"
      >
        <span className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {timeLeft[interval]}
        </span>
        <span className="uppercase text-sm mt-1">{interval}</span>
      </div>
    );
  });

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
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
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            MISS UNIVERSE 2024
          </h1>
          <p className="text-sm lg:text-lg md:text-2xl mb-6">
            Vote for your favorite contestant and make them win!
          </p>
          <div className="flex justify-center items-center">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
          <a
            href="#contestants"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
          >
            View Contestants
          </a>
        </div>

        {/* Overlay  */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </div>
      <img className=" w-full" src={banner} alt="" />
    </>
  );
};

export default Home;
