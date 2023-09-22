import React from "react";
import { motion } from "framer-motion";
import { techs } from "../data/projects";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandFramerMotion,
  IconBrandNpm,
  IconBrandMysql,
} from "@tabler/icons-react";
import { IconBrandNodejs } from "@tabler/icons-react";
import { IconBrandMongodb } from "@tabler/icons-react";

const item = {
  hidden: { y: 12220, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const techAnim = {
  hidden: {
    opacity: 0,

    transition: {
      duration: 3,
      type: "spring",
    },
  },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 2,
    },
  },
};

export default function Technologies({ techsGroup, name }) {
  const { wIcon, hIcon } = ("w-6", "h-6");
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={techAnim}
      className="flex gap-x-1"
    >
      {techsGroup &&
        techsGroup.map((tech) => {
          if (tech == techs.NEXTJS) {
            return (
              <motion.li
                key={tech + "_" + name}
                initial="hidden"
                animate="visible"
                variants={item}
              >
                <IconBrandNextjs
                  width={wIcon}
                  height={hIcon}
                  className={`w-8 h-8`}
                />
              </motion.li>
            );
          }
          if (tech == techs.REACT) {
            return (
              <motion.li
                key={tech + "_" + name}
                initial="hidden"
                animate="visible"
                variants={item}
              >
                <IconBrandReact
                  width={wIcon}
                  height={hIcon}
                  className={`w-8 h-8`}
                />
              </motion.li>
            );
          }
          if (tech == techs.TAILWIND) {
            return (
              <motion.li
                key={tech + "_" + name}
                initial="hidden"
                animate="visible"
                variants={item}
              >
                <IconBrandTailwind
                  width={wIcon}
                  height={hIcon}
                  className={`w-8 h-8`}
                />
              </motion.li>
            );
          }
          if (tech == techs.NODEJS) {
            return (
              <motion.li
                key={tech + "_" + name}
                initial="hidden"
                animate="visible"
                variants={item}
              >
                <IconBrandNodejs
                  width={wIcon}
                  height={hIcon}
                  className={`w-8 h-8`}
                />
              </motion.li>
            );
          }
          if (tech == techs.MONGODB) {
            return (
              <motion.li
                key={tech + "_" + name}
                initial="hidden"
                animate="visible"
                variants={item}
              >
                <IconBrandMongodb
                  width={wIcon}
                  height={hIcon}
                  className={`w-8 h-8`}
                />
              </motion.li>
            );
          }
          if (tech == techs.MYSQL) {
            return (
              <motion.li
                key={tech + "_" + name}
                initial="hidden"
                animate="visible"
                variants={item}
              >
                <IconBrandMysql
                  width={wIcon}
                  height={hIcon}
                  className={`w-8 h-8`}
                />
              </motion.li>
            );
          }
          if (tech == techs.FRAMER_MOTION) {
            return (
              <motion.li
                key={tech + "_" + name}
                initial="hidden"
                animate="visible"
                variants={item}
              >
                <IconBrandFramerMotion
                  width={wIcon}
                  height={hIcon}
                  className={`w-8 h-8`}
                />
              </motion.li>
            );
          }
        })}
    </motion.ul>
  );
}
