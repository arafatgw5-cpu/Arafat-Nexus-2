"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* ট্রানজিশন লেয়ারের স্টাইল */}
        <div className="fixed left-0 right-0 top-0 z-40 flex h-screen w-screen pointer-events-none">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
