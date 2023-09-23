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
        <Skill id="nextjs">
          <motion.img src="/nextjs.svg" className=""></motion.img>
        </Skill>
        <Skill id="react">
          <motion.img src="/react.svg" className=""></motion.img>
        </Skill>
        <Skill id="mongodb">
          <motion.img src="/mongodb.svg" className=""></motion.img>
        </Skill>
        <Skill id="express">
          <motion.img src="/express.svg" className=""></motion.img>
        </Skill>
        <Skill id="tailwind">
          <motion.img src="/tailwind.svg" className=""></motion.img>
        </Skill>
        <Skill id="nodejs">
          <motion.img src="/nodejs.svg" className=""></motion.img>
        </Skill>
        <Skill id="html">
          <motion.img src="/html.svg" className=""></motion.img>
        </Skill>
        <Skill id="javascript">
          <motion.img src="/javascript.svg" className=""></motion.img>
        </Skill>
        <Skill id="git">
          <motion.img src="/git.svg" className=""></motion.img>
        </Skill>
        <Skill id="python">
          <motion.img src="/python.svg" className=""></motion.img>
        </Skill>
      </motion.div>
    </motion.section>
  );
}
