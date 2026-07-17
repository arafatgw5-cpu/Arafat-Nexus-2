"use client";
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="fixed left-0 right-0 top-0 z-40 flex h-screen w-screen pointer-events-none"
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;