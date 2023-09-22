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
        className="wrapper w-full h-full flex flex-col md:flex-row justify-center items-center align-middle "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="container flex flex-col  h-[140px] items-center ">
          <span className="title leading-snug text-4xl lg:text-6xl text-left">
            Hey, {"i'm"} Jesus Jalomo
          </span>
          <div className="subtitle text-primary leading-snug text-lg lg:text-xl text-left">
            <span
              id="typewriter"
              className="subtitle text-light leading-snug break-words"
            ></span>
          </div>
        </motion.div>
        <motion.div className=" h-[160]px  overflow-hidden p-6 border-primary-400 ">
          <motion.img
            initial={{ x: 500, scale: 0.7, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            src="/pp.jpeg"
            className="rounded-[50%] border-2  "
            viewport={{ once: true }}
          ></motion.img>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
