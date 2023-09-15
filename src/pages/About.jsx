import React, { useState } from "react";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  const [more, setMore] = useState(false);
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://www.stjohnsunited.org/wp-content/uploads/Family-Pg-1-1600x600.jpg"
        }
        heading={"About us"}
        text={"  about us - who we are?"}
      />
      <div className=" w-[90%] lg:w-[80%] mx-auto py-16">
        <div className=" flex flex-col lg:flex-row justify-between">
          <div className=" lg:w-[50%]">
            <div className="mb-8">
              <h1 className=" text-white font-semibold text-2xl tracking-wide capitalize">
                Our Agency story
              </h1>
              <p className="text-gray-500">
                Check out our company story and work process
              </p>
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quod illo officia necessitatibus maiores repellendus cum excepturi
              error tenetur aliquam asperiores ut odit blanditiis quam dolorem a
              aut natus rem, molestiae dolorem.
            </p>
            <br />

            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              maiores, vero quibusdam officiis consequuntur voluptatem similique
              corporis magni laborum quae. blanditiis quam dolorem a aut natus
              rem, molestiae dolorem.
            </p>
            {more && (
              <div>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  temporibus ut esse fuga consectetur libero consequuntur
                  eligendi est autem, aut fugit deleniti repudiandae rerum
                  tempore exercitationem excepturi perferendis voluptatem,
                  dolores incidunt vitae deserunt vel nobis culpa numquam?
                  Voluptate quidem veritatis repellendus soluta aliquam itaque
                  asperiores totam nobis, repudiandae numquam. Suscipit esse
                  quaerat porro voluptatibus quas nostrum eius quae nihil? Illo
                  hic, impedit ipsum quas minima voluptatum, autem molestias
                  quibusdam omnis consequuntur veniam similique doloremque
                  earum!
                </p>
              </div>
            )}

            <br />
            <button
              onClick={() => setMore(!more)}
              className=" bg-green-700 text-white py-3 px-6 rounded-full"
            >
              {more ? "Show less" : "More about us"}
            </button>
          </div>
          <div className=" mt-6 ">
            <img
              className=" "
              src="https://img.freepik.com/free-photo/portrait-african-american-family-taking-selfie-together-with-digital-tablet-home-family-lifestyle-concept_58466-12031.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph"
              alt=""
            />
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
