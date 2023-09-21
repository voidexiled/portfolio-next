"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer className="text-center opacity-80 font-thin mt-auto py-4 font-nunito-sans text-xl md:text-xl lg:text-base">
      <motion.small>Copyright &copy; 2023 | All rights reserved</motion.small>
    </motion.footer>
  );
}
