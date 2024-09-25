import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountUpAnimation = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = setInterval(() => {
      setCount((prev) => {
        if (prev < to) {
          return prev + 1;
        } else {
          clearInterval(controls);
          return to;
        }
      });
    }, (duration * 1000) / (to - from));

    return () => clearInterval(controls);
  }, [from, to, duration]);

  return (
    <motion.div
      key={count}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-xl font-bold"
    >
      {count}
    </motion.div>
  );
};

export default CountUpAnimation;
