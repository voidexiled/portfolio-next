"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RedirectLink } from "./RedirectLink";
const DIRS = {
  HOME: 0,
  PROJECTS: 1,
  ABOUT: 2,
  CONTACT: 3,
};
const dirs = {
  "/": 0,
  "/projects": 1,
  "/about": 2,
  "/contact": 3,
};

export default function Nav() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const input = window.location.pathname;
    setSelected(dirs[input]);
    console.log(selected);
  }, []);

  return (
    <motion.header className="flex flex-col h-[48px] min-h-[48px] max-h-[400px] justify-between items-center font-nunito-sans text-lg md:text-lg md:tracking-[2px] non-selectable ">
      <motion.div className="flex flex-row w-full h-12 justify-between items-center bg-background p-4 lg:px-8 md:py-9">
        <motion.div>
          <Link href={"/"}>
            <motion.h1 className="hover:text-primary-400 transition-all">
              Hi 😁
            </motion.h1>
          </Link>
        </motion.div>
        <motion.div className="flex">
          <motion.ul className="flex flex-row space-x-4  md:space-x-8  ">
            <motion.li className=" relative hover:text-primary-400 transition-all">
              <Link
                href="/"
                onClick={() => {
                  setSelected(DIRS.HOME);
                }}
              >
                Home
              </Link>
              {selected == DIRS.HOME ? (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 rounded-lg"
                />
              ) : null}
            </motion.li>

            <motion.li className=" relative hover:text-primary-400 transition-all">
              <Link
                onClick={() => {
                  setSelected(DIRS.PROJECTS);
                }}
                href="/projects"
              >
                Projects
              </Link>
              {selected == DIRS.PROJECTS ? (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 rounded-lg"
                />
              ) : null}
            </motion.li>
            <motion.li className=" relative hover:text-primary-400 transition-all">
              <Link
                onClick={() => {
                  setSelected(DIRS.ABOUT);
                }}
                href={"/about"}
              >
                About
              </Link>
              {selected == DIRS.ABOUT ? (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 rounded-lg"
                />
              ) : null}
            </motion.li>
            <motion.li className=" relative hover:text-primary-400 transition-all">
              <Link
                onClick={() => {
                  setSelected(DIRS.CONTACT);
                }}
                href={"/contact"}
              >
                Contact
              </Link>
              {selected == DIRS.CONTACT ? (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 rounded-lg"
                />
              ) : null}
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
