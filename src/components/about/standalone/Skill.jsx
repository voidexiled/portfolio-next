import { motion } from "framer-motion";

export function Skill({ children, delay }) {
  return (
    <motion.div
      initial={{ y: 10, scale: 0.9, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.23, delay: delay }}
      className="skill w-[140px] h-[100px] lg:w-[230px] lg:h-[155px] bg-[#17191A] bg-opacity-[83%] rounded-3xl border border-secondary/70 shadow-[0_0_8px_0_rgba(20,211,255,0.23)] m-2 xl:m-0 flex justify-center items-center p-6 overflow-hidden non-selectable"
    >
      {children}
    </motion.div>
  );
}
