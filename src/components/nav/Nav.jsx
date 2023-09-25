"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const DIRS = {
  HOME: 0,
  PROJECTS: 1,
  ABOUT: 2,
};
const dirs = {
  "/": 0,
  "/projects": 1,
  "/about": 2,
};

export default function Nav() {
  const [selected, setSelected] = useState(0);
  const selectedColorText = "text-secondary";
  const notSelectedColorText = "text-light";
  useEffect(() => {
    const input = window.location.pathname;
    setSelected(dirs[input]);
    console.log(selected);
  }, []);

  return (
    <motion.header className="">
      <motion.nav
        className={`relative flex flex-col h-[48px] min-h-[48px] max-h-[400px] justify-between items-center text-lg md:text-[22px]  non-selectable mx-auto ${nunito_sans.className}`}
      >
        <motion.div className="flex flex-row w-full h-12 justify-between items-center  p-4 lg:px-8 md:py-9">
          <motion.div>
            <Link href={"/"}>
              <motion.h1
                className="hover:text-secondary-400 transition-all"
                onClick={() => {
                  setSelected(DIRS.HOME);
                }}
              >
                Hi 😁
              </motion.h1>
            </Link>
          </motion.div>
          <motion.div className="flex">
            <motion.ul className="flex flex-row space-x-4  md:space-x-8  ">
              <motion.li
                className={`relative hover:text-secondary-400 transition-all ${
                  selected == DIRS.HOME
                    ? selectedColorText
                    : notSelectedColorText
                }
                `}
              >
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
                    className="absolute top-full left-0 w-full h-[3px] bg-secondary rounded-lg"
                  />
                ) : null}
              </motion.li>

              <motion.li
                className={`relative hover:text-secondary-400 transition-all ${
                  selected == DIRS.PROJECTS
                    ? selectedColorText
                    : notSelectedColorText
                }
                `}
              >
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
                    className="absolute top-full left-0 w-full h-[3px] bg-secondary rounded-lg"
                  />
                ) : null}
              </motion.li>
              <motion.li
                className={`relative hover:text-secondary-400 transition-all ${
                  selected == DIRS.ABOUT
                    ? selectedColorText
                    : notSelectedColorText
                }
                `}
              >
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
                    className="absolute top-full left-0 w-full h-[3px] bg-secondary rounded-lg"
                  />
                ) : null}
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}
