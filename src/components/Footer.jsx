"use client";
import React from "react";
import { motion } from "framer-motion";
import { Nunito_Sans } from "next/font/google";

const iconDesk = {
  first: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

const iconMobile = {
  first: {
    backgroundColor: "#ffffff00",
  },
  hover: {
    backgroundColor: "#1d1d1dcc",
  },
};

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});
export default function Footer() {
  return (
    <footer
      className={`${nunito_sans.className} mx-auto  w-full md:w-[700px] xl:w-[800px] 2xl:w-[1200px] 3xl:w-[1500px] flex flex-col gap-y-2 lg:gap-y-0 2xl:flex-row justify-between items-center text-center opacity-80 mt-auto py-4 font-nunito-sans text-[18px] p-4`}
    >
      <ul className="flex flex-row gap-x-6 justify-between items-center 2xl:opacity-0">
        <li>
          <a href="https://github.com/voidexiled" title="Github link">
            <motion.img
              src="/github.svg"
              className="w-12 h-12 p-[0.35rem] rounded-lg"
              variants={iconMobile}
              initial="first"
              whileTap="hover"
              alt="Github logo"
              title="Github logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/francisco-jesus-jalomo-chavez-01218b243"
            title="Linkedin link"
          >
            <motion.img
              src="/linkedin.svg"
              className="w-12 h-12 p-1 rounded-lg"
              variants={iconMobile}
              initial="first"
              whileTap="hover"
              alt="Linkedin logo"
              title="Linkedin logo"
            />
          </a>
        </li>

        <motion.li>
          <a
            href="mailto:jalomo.chavez18@outlook.com?subject=Te contacto através de jesusjalomo.vercel.app"
            title="Outlook mail"
          >
            <motion.img
              src="/gmail-outline.svg"
              className="w-12 h-12 p-1 rounded-lg"
              variants={iconMobile}
              initial="first"
              whileTap="hover"
              alt="Outlook logo"
              title="Outlook logo"
            />
          </a>
        </motion.li>
      </ul>
      <span className="text-light">
        Designed with ♥ & By{" "}
        <motion.a
          href="http://github.com/voidexiled"
          target="_blank"
          className="opacity-100 text-light-400"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          title="Github link" rel="noreferrer"
        >
          Jesus Jalomo
        </motion.a>
      </span>
      <ul className="hidden 2xl:flex 2xl:visible 2xl:gap-x-6 2xl:justify-between xl:items-center">
        <li>
          <a
            href="https://github.com/voidexiled"
            target="_blank"
            title="Github link" rel="noreferrer"
          >
            <motion.img
              src="/github.svg"
              className="w-9 h-9"
              variants={iconDesk}
              initial="first"
              whileHover="hover"
              alt="Github logo"
              title="Github logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/francisco-jesus-jalomo-chavez-01218b243"
            target="_blank"
            title="Linkedin link" rel="noreferrer"
          >
            <motion.img
              src="/linkedin.svg"
              className="w-10 h-10"
              variants={iconDesk}
              initial="first"
              whileHover="hover"
              alt="Linkedin logo"
              title="Linkedin logo"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:jalomo.chavez18@outlook.com?subject=Te contacto através de jesusjalomo.vercel.app"
            title="Outlook mail"
          >
            <motion.img
              src="/gmail-outline.svg"
              className="w-10 h-10"
              variants={iconDesk}
              initial="first"
              whileHover="hover"
              alt="Outlook logo"
              title="Outlook logo"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
