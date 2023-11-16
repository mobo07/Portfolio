"use client";
import Button from "./Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const isInView = useInView(formRef, { once: true });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    emailjs
      .sendForm(
        "service_wxpbwdb",
        "template_pbfa5yw",
        formRef.current!,
        "IbYhqTDwJRdYGq2e9"
      )
      .then(
        (result) => {
          setError("");
          setSuccess("Message sent successfully");
        },
        (error) => {
          setSuccess("");
          setError("Failed to send message");
        }
      );
  };

  return (
    <motion.div
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && "visible"}
      className="px-4 mt-28 mx-auto flex flex-col items-center w-full max-w-xl md:max-w-3xl md:px-24"
    >
      <p className="font-secondary text-[var(--primary)] dark:font-semibold">
        04. What&#39;s Next?
      </p>
      <h3 className="font-bold text-4xl text-center text-gray-950 my-3 dark:text-gray-400">
        Get In Touch
      </h3>
      <p className="text-center">
        Currently, I&apos;m on the lookout for some new opportunities and
        collaborations. If you have a project in mind and you like what
        you&apos;ve seen so far or you just want to connect, feel free to send
        me a message!
      </p>
      {success ? (
        <p className="mt-4 text-green-500">{success}</p>
      ) : error ? (
        <p className="mt-4 text-red-500">{error}</p>
      ) : null}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="my-4 w-full flex flex-col items-center justify-center gap-5"
      >
        <input type="text" name="from_name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={8} required />
        <Button>
          <button>Submit</button>
        </Button>
      </form>
    </motion.div>
  );
};

export default Contact;
