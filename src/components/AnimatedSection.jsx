"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}