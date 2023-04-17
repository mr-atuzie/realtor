import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Contact from "../components/Contact";
import Banner from "../components/Banner";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://img.freepik.com/premium-photo/real-estate-sign-front-new-house-sale_488220-251.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=ais"
        }
        heading={"30 days money back gurantee"}
        text={"no extra fee. friendly support"}
      />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Pricing;
