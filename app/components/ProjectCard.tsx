"use client";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
  orientation: "left" | "right";
  title: string;
  desc: string;
  img: StaticImageData;
  stack: string[];
  liveURL: string;
  githubLink: string;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const ProjectCard = (props: Props) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate={isInView && "visible"}
      className={twMerge(
        clsx(
          "flex mb-20 relative md:static md:h-[18.75rem]",
          props.orientation === "right" ? "md:flex-row" : "md:flex-row-reverse"
        )
      )}
    >
      {/* ========================== Image Container ============================ */}
      <div className="hidden w-full h-[36vh] md:flex-[1.5] md:h-full md:block">
        <a
          href={props.liveURL}
          target="_blank"
          className="relative block w-full h-full"
        >
          <Image
            src={props.img}
            alt={props.title}
            fill
            className="object-cover opacity-10 md:opacity-100"
          />
        </a>
      </div>

      {/* ============================ Other Contents Container ================================= */}
      <div
        className={twMerge(
          clsx(
            "text-left w-full max-w-[400px] h-auto min-h-[20rem] px-4 mx-auto flex flex-col justify-center shadow-md rounded-sm md:relative md:flex-1 md:block md:min-h-[unset] md:w-auto md:max-w-[unset] md:mx-0 md:shadow-none",
            props.orientation === "right" ? "md:text-right" : "md:text-left"
          )
        )}
      >
        <h4 className="font-secondary text-[var(--primary)] text-sm mt-3 dark:font-semibold md:mt-0">
          Featured Project
        </h4>
        <h3 className="font-primary font-bold text-gray-950 text-2xl my-1 dark:text-gray-400 md:my-2">
          {props.title}
        </h3>
        <div
          className={twMerge(
            clsx(
              "md:absolute md:w-[140%]",
              props.orientation === "right"
                ? "md:-left-[40%]"
                : "md:-right-[40%]"
            )
          )}
        >
          <p className="my-2 md:my-4 md:rounded-md md:shadow-md md:px-8 md:py-4 md:bg-white md:dark:bg-gray-950">
            {props.desc}
          </p>
          <div className="w-full flex flex-wrap gap-[5px] text-xs text-[var(--primary)] font-secondary dark:font-semibold md:w-auto md:block md:text-sm">
            {props.stack.map((tool) => (
              <span className="mr-2 md:ml-2 md:mr-0" key={tool}>
                {tool}
              </span>
            ))}
          </div>
          <div
            className={twMerge(
              clsx(
                "flex gap-5 text-[1.3rem] text-gray-800 my-4 dark:text-gray-400",
                props.orientation === "right"
                  ? "md:justify-end"
                  : "md:justify-start"
              )
            )}
          >
            <a href={props.githubLink} target="_blank">
              <FiGithub className="hover:text-[var(--primary)] tranistion ease-linear duration-100" />
            </a>
            <a href={props.liveURL} target="_blank">
              <FiExternalLink className="hover:text-[var(--primary)] tranistion ease-linear duration-100" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
