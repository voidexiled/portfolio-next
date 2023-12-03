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
  }, []);

  return (
    <header className="">
      <nav
        className={`relative flex flex-col h-[48px] min-h-[48px] max-h-[400px] justify-between items-center text-[18px] non-selectable w-full md:w-[700px] xl:w-[800px] 2xl:w-[1200px] 3xl:w-[1500px] mx-auto ${nunito_sans.className} `}
      >
        <div className="flex flex-row w-full h-12 justify-between items-center  p-4 lg:px-8 md:py-9">
          <div>
            <Link href={"/"}>
              <h1
                className="hover:text-secondary-400 transition-all"
                onClick={() => {
                  setSelected(DIRS.HOME);
                }}
              >
                Hi 😁
              </h1>
            </Link>
          </div>
          <div className="flex">
            <ul className="flex flex-row space-x-4  md:space-x-8  ">
              <li
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
                  <div
                    layoutId="underline"
                    className="absolute top-full left-0 w-full h-[3px] bg-secondary rounded-lg"
                  />
                ) : null}
              </li>

              <li
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
                  <div
                    layoutId="underline"
                    className="absolute top-full left-0 w-full h-[3px] bg-secondary rounded-lg"
                  />
                ) : null}
              </li>
              <li
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
                  <div
                    layoutId="underline"
                    className="absolute top-full left-0 w-full h-[3px] bg-secondary rounded-lg"
                  />
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
