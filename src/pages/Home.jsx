import React from "react";

import Agents from "../components/Agents";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Packages from "../components/Packages";
import Review from "../components/Review";
import WhyUs from "../components/WhyUs";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Properties from "../components/Properties";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <Properties />
      <Location />
      <Agents />
      <Packages />
      <Blogs />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
