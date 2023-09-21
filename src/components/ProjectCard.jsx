"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function ProjectCard({ id, img, title, body, href }) {
  return (
    <>
      <motion.div
        className="w-3/4 lg:w-2/6 h-[480px] md:h-[600px] md: bg-slate-800 bg-opacity-90 rounded-lg border-gray-700 border box-content group"
        transition={{ delay: 0.1 * id }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="w-full h-[240px] md:h-[300px] overflow-hidden transition-all object-cover object-center">
          <motion.img
            src={img}
            width={1200}
            height={720}
            alt={title + " preview image"}
            className="rounded-t-lg transition-all w-full object-center h-[300px] object-cover"
          />
        </motion.div>
        <div className="grid grid-rows-cardsm md:grid-rows-cardmd grid-cols-1 text-left px-4 pt-4 h-[240px] md:h-[300px] pb-4">
          <motion.span
            className="text-2xl lg:text-2xl font-medium leading-normal"
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
            className="text-light text-base leading-normal opacity-70 h-36 max-h-36 max-sm:max-h-32 max-sm:h-32 overflow-hidden"
            transition={{ delay: 0.1 * id + 0.02 }}
            initial={{
              y: 30,
            }}
            whileInView={{
              y: 0,
            }}
            viewport={{ once: true }}
          >
            {body}
          </motion.p>
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
              className="transition-colors text-base hover:text-secondary-500 group "
            >
              Read more &#10095;
            </Link>
          </motion.span>
        </div>
      </motion.div>
    </>
  );
}
