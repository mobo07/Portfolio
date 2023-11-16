"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const MobileSocials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView && "visible"}
      className="mx-auto my-8 w-fit flex items-center gap-8 text-xl md:hidden"
    >
      <motion.a
        variants={linkVariants}
        href="https://github.com/mobo07"
        target="_blank"
      >
        <FiGithub className="transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
      </motion.a>
      <motion.a
        variants={linkVariants}
        href="https://www.linkedin.com/in/michael-muogboh-325450236"
        target="_blank"
      >
        <FiLinkedin className="transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
      </motion.a>
      <motion.a
        variants={linkVariants}
        href="https://twitter.com/michael_mobo"
        target="_blank"
      >
        <RiTwitterXLine className="transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
      </motion.a>
      <motion.a
        variants={linkVariants}
        href="https://www.instagram.com/mike_illson/"
        target="_blank"
      >
        <FiInstagram className="transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
      </motion.a>
    </motion.div>
  );
};

export default MobileSocials;
