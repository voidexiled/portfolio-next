"use client";
import React from "react";
import { motion } from "framer-motion";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});
export default function Footer() {
  return (
    <motion.footer
      className={`${nunito_sans.className} text-center opacity-80 mt-auto py-4 font-nunito-sans text-xl md:text-xl lg:text-xl`}
    >
      <div>
        <span className="text-light">
          Designed with ♥ & By{" "}
          <a
            href="http://github.com/voidexiled"
            target="_blank"
            className="opacity-100 text-light-400"
          >
            Jesus Jalomo
          </a>
        </span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </motion.footer>
  );
}
