import React from "react";
import { motion } from "framer-motion";

function Box3() {
  const boxVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const listVariants = {
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },

    hidden: {
      x: -10,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="mb-10 h-40 w-40 bg-green-300 flex flex-col items-center justify-center"
      variants={boxVariants}
      animate="visible"
      initial="hidden"
    >
      <motion.li
        variants={listVariants}
        className="list-none bg-white h-8 w-8 mx-auto mb-3"
      ></motion.li>
      <motion.li
        variants={listVariants}
        className="list-none bg-white h-8 w-8 mx-auto mb-3"
      ></motion.li>
      <motion.li
        variants={listVariants}
        className="list-none bg-white h-8 w-8 mx-auto"
      ></motion.li>
    </motion.div>
  );
}

export default Box3;
