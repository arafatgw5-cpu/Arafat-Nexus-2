"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

import Container from "@/components/Container";

const education = [
  {
    degree: "B.A. (Honours) in English",
    institute: "National University, Bangladesh",
    period: "2024 — Present",
    note:
      "Continuing academic study while improving programming, presentation, teamwork, and communication skills.",
  },
  {
    degree: "Web Development",
    institute: "Programming Hero, Batch 13",
    period: "2025 — Present",
    note:
      "Frontend & full stack development through real-world assignments, authentication, MongoDB, and deployment.",
  },
];

export default function EducationSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      {/* Ambient gradient mesh background — matches other sections */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/20 blur-[130px]" />
        <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/20 blur-[130px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-text)]/5 px-4 py-2 text-sm font-medium text-[var(--color-primary)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
            Academic Background
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/60 bg-clip-text text-transparent">
              Qualification
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
            My academic background alongside hands-on, project-based learning in web development.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="group relative overflow-hidden rounded-[20px] border border-[var(--color-primary)]/15 bg-[var(--color-surface)]/80 p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] md:p-8"
            >
              {/* accent glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-primary)]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <GraduationCap className="h-6 w-6" />
              </div>

              <h3 className="mb-1.5 text-lg font-bold tracking-tight text-[var(--color-text)] md:text-xl">
                {item.degree}
              </h3>

              <div className="mb-3 flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)]">
                <MapPin className="h-3.5 w-3.5" />
                {item.institute}
              </div>

              <div className="mb-4 flex items-center gap-1.5 text-xs uppercase tracking-wider text-[var(--color-muted)]">
                <Calendar className="h-3.5 w-3.5" />
                {item.period}
              </div>

              <p className="text-sm leading-6 text-[var(--color-muted)]">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}