import React, { useState, useEffect } from "react";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Service from "../components/Service";
// import banner from "../assets/luxe salon.png";
// import banner2 from "../assets/1.png";
// import Product from "../components/Product";
import bgVid from "../assets/pageantry.mp4";
// import { motion } from "framer-motion";
import ZoopText from "../components/ZoopText";
import { Link } from "react-router-dom";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-14T23:59:59").getTime(); // Set your target date here
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
        className="flex flex-col justify-center items-center p-1.5 bg-gray-900/60 text-white w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg mx-2"
      >
        <span className="text-2xl font-bold md:text-4xl lg:text-5xl">
          {timeLeft[interval]}
        </span>
        <span className="uppercase text-xs lg:text-sm mt-1">{interval}</span>
      </div>
    );
  });

  return (
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
        {/* <motion.h1
          initial="initial"
          whileHover="hovered"
          className=" text-6xl font-extrabold relative block overflow-hidden"
        >
          <motion.div
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            className=""
          >
            MISS UNIVERSE 2024
          </motion.div>
          <motion.div
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            className=" absolute inset-0"
          >
            MISS UNIVERSE 2024
          </motion.div>
        </motion.h1> */}
        <ZoopText text="MISS UNIVERSE 2024 " />

        <p className="text-sm lg:text-lg md:text-2xl ">
          Register now for a chance to win exciting cash prizes and showcase
          your beauty, talent on the grand stage
        </p>
        <div className="flex justify-center mx-auto my-4 items-center">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <Link
          to={"/register"}
          className="bg-pink-500 hover:bg-pink-600 text-sm lg:text-base  text-white font-medium py-3 px-6 rounded-lg transition-all"
        >
          Register now
        </Link>
      </div>

      {/* Overlay  */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Home;
