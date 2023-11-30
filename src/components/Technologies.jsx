import React from "react";
import { motion } from "framer-motion";
import { techs } from "../data/projects";

const item = {
  hidden: {
    y: 120,
    opacity: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
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
      delayChildren: 0.08,
      staggerChildren: 0.05,
      duration: 0.15,
    },
  },
};

export default function Technologies({ techsGroup, name, color }) {
  const { wIcon, hIcon } = { wIcon: "w-6", hIcon: "h-6" };

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={techAnim}
      className="flex gap-x-2 flex-wrap gap-y-2"
    >
      {techsGroup &&
        techsGroup.map((tech) => {
          return (
            <li
              key={name + "_" + tech}
              variants={item}
              style={{
                borderColor: color + "5A",
                backgroundColor: color + "2A",
                boxShadow: `0px 0px 5px 1px ${color}1F`,
              }}
              className="border-[0.2px] px-4 py-[1px] h-fit max-h-fit rounded-xl text-[13px] text-light/90 leading-4 xl:py-[2px] xl:px-5"
            >
              {tech}
            </li>
          );
        })}
    </motion.ul>
  );
}
