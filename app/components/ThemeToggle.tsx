"use client";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

interface Props {
  currentTheme: string | undefined;
  setTheme: (theme: string) => void;
}

const ThemeToggle = ({ currentTheme, setTheme }: Props) => {
  return (
    <div
      className={`relative ml-3 w-10 h-5 rounded-[50px] flex justify-between items-center ${
        currentTheme === "dark" ? "bg-white" : "bg-gray-950"
      } cursor-pointer`}
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
    >
      <FaMoon className="text-[var(--primary)]" />
      <div
        className={`${
          currentTheme === "dark" ? "bg-gray-950" : "bg-white"
        } w-4 h-4 rounded-full absolute ${
          currentTheme === "dark" ? "left-[1px]" : "right-[1px]"
        } transition duration-200 ease-in-out`}
      ></div>
      <BsFillSunFill className="text-yellow-400" />
    </div>
  );
};

export default ThemeToggle;
