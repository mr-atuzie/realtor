import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
import Banner from "../components/Banner";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://img.freepik.com/free-photo/maldives-house-exotic-travel-sea_1203-5358.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=sph"
        }
        heading={"blog"}
        text={"blog grid - our blog"}
      />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Blog;
