"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMemo, memo } from "react";

// কাস্টম ইজিং কার্ভ (স্মুথ এবং ন্যাচারাল)
const EASE = [0.22, 1, 0.36, 1];

// ভেরিয়েন্টগুলোকে আরও ফ্লুইড করা হয়েছে
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.99,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
};

const PageTransition = memo(function PageTransition({
  children,
  className = "",
  disableScale = false,
  transitionKey,
}) {
  const pathname = usePathname();

  // মেমোইজড কী – অপ্রয়োজনীয় রি-রেন্ডার রোধ করে
  const key = useMemo(() => transitionKey || pathname, [transitionKey, pathname]);

  // ভেরিয়েন্ট কাস্টমাইজেশন (স্কেল অপশনাল)
  const variants = useMemo(() => {
    if (disableScale) {
      // স্কেল বাদ দিয়ে শুধু অপাসিটি ও ব্লার রাখা
      return {
        initial: { opacity: 0, filter: "blur(6px)" },
        animate: {
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: EASE },
        },
        exit: {
          opacity: 0,
          filter: "blur(4px)",
          transition: { duration: 0.3, ease: EASE },
        },
      };
    }
    return pageVariants;
  }, [disableScale]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={key}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`w-full min-h-[100dvh] will-change-transform will-change-opacity will-change-filter ${className}`}
        // মোবাইলে 100dvh ব্যবহার করা ভালো (address bar ইত্যাদি এড়াতে)
        style={{ willChange: "transform, opacity, filter" }}
        // অ্যানিমেশন শেষ হলে কাস্টম লজিক (যেমন analytics) যোগ করা যায়
        onAnimationComplete={() => {
          // উদাহরণ: if (typeof window !== 'undefined') window.scrollTo(0, 0);
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
});

export default PageTransition;