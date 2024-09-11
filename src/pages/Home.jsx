import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
// import Service from "../components/Service";
import banner from "../assets/luxe salon.png";
// import banner2 from "../assets/1.png";
// import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <img className=" w-full" src={banner} alt="" />

      {/* <img className=" w-full" src={banner2} alt="" /> */}
    </>
  );
};

export default Home;
