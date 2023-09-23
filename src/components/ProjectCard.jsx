"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { techs } from "../data/projects";
import Technologies from "./Technologies";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});
export default function ProjectCard({
  id,
  img,
  title,
  body,
  technologies,
  shortBody,
  href,
}) {
  return (
    <>
      <motion.div
        className={`${nunito_sans.className} w-3/4 lg:w-3/12 h-[480px] md:h-[580px] md: bg-slate-800 bg-opacity-90 rounded-lg border-gray-700 border box-content group`}
        transition={{ delay: 0.1 * id }}
        initial={{ opacity: 0, x: 1200 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
        }}
      >
        <motion.div className="w-full h-[240px] md:h-[290px] overflow-hidden transition-all object-cover object-center">
          <motion.img
            src={img}
            width={600}
            height={320}
            alt={title + " preview image"}
            className="rounded-t-lg transition-all w-full object-center h-[300px] object-cover"
          />
        </motion.div>
        <div className="grid grid-rows-cardsm md:grid-rows-cardmd grid-cols-1 text-left px-4 pt-4 h-[240px] md:h-[290px] pb-4">
          <motion.span
            className="text-2xl xl:text-3xl font-medium leading-normal"
            transition={{ delay: 0.1 * id + 0.01 }}
            initial={{
              y: 20,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{ once: true }}
          >
            {title}
          </motion.span>
          <motion.p
            className="text-light text-[20px] leading-normal opacity-70  overflow-hidden"
            transition={{ delay: 0.1 * id + 0.02 }}
            initial={{
              y: 30,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{ once: true }}
          >
            {shortBody}
          </motion.p>
          <motion.div className="gap-x-1">
            <Technologies techsGroup={technologies} name={title} />
          </motion.div>
          <motion.span
            className="relative text-secondary-300 pb-4 lg:bottom-0"
            transition={{ delay: 0.1 * id }}
            initial={{
              filter: "blur(2px)",
              scale: 0.3,
            }}
            whileInView={{
              filter: "blur(0px)",
              scale: 1,
            }}
            viewport={{ once: true }}
          >
            <Link
              href={href}
              className="transition-colors text-base text-[18px] hover:text-secondary-500 group "
            >
              Read more &#10095;
            </Link>
          </motion.span>
        </div>
      </motion.div>
    </>
  );
}
