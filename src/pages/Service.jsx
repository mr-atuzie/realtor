import React from "react";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Types from "../components/Types";
import WhyUs from "../components/WhyUs";

const Service = () => {
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://img.freepik.com/premium-photo/rental-company-employee-is-discussing-details-before-customer-agrees-sign-rental-contract-explaining-details-terms-conditions-rental-real-estate-rental-ideas_528263-4598.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=ais"
        }
        heading={"services"}
        text={"all services - what we do"}
      />
      {/* <Types /> */}
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Service;
