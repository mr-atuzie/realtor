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
        staggerChildren: 0.1, // Stagger each letter by 0.1s
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
        className="flex space-x-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-6xl md:text-7xl font-bold text-white"
            variants={letterVariants}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default ZoopText;
