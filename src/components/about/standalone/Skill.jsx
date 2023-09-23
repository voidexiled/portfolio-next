import { motion } from "framer-motion";

export function Skill({ children, props }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="skill w-[140px] h-[100px] lg:w-[230px] lg:h-[155px] bg-[#17191A] bg-opacity-[83%] rounded-3xl border border-secondary/70 shadow-[0_0_8px_0_rgba(20,211,255,0.23)] m-2 xl:m-0 flex justify-center items-center p-6 overflow-hidden non-selectable"
    >
      {children}
    </motion.div>
  );
}
