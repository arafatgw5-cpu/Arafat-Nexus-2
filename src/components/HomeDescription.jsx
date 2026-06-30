"use client";

import { useTypewriter } from "@/hooks/user-type-writer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description =
    "I am an aspiring Frontend & Full Stack Web Developer from Bangladesh. I love building modern, responsive, and user-friendly web applications using React, Next.js, Tailwind CSS, Better Auth, and MongoDB.";
  const { displayedText, isComplete } = useTypewriter(description, 30);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <motion.p
      style={{ color: "var(--color-text-sec)" }}
      className="w-auto font-normal leading-7 mb-6 min-h-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "var(--color-text-sec)" }}
            animate={{
              color: isComplete ? "var(--color-text)" : "var(--color-text-sec)",
            }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span style={{ color: "var(--color-text-sec)" }}>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;
