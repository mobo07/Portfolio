"use client";
import TechStackCard from "./TechStackCard";
import Title from "./Title";
import htmlLogo from "../assets/techstack/html-1.svg";
import cssLogo from "../assets/techstack/css-3.svg";
import tailwindLogo from "../assets/techstack/tailwind-css-2.svg";
import jsLogo from "../assets/techstack/logo-javascript.svg";
import tsLogo from "../assets/techstack/typescript.svg";
import reactLogo from "../assets/techstack/react-2.svg";
import nextLogo from "../assets/techstack/nextjs-13.svg";
import nodejsLogo from "../assets/techstack/nodejs-1.svg";
import expressLogo from "../assets/techstack/express-109.svg";
import mongodbLogo from "../assets/techstack/mongo db.svg";
import githubLogo from "../assets/techstack/github-2.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      when: "beforeChildren",
    },
  },
};

const wrapperVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
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
    transition: { duration: 0.3 },
  },
};

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView && "visible"}
      id="skills"
      className="mx-auto mb-20 md:w-3/4 md:max-w-5xl md:px-12"
    >
      <Title number="02." title="Skills" />
      <motion.div
        variants={wrapperVariants}
        className="w-full flex flex-col items-center justify-center"
      >
        <motion.p variants={childVariants} className="">
          I&apos;ve worked with a considerable range of tools, libraries and
          frameworks throughout my learning experience and this has contributed
          significantly to my adaptability, problem solving-skills and effective
          project execution. Additionally, my learning drive has ensured that I
          stay up to date with industry trends and emerging technologies. Below
          are some of the tools I work with.
        </motion.p>
        <motion.div
          variants={childVariants}
          className="w-full mx-auto my-4 flex justify-center items-center flex-wrap gap-4 md:gap-8 md:mx-auto md:w-3/4"
        >
          <TechStackCard logo={htmlLogo} size={[50, 50]} desc="HTML" />
          <TechStackCard logo={cssLogo} size={[50, 50]} desc="CSS" />
          <TechStackCard logo={jsLogo} size={[50, 50]} desc="JavaScript" />
          <TechStackCard logo={tsLogo} size={[50, 50]} desc="TypeScript" />
          <TechStackCard logo={reactLogo} size={[50, 50]} desc="React" />
          <TechStackCard
            logo={tailwindLogo}
            size={[50, 50]}
            desc="Tailwind CSS"
          />
          <TechStackCard logo={nextLogo} size={[100, 50]} desc="Next js" />
          <TechStackCard logo={nodejsLogo} size={[80, 50]} desc="Node js" />
          <TechStackCard logo={expressLogo} size={[80, 50]} desc="Express js" />
          <TechStackCard logo={mongodbLogo} size={[100, 50]} desc="MongoDB" />
          <TechStackCard logo={githubLogo} size={[80, 50]} desc="Github" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
