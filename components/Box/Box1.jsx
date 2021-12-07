import React, { useState } from "react";
import { motion } from "framer-motion";

function Box1() {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <motion.div
      className="mb-10 h-40 w-40 bg-green-300"
      animate={{
        x: isAnimating ? "900px" : "0",
        opacity: isAnimating ? 1 : 0.5,
        rotate: isAnimating ? 360 : 0,
      }}
      initial={{
        opacity: 0.2,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
      }}
      onClick={() => setIsAnimating(!isAnimating)}
    ></motion.div>
  );
}

export default Box1;
