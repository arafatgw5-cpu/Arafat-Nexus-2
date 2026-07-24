"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { memo, useEffect, useRef } from "react";

/* ----------------------------- Motion Variants ----------------------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* --------------------------- Empty State Component -------------------------- */

const EmptyState = () => (
  <div
    role="status"
    className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed py-20 text-center"
    style={{ borderColor: "var(--color-border)" }}
  >
    <div
      className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <ArrowUpRight
        className="h-7 w-7"
        style={{ color: "var(--color-text-sec)" }}
      />
    </div>
    <h3
      className="text-lg font-semibold"
      style={{ color: "var(--color-text)" }}
    >
      No services available yet
    </h3>
    <p
      className="mt-1 max-w-sm text-sm"
      style={{ color: "var(--color-text-sec)" }}
    >
      New services are on the way. Please check back soon.
    </p>
  </div>
);

/* ----------------------------- Category Badge ------------------------------ */

const CategoryBadge = ({ category }) => {
  if (!category) return null;
  return (
    <span
      className="relative z-10 mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-[11px]
                 font-semibold uppercase tracking-wider backdrop-blur-md transition-colors duration-300
                 group-hover:border-[var(--color-primary)]"
      style={{
        borderColor: "var(--color-border)",
        color: "var(--color-text-sec)",
        background: "var(--color-surface)",
      }}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--color-primary)" }}
      />
      {category}
    </span>
  );
};

/* --------------------------- Circular Skill Meter --------------------------- */

const CircularSkillMeter = memo(function CircularSkillMeter({
  label,
  percent = 90,
  size = 60,
  strokeWidth = 5,
  prefersReducedMotion,
  delay = 0,
}) {
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.6 });

  const progress = useMotionValue(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const dashOffset = useTransform(
    progress,
    (v) => circumference - (v / 100) * circumference
  );
  const roundedLabel = useTransform(progress, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      progress.set(percent);
      return;
    }

    const controls = animate(progress, percent, {
      duration: 1.3,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [isInView, percent, prefersReducedMotion, delay, progress]);

  return (
    <div
      ref={wrapperRef}
      className="relative z-10 flex items-center gap-4"
      role="group"
      aria-label={`${label ?? "Skill"} proficiency`}
    >
      <div
        className="relative flex shrink-0 items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label ?? "Skill"} level ${percent}%`}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            style={{ stroke: "var(--color-border)" }}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              stroke: "var(--color-primary)",
              strokeDasharray: circumference,
              strokeDashoffset: dashOffset,
              filter: "drop-shadow(0 0 5px var(--color-primary))",
            }}
          />
        </svg>
        <motion.span
          className="absolute text-[13px] font-bold tabular-nums"
          style={{ color: "var(--color-text)" }}
          aria-hidden="true"
        >
          {roundedLabel}
        </motion.span>
      </div>

      {label && (
        <div className="flex flex-col">
          <span
            className="text-[13px] font-semibold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {label}
          </span>
          <span
            className="text-[11px]"
            style={{ color: "var(--color-text-sec)" }}
          >
            Proficiency
          </span>
        </div>
      )}
    </div>
  );
});

/* ------------------------------ Service Card ------------------------------- */

const ServiceCard = ({ item, prefersReducedMotion, index }) => {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        prefersReducedMotion ? undefined : { y: -10, scale: 1.015 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border p-8 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),0_12px_40px_-12px_rgba(0,0,0,0.15)]
                 backdrop-blur-xl transition-shadow duration-500
                 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12),0_24px_60px_-16px_rgba(0,0,0,0.25)]
                 md:p-10"
    >
      {/* Ambient radial glow (follows theme primary) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0
                   blur-3xl transition-opacity duration-700 group-hover:opacity-[0.18]"
        style={{ background: "var(--color-primary)" }}
      />

      {/* Top accent line */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform
                   duration-700 group-hover:scale-x-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
        }}
      />

      {/* Giant watermark index */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-4 select-none text-[9rem] font-black leading-none
                   opacity-[0.04] transition-all duration-700 group-hover:opacity-[0.09] md:text-[11rem]"
        style={{ color: "var(--color-primary)" }}
      >
        {item?._id}
      </span>

      {/* Header row */}
      <div className="relative z-10 mb-6 flex items-start justify-between">
        <p
          className="bg-gradient-to-b from-[var(--color-text)] to-[var(--color-text-sec)] bg-clip-text text-6xl font-extrabold
                     tracking-tight text-transparent transition-all duration-500
                     group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-primary)] md:text-7xl"
        >
          {item?._id}
        </p>

        <Link
          href={item?.href}
          aria-label={`Learn more about ${item?.title}`}
          className="rounded-2xl border p-4 outline-none transition-all duration-300
                     focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2
                     group-hover:rotate-45 group-hover:border-[var(--color-primary)]
                     group-hover:bg-[var(--color-primary)] group-active:scale-90"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-sec)",
          }}
        >
          <ArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
        </Link>
      </div>

      {/* Category badge */}
      <CategoryBadge category={item?.category} />

      {/* Title */}
      <h2
        style={{ color: "var(--color-text)" }}
        className="relative z-10 mb-4 text-2xl font-semibold leading-tight tracking-tight
                   transition-colors duration-300 group-hover:text-[var(--color-primary)] md:text-3xl"
      >
        {item?.title}
      </h2>

      {/* Description */}
      <p
        style={{ color: "var(--color-text-sec)" }}
        className="relative z-10 flex-1 text-[15px] leading-relaxed md:text-base"
      >
        {item?.description}
      </p>

      {/* Skill level meter */}
      {typeof item?.level === "number" && (
        <div className="relative z-10 mt-6">
          <CircularSkillMeter
            label={item?.skillLabel ?? item?.title}
            percent={item.level}
            prefersReducedMotion={prefersReducedMotion}
            delay={index ? index * 0.05 : 0}
          />
        </div>
      )}

      {/* Bottom animated progress line */}
      <div className="relative z-10 mt-8 pt-6">
        <div
          className="h-px w-full"
          style={{ background: "var(--color-border)" }}
        />
        <div
          aria-hidden="true"
          className="-mt-[3px] h-[3px] w-0 rounded-full transition-all duration-700 group-hover:w-full"
          style={{ background: "var(--color-primary)" }}
        />
      </div>

      {/* Diagonal shine sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full opacity-0
                   transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.10) 50%, transparent 65%)",
        }}
      />
    </motion.article>
  );
};

/* ------------------------------- Page Layout ------------------------------- */

const ServicesPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const hasServices = Array.isArray(servicesData) && servicesData.length > 0;

  return (
    <section
      style={{ color: "var(--color-text)" }}
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden py-8 md:py-16"
    >
      {/* Decorative background field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)",
          }}
        />
      </div>

      <Container>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Title>Services I Provide</Title>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10"
        >
          {hasServices ? (
            servicesData.map((item, index) => (
              <ServiceCard
                key={item?._id}
                item={item}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPage;