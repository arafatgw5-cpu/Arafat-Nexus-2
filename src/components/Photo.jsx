"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EnhancedPhoto = () => {
  // থিম ভেরিয়েবল ব্যবহার করা হয়েছে
  const circleColors = ["var(--color-primary)"];

  const circleVariants = {
    initial: {
      strokeDasharray: "24 10 0 0",
      rotate: 0,
      opacity: 0,
    },
    animate: (index) => ({
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      opacity: 1,
      transition: {
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: {
          duration: 0.4,
          delay: 2 + index * 0.4,
          ease: "easeIn",
        },
      },
    }),
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute left-1/2 top-1/2 z-10 h-[255px] w-[255px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[var(--color-bg)] sm:h-[285px] sm:w-[285px] lg:h-[420px] lg:w-[420px]"
        >
          <Image
            src="/hero.png"
            alt="Easin Arafat"
            fill
            priority
            quality={100}
            sizes="(max-width: 640px) 255px, (max-width: 1024px) 285px, 420px"
            className="scale-[1.08] object-cover object-top"
          />
        </motion.div>

        {/* Animated Circle */}
        <svg
          className="h-[310px] w-[310px] sm:h-[350px] sm:w-[350px] lg:h-[506px] lg:w-[506px]"
          viewBox="0 0 506 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {circleColors.map((color, index) => (
            <motion.circle
              key={index}
              cx="253"
              cy="253"
              r={240 - index * 15}
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={circleVariants}
              initial="initial"
              animate="animate"
              custom={index}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default EnhancedPhoto;