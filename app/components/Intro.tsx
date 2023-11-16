"use client";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Intro = () => {
  return (
    <motion.div
      id="intro"
      className="w-full min-h-[calc(100vh-3.5rem)] h-fit flex flex-col justify-center mx-auto my-1 md:px-24 md:max-w-7xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="font-secondary text-[var(--primary)] text-sm dark:font-semibold md:text-base"
        variants={childVariants}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="mt-3 mb-4 leading-[1.4] font-black text-gray-950 dark:text-gray-400"
        variants={childVariants}
      >
        Michael Muogboh. <br />
        <span className="text-[var(--primary)]">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        className="w-full my-2 leading-relaxed md:w-1/2 md:my-4 md:min-w-[500px]"
        variants={childVariants}
      >
        I am a Software Developer dedicated to building sleek and intuitive user
        interfaces and experiences for the web. Currently, I am focused on
        learning and growing as much as I can as a Software Engineer.
        <motion.span
          animate={{
            y: 10,
            opacity: 0,
            transition: { delay: 3.5, duration: 1.5, repeat: Infinity },
          }}
          className="block text-xl mt-11"
        >
          <BsMouse />
        </motion.span>
      </motion.p>
    </motion.div>
  );
};

export default Intro;
