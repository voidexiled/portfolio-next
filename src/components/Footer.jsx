"use client";
import React from "react";
import { motion } from "framer-motion";
import { Nunito_Sans } from "next/font/google";
import Linkedin from "./svg/linkedin";
import Outlook from "./svg/outlook";
import Gmail from "./svg/gmail";
import Github from "./svg/github";
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
    <motion.footer
      className={`${nunito_sans.className} flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row justify-between items-center text-center opacity-80 mt-auto py-4 font-nunito-sans text-[18px] xl:text-[20px] p-4 lg:px-8`}
    >
      <motion.ul className="flex flex-row gap-x-6 justify-between items-center lg:opacity-0">
        <motion.li className="hidden lg:flex">Contact me at:</motion.li>
        <motion.li>
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
        </motion.li>
        <motion.li>
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
        </motion.li>

        <motion.li>
          <a
            href="mailto:jalomo.chavez18@outlook.com?subject=PortfolioMessage"
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
      </motion.ul>
      <motion.span className="text-light text-[18px] xl:text-[20px]">
        Designed with ♥ & By{" "}
        <motion.a
          href="http://github.com/voidexiled"
          target="_blank"
          className="opacity-100 text-light-400"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          title="Github link"
        >
          Jesus Jalomo
        </motion.a>
      </motion.span>
      <motion.ul className="hidden lg:visible lg:flex lg:flex-row lg:gap-x-6 lg:justify-between lg:items-center">
        <motion.li>Contact me at:</motion.li>
        <motion.li>
          <a
            href="https://github.com/voidexiled"
            target="_blank"
            title="Github link"
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
        </motion.li>
        <motion.li>
          <a
            href="https://www.linkedin.com/in/francisco-jesus-jalomo-chavez-01218b243"
            target="_blank"
            title="Linkedin link"
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
        </motion.li>
        <motion.li>
          <a
            href="mailto:jalomo.chavez18@outlook.com?subject=PortfolioMessage"
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
        </motion.li>
      </motion.ul>
    </motion.footer>
  );
}
