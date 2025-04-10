"use client";

import type { MotionValue } from "framer-motion";
import { motion, useTransform } from "framer-motion";

const BannerTitleChar = ({
  char,
  index,
  scrollYProgress,
}: {
  char: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = 0.3 + index * 0.05; // Start fading out earlier
  const end = start + 0.05; // Quick fade out

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const y = useTransform(scrollYProgress, [start, end], [0, -100]);
  return (
    <motion.span
      style={{ opacity, y }}
      className="w-[13vw] text-[10vw] inline-block leading-[1.5em] text-center"
    >
      {char}
    </motion.span>
  );
};
export default BannerTitleChar;
