import React from "react";
// import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

const CountUpAnimation = ({ count }) => {
  // const [count, setCount] = useState(from);

  // useEffect(() => {
  //   const controls = setInterval(() => {
  //     setCount((prev) => {
  //       if (prev < to) {
  //         return prev + 1;
  //       } else {
  //         clearInterval(controls);
  //         return to;
  //       }
  //     });
  //   }, (duration * 1000) / (to - from));

  //   return () => clearInterval(controls);
  // }, [from, to, duration]);

  const props = useSpring({
    from: { number: 0 },
    to: { number: count },
    config: { duration: 300 }, // Adjust duration for faster or slower animation
  });

  return (
    <>
      {/* <motion.div
      key={count}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-xl font-bold"
      style={{ willChange: "transform" }}
    >
      {count}
    </motion.div> */}
      <animated.div className="text-xl font-bold">
        {props.number.to((n) => n.toFixed(0))}
      </animated.div>
    </>
  );
};

export default CountUpAnimation;
