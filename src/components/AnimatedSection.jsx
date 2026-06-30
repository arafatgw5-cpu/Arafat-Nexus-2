"use client";

import { motion } from "framer-motion";

const directionVariants = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: 50, y: 0 },
  right: { x: -50, y: 0 },
};

export default function AnimatedSection({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  className = "",
}) {
  const offset = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        ...offset,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // smooth premium ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}