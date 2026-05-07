"use client";

import React, { useEffect, useState } from "react";

const textItems = [
  "Frontend Web Developer",
  "Next.js Developer",
  "Full Stack Developer",
  "MERN Stack Learner",
];

const TextSlider = () => {
  const animHeight = 30;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[30px] w-full flex items-center">
      <div
        className="absolute transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * animHeight}px)`,
        }}
      >
        {textItems.map((item, index) => (
          <p
            key={index}
            className="h-[30px] font-semibold text-white/70 tracking-wider whitespace-nowrap flex items-center"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;