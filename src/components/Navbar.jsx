import React, { useState, useEffect } from "react";
import { GiQueenCrown } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const colorWaveAnimation = {
    hidden: { opacity: 1 },
    visible: {
      background: [
        "linear-gradient(to right, #ec4899, #db2777)", // Pink gradient
        "linear-gradient(to right, #db2777, #f472b6)", // Lighter pink
        "linear-gradient(to right, #f472b6, #ec4899)", // Reset gradient
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-4"
          initial="hidden"
          animate="visible"
        >
          {/* Crown with animated color wave */}
          <motion.div
            className="text-pink-500"
            style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
            variants={colorWaveAnimation}
          >
            <GiQueenCrown size={35} />
          </motion.div>

          {/* Text with animated color wave */}
          <motion.h4
            className="text-4xl font-semibold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #ec4899, #db2777)",
              WebkitBackgroundClip: "text", // Ensures gradient applies only to text
              backgroundClip: "text",
            }}
            variants={colorWaveAnimation}
          >
            The Grand Stage
          </motion.h4>
        </motion.div>

        {/* Links */}
        <div className="space-x-8 hidden md:flex">
          <a href="#home" className="text-white hover:text-purple-500">
            Home
          </a>
          <a href="#contestants" className="text-white hover:text-purple-500">
            Contestants
          </a>
          <a href="#about" className="text-white hover:text-purple-500">
            About
          </a>
          <a href="#contact" className="text-white hover:text-purple-500">
            Contact
          </a>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
