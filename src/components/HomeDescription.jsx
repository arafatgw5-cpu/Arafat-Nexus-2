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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
    >
      {hasLoaded ? (
        <>
          {displayedText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 4, color: "var(--color-text-sec)" }}
              animate={{
                opacity: 1,
                y: 0,
                color: isComplete
                  ? "var(--color-text)"
                  : "var(--color-text-sec)",
              }}
              transition={{
                opacity: { duration: 0.2, delay: index * 0.03 },
                y: { duration: 0.2, delay: index * 0.03 },
                color: { duration: 0.5, delay: index * 0.03 },
              }}
            >
              {char}
            </motion.span>
          ))}

          {/* Blinking cursor while typing */}
          {!isComplete && (
            <motion.span
              style={{ backgroundColor: "var(--color-primary)" }}
              className="inline-block w-[2px] h-4 ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )}
        </>
      ) : (
        <span style={{ color: "var(--color-text-sec)" }}>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;