import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const ProjectImage = ({ src, alt }) => {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <Image
        alt={alt}
        src={src}
        onWaiting={() => setReveal(false)}
        width={1800}
        height={600}
        quality={100}
        className=" aspect-[3/1] w-full object-cover"
        priority={true}
        style={{

          visibility,
        }}
        onError={() => setReveal(true)}
        onLoad={() => setReveal(true)}
      ></Image>
    </motion.div>
  );
};

export default ProjectImage;
