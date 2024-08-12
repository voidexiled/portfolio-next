"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getProjects } from "../../utils/Project";
import ProjectCard from "../../components/ProjectCard";
import { AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = getProjects();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.15 }}
      >
        <div
          key="projects"
          className="overflow-hidden mx-auto grid place-items-center md:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full md:w-[700px] xl:w-[800px] 2xl:w-[1200px] 3xl:w-[1500px] lg:px-3.5 "
        >
          {projects
            .filter((p) => p.available)
            .map((project) => {
              return (
                <ProjectCard
                  key={project.id + project.title}
                  id={project.id}
                  title={project.title}
                  color={project.color}
                  img={project.img}
                  body={project.body}
                  shortBody={project.shortBody}
                  technologies={project.technologies}
                  deployedUrl={project.deployedUrl}
                  href={`projects/${project.id}`}
                />
              );
            })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
