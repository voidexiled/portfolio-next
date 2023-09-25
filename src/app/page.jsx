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
        "I'm currently learning NextJs, Astro, React, NodeJs, Framer-motion, Tailwind, Figma & MongoDB, Express.",
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
      <motion.article
        key="home"
        className="wrapper w-full h-full flex flex-col xl:flex-row justify-between items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.section className="container flex flex-col h-[140px] items-center">
          <span className="title leading-snug text-4xl lg:text-6xl xl:text-7xl text-left">
            Hey, {"i'm"} Jesus Jalomo
          </span>
          <div className="subtitle text-primary leading-snug text-lg lg:text-xl xl:text-2xl text-left max-w-[340px] md:max-w-[800px]">
            <span
              id="typewriter"
              className="subtitle  text-light leading-snug break-words "
            ></span>
          </div>
        </motion.section>
        <motion.section className=" border-primary-400 h-[270px] w-[270px] md:h-[320px] md:w-[320px] lg:min-h-[420px] lg:min-w-[420px]">
          <motion.img
            initial={{ x: 300, scale: 0.7, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.12 }}
            src="/pp.webp"
            className="rounded-[50%] border-2 "
            viewport={{ once: true }}
            title="Jesus Jalomo profile picture"
            alt="Jesus Jalomo profile picture"
          ></motion.img>
        </motion.section>
      </motion.article>
    </AnimatePresence>
  );
}
