import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact2 from "../components/Contact";
import Banner from "../components/Banner";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://img.freepik.com/free-photo/male-worker-answering-telework-phone-call-center-using-audio-headset-microphone-young-man-working-customer-care-disability-friendly-office-handheld-shot-close-up_482257-41941.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.1.89680559.1678048408&semt=ais"
        }
        heading={"contact us"}
        text={"get help and friendly support"}
      />
      <Contact2 />
      <Footer />
    </div>
  );
};

export default Contact;
