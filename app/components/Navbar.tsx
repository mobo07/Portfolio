"use client";
import { motion } from "framer-motion";
import ThemeSwitcher from "../providers/ThemeSwitcher";
import Button from "./Button";
import MenuButton from "./MenuButton";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.3,
      delay: 0.3,
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

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      className="font-secondary bg-[rgba(255,255,255,0.1)] border-b-[1px] backdrop-filter backdrop-blur-[10px] w-full h-14 fixed left-0 top-0 shadow-sm px-4 flex items-center justify-between z-10 dark:border-none dark:bg-[#010409] md:px-14"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="text-[var(--primary)]"
      >
        <a href="#intro">Mike.</a>
      </motion.h3>
      {/* ----------------------Mobile Menu Backdrop------------------------------ */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="md:hidden fixed top-0 left-0 z-40 w-screen h-screen bg-[rgba(0,0,0,0.2)]"
        ></div>
      )}
      <motion.ul
        variants={variants}
        initial="hidden"
        animate="visible"
        className={`${
          showMenu ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center gap-5 fixed top-0 right-0 z-50 w-[60%] max-w-xs h-screen bg-white transition duration-200 ease-in-out dark:bg-gray-950 md:text-sm md:flex-row md:static md:bg-transparent md:h-full md:w-auto md:max-w-none md:gap-0 md:dark:bg-inherit md:translate-x-0 md:transition-none`}
      >
        {/* --------------------Close Mobile Menu Button--------------------- */}
        {showMenu && (
          <div
            className="absolute top-5 right-4 z-50 w-6 h-4 cursor-pointer text-gray-950 dark:text-[var(--primary)] md:hidden"
            onClick={() => setShowMenu(false)}
          >
            <AiOutlineClose className="w-full h-full" />
          </div>
        )}

        <motion.li
          variants={linkVariants}
          onClick={() => setShowMenu(false)}
          className="nav-link relative mx-3"
        >
          <a href="#about">
            <span className="text-[#583fe4ef] text-center block dark:font-semibold md:mr-1 md:inline">
              01.
            </span>
            About
          </a>
        </motion.li>
        <motion.li
          variants={linkVariants}
          onClick={() => setShowMenu(false)}
          className="nav-link relative mx-3"
        >
          <a href="#skills">
            <span className="text-[#583fe4ef] text-center block dark:font-semibold md:mr-1 md:inline">
              02.
            </span>
            Skills
          </a>
        </motion.li>
        <motion.li
          variants={linkVariants}
          onClick={() => setShowMenu(false)}
          className="nav-link relative mx-3"
        >
          <a href="#projects">
            <span className="text-[#583fe4ef] text-center block dark:font-semibold md:mr-1 md:inline">
              03.
            </span>
            Projects
          </a>
        </motion.li>
        <motion.li
          variants={linkVariants}
          onClick={() => setShowMenu(false)}
          className="nav-link relative mx-3"
        >
          <a href="#contact">
            <span className="text-[#583fe4ef] text-center block dark:font-semibold md:mr-1 md:inline">
              04.
            </span>
            Contact
          </a>
        </motion.li>
        <div className="md:hidden">
          <Button>
            <button>Resume</button>
          </Button>
        </div>
      </motion.ul>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, delay: 1.5 } }}
        className="flex items-center"
      >
        <div className="hidden md:block">
          <Button>
            <button>Resume</button>
          </Button>
        </div>
        <ThemeSwitcher />
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
