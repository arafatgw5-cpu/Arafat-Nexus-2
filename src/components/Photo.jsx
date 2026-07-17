"use client";

import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";

const Photo = () => {
  // ── Rotation: driven by a raw MotionValue so no variant/context can kill it ──
  const progress = useMotionValue(0);
  const rotate = useTransform(progress, [0, 1], [0, 360]);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    });
    return () => controls.stop();
  }, [progress]);

  // ── Dash animation: also imperative so AnimatePresence can't suppress it ──
  const dasharray = useMotionValue("24 10 0 0");

  useEffect(() => {
    const keyframes = [
      "24 10 0 0",
      "15 120 25 25",
      "16 25 92 72",
      "4 250 22 22",
    ];
    const controls = animate(dasharray, keyframes, {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [dasharray]);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="relative flex items-center justify-center"
      >
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
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

        {/* Rotating dashed ring */}
        <motion.svg
          className="h-[310px] w-[310px] sm:h-[350px] sm:w-[350px] lg:h-[506px] lg:w-[506px]"
          viewBox="0 0 506 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
          style={{ rotate, transformOrigin: "50% 50%" }}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="240"
            stroke="var(--color-primary)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: dasharray }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;