"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section className="hero flex flex-col xl:flex-row justify-between sm:px-20 lg:px-40 xl:px-0 xl:max-h-[570px] ">
      <motion.div className="leftSide flex flex-col justify-start w-full xl:w-2/3 h-full p-8 md:p-4 xl:justify-start ">
        <motion.h1 className="mx-auto w-full align-middle text-center h-24 font-normal text-[24px] md:text-[30px] py-6 ">
          Know Who{" "}
          <motion.span className="text-secondary font-semibold ">
            {"I'M"}
          </motion.span>
        </motion.h1>
        <motion.div className="body xl:max-w-[765px] mx-auto flex flex-col gap-y-3 text-[18px] md:text-[26px] text-[rgba(255,255,255,0.82)] ">
          <motion.p className=" ">
            Hi everyone, I am{" "}
            <motion.span className="text-secondary">
              Francisco Jesus Jalomo Chavez{" "}
              <span className="text-[rgba(255,255,255,0.82)]">from</span>{" "}
              Tamaulipas, México.
            </motion.span>
          </motion.p>
          <motion.p className=" ">
            Hi! {"I'm"} a{" "}
            <span className="text-secondary">
              20-year-old Systems Engineering student
            </span>{" "}
            in my 7th semester. My love for programming began in 2015 with video
            games and {"I've"} been{" "}
            <span className="text-secondary">self-learning</span> ever since.
            The 2020 pandemic gave me free time to further improve my skills.
            Excited to keep growing!.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="rightSide flex flex-col w-full xl:w-1/3 justify-center items-center xl:p-0 ">
        <motion.h1 className="hidden xl:inline-block mx-auto w-full align-middle text-center h-24 font-normal text-[30px] py-6 opacity-0  px-4">
          Know Who{" "}
          <motion.span className="text-secondary font-semibold ">
            {"I'M"}
          </motion.span>
        </motion.h1>
        <motion.div className="imgContainer max-h-[320px] max-w-[400px] lg:max-h-[340px] lg:max-w-[415px] rounded-3xl overflow-hidden ">
          <motion.img
            src={"/stock-photo.svg"}
            title="dev illustration"
            alt="dev illustration"
            className="object-cover object-center max-h-[320px] max-w-[400px] lg:max-h-[340px] lg:max-w-[415px]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
