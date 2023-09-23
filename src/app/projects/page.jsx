"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getProjects } from "../../utils/Project";
import ProjectCard from "../../components/ProjectCard";
import { AnimatePresence } from "framer-motion";
import { Sansita } from "next/font/google";
const sans = Sansita({
  subsets: ["latin"],
  weight: ["400", "800", "700", "900"],
});

export default function Projects() {
  const projects = getProjects();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key={"projects"}
          className="flex flex-row flex-wrap justify-center items-center align-middle gap-6 lg:gap-12 w-full lg:px-3.5 py-16 lg:py-[9rem]"
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id + project.title}
                id={project.id}
                title={project.title}
                img={project.img}
                body={project.body}
                shortBody={project.shortBody}
                technologies={project.technologies}
                href={"projects/" + project.id}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
