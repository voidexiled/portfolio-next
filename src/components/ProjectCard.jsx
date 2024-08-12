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
  color,
  body,
  technologies,
  shortBody,
  href,
  deployedUrl,
}) {
  return (
    // <Link className="relative group">
    <Link href={deployedUrl} className=" relative group">
      <div className="opacity-0 z-10 justify-center items-center transition-all absolute bottom-0 left-0 w-full group-hover:opacity-100">
        <span
          style={{
            backgroundColor: `${color}21`,
          }}
          className="px-3 rounded-md group-hover:w-full text-[15px]"
        >
          Ver
        </span>
      </div>
      <motion.article
        className={`${nunito_sans.className} relative w-[330px] md:w-[330px] xl:w-[370px] 2xl:[400px] 3xl:w-[460px] h-[480px] md:h-[500px] 2xl:h-[520px] md: bg-slate-800 bg-opacity-90 rounded-lg  box-content shadow-xl shadow-black/10 group-hover:bg-slate-800/80 transition-colors`}
        transition={{ delay: 0.02 * id }}
        initial={{ opacity: 0, x: 250 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
        }}
      >
        <div className="w-full h-[220px] md:h-[230px] 2xl:h-[240px] overflow-hidden transition-all object-cover object-center">
          <Image
            src={img}
            width={600}
            height={320}
            quality={90}
            alt={`${title} preview image`}
            className="rounded-t-lg transition-all w-full object-top h-[300px] object-cover"
          />
        </div>
        <div className="grid grid-rows-cardsm md:grid-rows-cardmd grid-cols-1 text-left px-4 pt-4 h-[260px] md:h-[270px] 2xl:h-[280px] pb-4">
          <motion.h1
            className="text-2xl lg:text-2xl 3xl:text-3xl font-medium leading-normal"
            transition={{ delay: 0.01 * id + 0.01 }}
            initial={{
              y: 20,
            }}
            animate={{
              y: 0,
            }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-light text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-normal opacity-70  overflow-hidden"
            transition={{ delay: 0.01 * id }}
            initial={{
              y: 30,
            }}
            animate={{
              y: 0,
            }}
            viewport={{ once: true }}
          >
            {shortBody}
          </motion.p>

          <motion.footer
            className="flex items-center"
            transition={{ delay: 0.01 * id }}
            initial={{
              filter: "blur(2px)",
              scale: 0.95,
            }}
            whileInView={{
              filter: "blur(0px)",
              scale: 1,
            }}
            viewport={{ once: true }}
          >
            <Technologies
              techsGroup={technologies}
              color={color}
              name={title}
            />
          </motion.footer>
        </div>
      </motion.article>
    </Link>
  );
}
