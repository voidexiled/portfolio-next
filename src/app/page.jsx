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
        "I'm 21 yo",
        "I'm currently learning NextJs14, Astro, Vit, Angular17 and React",
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
        className="wrapper mx-auto w-full md:w-[700px] xl:w-[800px] 2xl:w-[1200px] 3xl:w-[1500px] h-full flex flex-col xl:flex-row justify-center items-center lg:px-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <motion.section className="container flex flex-col h-[140px] items-center">
          <span className="title leading-snug text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-left whitespace-nowrap">
            Hey, {"i'm"} Jesus Jalomo
          </span>
          <div className="subtitle text-primary leading-snug text-lg lg:text-lg xl:text-xl text-left max-w-[340px] md:max-w-[800px]">
            <span
              id="typewriter"
              className="subtitle  text-light leading-snug break-words "
            ></span>
          </div>
        </motion.section>
        <motion.section className=" border-primary-400 w-[270px] md:w-[300px] lg:w-[300px] xl:w-[310px] 2xl:w-[350px] 3xl:w-[380px]">
          <motion.img
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.12, ease: "easeInOut" }}
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
