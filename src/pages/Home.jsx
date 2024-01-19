import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Service from "../components/Service";
import banner from "../assets/luxe salon.png";
import banner2 from "../assets/1.png";
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <img className=" w-full" src={banner} alt="" />
      <Team />
      <img className=" w-full" src={banner2} alt="" />
    </div>
  );
};

export default Home;
