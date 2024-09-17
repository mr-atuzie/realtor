import React from "react";
import { motion } from "framer-motion";

const ZoopText = ({ text }) => {
  // Split text into an array of characters
  const letters = text.split("");

  // Animation variants for the container and each letter
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger each letter by 0.1s
      },
    },
  };

  const letterVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.5, 1],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-wrap justify-center items-center space-x-2 max-w-full overflow-visible"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.h1
            key={index}
            className="text-6xl md:text-7xl text-center font-extrabold text-white"
            variants={letterVariants}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.h1>
        ))}
      </motion.div>
    </>
  );
};

export default ZoopText;
