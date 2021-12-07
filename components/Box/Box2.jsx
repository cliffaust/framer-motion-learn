import React from "react";
import { motion } from "framer-motion";

function Box2() {
  return (
    <motion.div
      className="mb-10 h-40 w-40 bg-green-300"
      drag
      dragConstraints={{
        right: 100,
        left: -20,
        bottom: 0,
        top: -20,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    ></motion.div>
  );
}

export default Box2;
