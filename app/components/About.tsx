"use client";
import Image from "next/image";
import Title from "./Title";
import portrait from "../assets/portrait.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
      when: "beforeChildren",
    },
  },
};

const textVariants = {
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

const imgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.3 },
  },
};

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      id="about"
      className="flex mb-40 md:min-h-[calc(100vh-3.5rem)] md:h-fit md:mb-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView && "visible"}
        ref={containerRef}
        className="m-auto md:max-w-7xl md:px-16"
      >
        <Title number={"01."} title={"About Me"} />
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-4 md:flex-row md:gap-10"
        >
          <motion.div variants={textVariants} className="w-full md:w-1/2">
            <motion.p variants={childVariants} className="mb-4">
              Hey there! My name is{" "}
              <span className="text-[var(--primary)] dark:font-semibold">
                Michael
              </span>{" "}
              (Mike if you like) and I am a{" "}
              <span className="text-[var(--primary)] dark:font-semibold">
                fullstack developer
              </span>{" "}
              (frontend-heavy using the{" "}
              <span className="text-[var(--primary)] dark:font-semibold">
                MERN stack
              </span>
              ) from Nigeria. I&#39;ve had an interest in computers for as long
              as I can remember but for some reason, I so badly wanted to get
              into the field for 3 major reasons, brace yourself! Firstly, as a
              big fan of playing video games, I&#39;ve always wanted to know how
              they work behind the scenes. Secondly, as silly as this might
              sound, seeing touch typists just looked really fascinating and
              &#34;techy&#34; to me especially in movies which brings me to my
              third reason,{" "}
              <span className="text-[var(--primary)] dark:font-semibold">
                <a
                  href="https://dc.fandom.com/wiki/Felicity_Smoak_(Arrowverse)"
                  target="_blank"
                >
                  Felicity Smoak
                </a>
              </span>{" "}
              from the fictional series, Arrow. Something about the way she
              handled computers was really intriguing.
            </motion.p>
            <motion.p variants={childVariants} className="mb-4">
              I started my web development journey in 2021 and ever since then
              I&#39;ve been building and growing as a software engineer. I enjoy
              working on challenging tasks that will facilitate my learning and
              I&#39;ve also built some cool{" "}
              <span className="text-[var(--primary)] dark:font-semibold">
                <a href="#projects">projects</a>
              </span>{" "}
              too as you will come to see soon. Outside of coding, you&#39;ll
              find me reading, watching movies, exercising, chilling with family
              and friends and as you probably guessed, playing games etc.
            </motion.p>
          </motion.div>
          <motion.div
            variants={imgVariants}
            className="portrait relative mx-auto rounded-md md:mx-0"
          >
            <Image
              src={portrait}
              alt="my-img"
              fill
              className="object-cover rounded-md img"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
