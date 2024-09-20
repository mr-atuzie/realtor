import About from "../components/About";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import How from "../components/How";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <How />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
