"use client";
import ProjectCard from "./ProjectCard";
import Title from "./Title";
import bespoken from "../assets/projects/bespoken.png";
import wordseeker from "../assets/projects/word-seeker.png";
import countries from "../assets/projects/countries-app.png";
import burgerapp from "../assets/projects/burger-app.png";
import todoapp from "../assets/projects/todo-app.png";
import dashboard from "../assets/projects/dashboard.png";
import { motion } from "framer-motion";

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
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

const Projects = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="projects"
      className="mx-auto md:px-20 md:max-w-7xl"
    >
      <Title number="03." title="Projects" />
      <p className="md:w-1/2">
        I believe the best way to learn a skill is by building. In each and
        every phase of my learning path, I&#39;ve always made an effort to apply
        my newly found knowledge by building a project in order to solidify my
        understanding of the concept.
      </p>
      <motion.div variants={wrapperVariants} className="my-8">
        <ProjectCard
          orientation="right"
          title="Bespoken"
          desc="A web app that grants users the ability to add their own custom image to t-shirts, hoodies and sweat-shirts and also shop from existing products with ease."
          img={bespoken}
          stack={[
            "React",
            "TypeScript",
            "React-Query",
            "Redux-Toolkit",
            "Nodejs",
            "Express",
            "MongoDB",
            "Paystack API",
          ]}
          githubLink="https://github.com/mobo07/bespoken"
          liveURL="https://bespoken-eta.vercel.app"
        />
        <ProjectCard
          orientation="left"
          title="WordSeeker"
          desc="A web app that comes in handy when you find yourself in one of those moments whereby you know the definition of a word you want to use but can't really say what the word is. WordSeker leverages AI to accurately suggest the word you're looking for."
          img={wordseeker}
          stack={["Nextjs", "Tailwind CSS", "TypeScript", "Gemini API"]}
          githubLink="https://github.com/mobo07/word-seeker"
          liveURL="https://word-seeker.vercel.app"
        />
        <ProjectCard
          orientation="right"
          title="Countries of the World"
          desc="A fun web application to help you learn about any country of the world including its relevant details such as region, capital, border countries, languages and more!..."
          img={countries}
          stack={["Nextjs 13", "Tailwind CSS", "React-Query"]}
          githubLink="https://github.com/mobo07/countries-app-nextjs"
          liveURL="https://countries-app-nextjs.vercel.app"
        />
        <ProjectCard
          orientation="left"
          title="Analytics Dashboard"
          desc="A nice interactive dashboard with a sleek user interface and user experience that features an interactive chart, sortable table and light/dark mode toggle. Also fully responsive"
          img={dashboard}
          stack={["Nextjs", "Tailwind CSS", "Material UI"]}
          githubLink="https://github.com/mobo07/Analytics-Dashboard"
          liveURL="https://analytics-dashboard-ht7e.vercel.app"
        />
        <ProjectCard
          orientation="right"
          title="Burger App"
          desc="A web application that enables users to put together and place an order of a tasty burger just the way you like it by adding or removing ingredients of your choice."
          img={burgerapp}
          stack={["React", "Tailwind CSS", "Redux Toolkit", "Framer-Motion"]}
          githubLink="https://github.com/mobo07/burger-app"
          liveURL="https://burger-app-brown.vercel.app"
        />
        <ProjectCard
          orientation="left"
          title="Todo App"
          desc="A beautiful todo web application to help keep track of your tasks."
          img={todoapp}
          stack={["React", "Tailwind CSS", "Framer-Motion"]}
          githubLink="https://github.com/mobo07/react-todo-app"
          liveURL="https://react-todo-app-mobo07.vercel.app"
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
