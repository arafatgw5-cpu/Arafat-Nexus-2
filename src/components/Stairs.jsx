<<<<<<< HEAD
"use client";

=======
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
<<<<<<< HEAD
          className="relative h-full w-full bg-[var(--color-primary)]"
=======
          className="h-full w-full bg-white relative"
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
        />
      ))}
    </>
  );
};

<<<<<<< HEAD
export default Stairs;
=======
export default Stairs;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
