"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Nunito_Sans } from "next/font/google";
import HeroSection from "../../components/about/sections/HeroSection";
import SkillsSection from "../../components/about/sections/SkillsSection";
import ToolsSection from "../../components/about/sections/ToolsSection";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export default function About() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          className={`non-selectable wrapper pb-[85px] w-full md:w-[700px] xl:w-[800px] 2xl:w-[1200px] 3xl:w-[1500px] my-auto mx-auto flex flex-col justify-start items-stretch leading-relaxed ${nunito_sans.className}`}
        >
          <HeroSection></HeroSection>
          <SkillsSection></SkillsSection>
          <ToolsSection></ToolsSection>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
