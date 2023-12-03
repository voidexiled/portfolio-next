"use client";
import React from "react";

import { Skill } from "../standalone/Skill";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <section className="skills flex flex-col mt-12 xl:max-w-[1500px] ">
      <h1 className="mx-auto w-full align-middle text-center h-30 md:h-36 font-normal text-[26px] py-6 ">
        Learned <span className="text-secondary font-semibold ">Skillset</span>
      </h1>
      <div className="flex flex-row flex-wrap w-full justify-center xl:px-10 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6">
        <Skill id="nextjs" delay={0.05}>
          <Image
            width={40}
            height={40}
            alt="Nextjs logo"
            src="/nextjs.svg"
            className=""
          ></Image>
        </Skill>
        <Skill id="react" delay={0.05 * 1.5 * 1}>
          <Image
            width={40}
            height={40}
            alt="React logo"
            src="/react.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="mongodb" delay={0.05 * 1.5 * 2}>
          <Image
            width={40}
            height={40}
            alt="MongoDB logo"
            src="/mongodb.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="express" delay={0.05 * 1.5 * 3}>
          <Image
            width={40}
            height={40}
            alt="Express logo"
            src="/express.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="tailwind" delay={0.05 * 1.5 * 4}>
          <Image
            width={40}
            height={40}
            alt="Tailwind logo"
            src="/tailwind.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="nodejs" delay={0.05 * 1.5 * 5}>
          <Image
            width={40}
            height={40}
            alt="Nodejs logo"
            src="/nodejs.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="html" delay={0.05 * 1.5 * 6}>
          <Image
            width={40}
            height={40}
            alt="HTML logo"
            src="/html.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="javascript" delay={0.05 * 1.5 * 7}>
          <Image
            width={40}
            height={40}
            alt="Javascript logo"
            src="/javascript.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="git" delay={0.05 * 1.5 * 8}>
          <Image
            width={40}
            height={40}
            alt="Git logo"
            src="/git.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="python" delay={0.05 * 1.5 * 9}>
          <Image
            width={40}
            height={40}
            alt="Python logo"
            src="/python.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
      </div>
    </section>
  );
}
