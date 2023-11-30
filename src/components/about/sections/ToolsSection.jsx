import { Skill } from "../standalone/Skill";
import { motion } from "framer-motion";
export default function ToolsSection() {
  return (
    <motion.section className="skills flex flex-col mt-12 xl:max-w-[1500px]">
      <motion.h1 className="mx-auto w-full align-middle text-center h-30 md:h-36  text-[26px]  py-6 text-secondary font-semibold">
        Tools{" "}
        <motion.span className="font-normal text-light">I use</motion.span>
      </motion.h1>
      <motion.div className="flex flex-row flex-wrap w-full justify-center xl:px-10 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6">
        <Skill id="windows" delay={0.05 * 1.5 * 1}>
          <motion.img
            src="/w10.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="vscode" delay={0.05 * 1.5 * 2}>
          <motion.img
            src="/vscode.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="postman" delay={0.05 * 1.5 * 3}>
          <motion.img
            src="/postman.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="heroku" delay={0.05 * 1.5 * 4}>
          <motion.img
            src="/heroku.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
        <Skill id="vercel" delay={0.05 * 1.5 * 5}>
          <motion.img
            src="/vercel.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></motion.img>
        </Skill>
      </motion.div>
    </motion.section>
  );
}
