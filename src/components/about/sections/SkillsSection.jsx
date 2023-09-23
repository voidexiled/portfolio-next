"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../standalone/Skill";

export default function SkillsSection() {
  return (
    <motion.section className="skills flex flex-col mt-12 xl:max-w-[1500px] ">
      <motion.h1 className="mx-auto w-full align-middle text-center h-30 md:h-36 font-normal text-[26px] xl:text-[30px] py-6 ">
        Learned{" "}
        <motion.span className="text-secondary font-semibold ">
          Skillset
        </motion.span>
      </motion.h1>
      <motion.div className="flex flex-row flex-wrap w-full justify-center xl:px-10 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6">
        <Skill id="nextjs" delay={0.05}>
          <motion.img src="/nextjs.svg" className=""></motion.img>
        </Skill>
        <Skill id="react" delay={0.05 * 1.5 * 1}>
          <motion.img
            src="/react.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="mongodb" delay={0.05 * 1.5 * 2}>
          <motion.img
            src="/mongodb.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="express" delay={0.05 * 1.5 * 3}>
          <motion.img
            src="/express.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="tailwind" delay={0.05 * 1.5 * 4}>
          <motion.img
            src="/tailwind.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="nodejs" delay={0.05 * 1.5 * 5}>
          <motion.img
            src="/nodejs.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="html" delay={0.05 * 1.5 * 6}>
          <motion.img
            src="/html.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="javascript" delay={0.05 * 1.5 * 7}>
          <motion.img
            src="/javascript.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="git" delay={0.05 * 1.5 * 8}>
          <motion.img
            src="/git.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="python" delay={0.05 * 1.5 * 9}>
          <motion.img
            src="/python.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
      </motion.div>
    </motion.section>
  );
}
