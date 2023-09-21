"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Typed from "typed.js";
import { AnimatePresence } from "framer-motion";
export default function Home() {
  useEffect(() => {
    const options = {
      strings: [
        "I'm a computer systems engineering student.",
        "I'm 20 yo",
        "I'm currently learning MongoDB, Express, React, NodeJs, Framer-motion and Tailwind.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      smartBackspace: true,
      backDelay: 600,
      autoInsertCss: true,
      loop: true,
    };
    const typed = new Typed("#typewriter", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        key="home"
        className="wrapper w-full h-full flex justify-center items-center align-middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="container flex flex-col text-center">
          <motion.span className="title leading-snug text-4xl lg:text-6xl text-left">
            Hey, {"i'm"} Jesus Jalomo
          </motion.span>
          <motion.div className="subtitle text-primary leading-snug text-lg lg:text-xl text-left">
            <motion.span
              id="typewriter"
              className="subtitle text-light leading-snug break-words"
            ></motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
