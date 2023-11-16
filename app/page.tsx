"use client";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import About from "./components/About";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import MobileSocials from "./components/MobileSocials";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <div className="page-px font-primary mt-14">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="hidden socials fixed bottom-24 w-max text-xl dark:after:bg-[#ABB2BF] md:block"
      >
        <a href="https://github.com/mobo07" target="_blank">
          <FiGithub className="mb-7 transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-muogboh-325450236"
          target="_blank"
        >
          <FiLinkedin className="mb-7 transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
        </a>
        <a href="https://twitter.com/michael_mobo" target="_blank">
          <RiTwitterXLine className="mb-7 transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
        </a>
        <a href="https://www.instagram.com/mike_illson/" target="_blank">
          <FiInstagram className="mb-7 transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-y-[3px]" />
        </a>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="hidden font-secondary rotate-90 origin-right fixed -bottom-[12px] right-14 items-center md:flex"
      >
        <p className="transition duration-150 ease-in-out hover:text-[var(--primary)] hover:-translate-x-[3px]">
          <a href="mailto:mikemobo900@gmail.com">mikemobo900@gmail.com</a>
        </p>
        <hr className="w-24 ml-3 border-t-black dark:border-t-[#ABB2BF]" />
      </motion.div>
      {/* Main Section  */}
      <Intro />
      {/* About Section  */}
      <About />
      {/* Skills Section  */}
      <Skills />
      {/* Projects Section  */}
      <Projects />
      {/* Contact Section  */}
      <Contact />
      {/* Social Links for Mobile  */}
      <MobileSocials />
      {/* Acknowledgment */}
      <div className="w-full my-2 text-xs text-center">
        <span>
          Design inspiration by{" "}
          <a
            href="https://v4.brittanychiang.com"
            target="_blank"
            className="text-[var(--primary)] no-underline font-secondary dark:font-semibold"
          >
            Brittany Chiang
          </a>
        </span>
      </div>
    </div>
  );
}
