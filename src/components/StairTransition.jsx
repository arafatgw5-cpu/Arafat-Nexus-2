"use client";
<<<<<<< HEAD

=======
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
import { AnimatePresence } from "framer-motion";
import React from "react";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
<<<<<<< HEAD

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* ট্রানজিশন লেয়ারের স্টাইল */}
        <div className="fixed left-0 right-0 top-0 z-40 flex h-screen w-screen pointer-events-none">
=======
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

<<<<<<< HEAD
export default StairTransition;
=======
export default StairTransition;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
