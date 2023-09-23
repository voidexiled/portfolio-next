"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import HeroSection from "../../components/about/sections/HeroSection";
import SkillsSection from "../../components/about/sections/SkillsSection";
import ToolsSection from "../../components/about/sections/ToolsSection";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

/* Hi everyone, I am Francisco Jesus Jalomo Chavez from Tamaulipas, México. */

export default function About() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={` wrapper pt-[45px] pb-[85px] lg:py-[100px] h-full min-w-[120px] max-w-[1500px] my-auto mx-auto flex flex-col justify-start items-stretch leading-relaxed ${nunito_sans.className}`}
        >
          <HeroSection></HeroSection>
          <SkillsSection></SkillsSection>
          <ToolsSection></ToolsSection>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
