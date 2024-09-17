import React from "react";
import { motion } from "framer-motion";

const ZoopText = ({ text }) => {
  // Animation variants
  const zoopVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.5, 1],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.h1
        className="text-5sxl md:text-7xl font-extrabold text-white"
        variants={zoopVariants}
        initial="hidden"
        animate="visible"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default ZoopText;
