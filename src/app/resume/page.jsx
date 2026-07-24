"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

/* ----------------------------- DATA (unchanged) ---------------------------- */

const projects = [
  {
    name: "Ticket Bari",
    tag: "Full Stack",
    live: "https://a-fff.vercel.app",
    desc: "A modern online ticket booking platform featuring secure Stripe payments, role-based dashboards for Users, Vendors, and Admins, real-time booking management, and responsive UI.",
    features: [
      "Stripe Payment Integration",
      "Role Based Dashboard",
      "Booking Management",
    ],
    stack: "Next.js · Node.js · MongoDB · Stripe · TanStack Query",
  },
  {
    name: "Orrderlo",
    tag: "Full Stack",
    live: "https://task-989.vercel.app",
    desc: "A modern Restaurant Management Platform with Customer, Waiter, and Manager dashboards, food ordering, table reservations, live order tracking, analytics, and authentication.",
    features: [
      "Customer Dashboard",
      "Waiter Dashboard",
      "Manager Dashboard",
      "Restaurant Analytics",
      "Table Reservation",
      "Food Ordering",
    ],
    stack: "Next.js · TypeScript · Express.js · MongoDB · JWT · Tailwind CSS · TanStack Query",
  },
  {
    name: "SCIC AI Resume Builder",
    tag: "Full Stack",
    live: "https://scic-ass-frontend.vercel.app/",
    desc: "An AI-powered Resume Builder where users can create, edit, preview, manage and download professional resumes with authentication and AI-assisted content generation.",
    features: [
      "AI Resume Generator",
      "Resume Templates",
      "ATS Friendly Resume",
      "Live Preview",
      "PDF Download",
      "Authentication",
    ],
    stack: "Next.js · TypeScript · Express.js · MongoDB · Better Auth · Tailwind CSS · AI",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
    ],
    hot: true,
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Better Auth",
      "REST API",
      "AI Integration",
    ],
    hot: false,
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
    hot: false,
  },
];

const contactInfo = [
  { label: "Email", val: "arafatgw5@gmail.com", link: "mailto:arafatgw5@gmail.com" },
  { label: "GitHub", val: "github.com/arafatgw5-cpu", link: "https://github.com/arafatgw5-cpu" },
  { label: "Portfolio", val: "arafat-nexus-2.vercel.app", link: "https://arafat-nexus-2.vercel.app" },
  { label: "Location", val: "Bangladesh" },
];

/* --------------------------- ANIMATION PRIMITIVES -------------------------- */

// Reusable in-view reveal wrapper (fade + slide + blur), respects reduced motion
function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const MotionTag = motion[as] ?? motion.div;

  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      };

  return (
    <MotionTag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </MotionTag>
  );
}

// Staggered container for lists
function Stagger({ children, className = "", gap = 0.08 }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: prefersReduced ? 0 : gap } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "", y = 18 }) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ UI PRIMITIVES ------------------------------ */

function SectionHead({ num, title }) {
  return (
    <Reveal className="mb-5 flex items-center gap-3">
      <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-[var(--color-primary)]">
        {num}
      </span>
      <div className="relative h-px flex-1 overflow-hidden bg-[var(--color-border)]">
        <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--color-primary)] to-transparent opacity-70" />
      </div>
      <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
        {title}
      </span>
    </Reveal>
  );
}

// Decorative gradient-mesh background layer
function MeshBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-20 -top-24 h-72 w-72 rounded-full opacity-[0.18] blur-[90px]"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="absolute right-[-60px] top-1/3 h-64 w-64 rounded-full opacity-[0.12] blur-[100px]"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="absolute bottom-[-80px] left-1/4 h-72 w-72 rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "var(--color-primary)" }}
      />
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />
    </div>
  );
}

/* ------------------------------ MAIN COMPONENT ----------------------------- */

export default function EasinArafatCV() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[960px] overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-bg)] font-['Space_Grotesk'] text-[var(--color-text)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)]">
      <MeshBackground />

      {/* TOP BAR */}
      <div className="relative flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-primary)] px-9 py-2.5 max-sm:flex-col max-sm:items-start max-sm:px-5">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-bg)]">
          Curriculum Vitae — 2026
        </span>
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-bg)]">
          Frontend &amp; Full Stack Learner
        </span>
      </div>

      {/* HERO */}
      <section className="relative flex items-center justify-between gap-10 border-b border-[var(--color-border)] px-9 py-12 max-md:px-6 max-sm:flex-col-reverse max-sm:gap-8 max-sm:px-5 max-sm:py-8">
        <div className="min-w-0 flex-1">
          <Reveal delay={0.05}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-primary)] backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              </span>
              Available for junior / internship roles
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mb-3 text-[56px] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--color-text)] max-md:text-[46px] max-sm:text-[40px] max-[420px]:text-[34px]">
              Easin
              <br />
              <span className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-text)] bg-clip-text text-transparent">
                Arafat
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-text-sec)] max-[420px]:text-[9.5px] max-[420px]:leading-relaxed">
              Full Stack Developer · React · Next.js · Bangladesh
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="max-w-[480px] text-[13px] font-light leading-[1.75] text-[var(--color-text-sec)] max-sm:max-w-full max-[420px]:text-[11.5px]">
              Aspiring Frontend and Full Stack Web Developer from Bangladesh,
              focused on building clean, responsive, and user-friendly web
              applications. I enjoy solving real-world problems through hands-on
              projects and continuously improving my development skills.
            </p>
          </Reveal>
        </div>

        {/* PROFILE PHOTO — premium framing */}
        <Reveal delay={0.1} y={0} className="flex shrink-0 flex-col items-center gap-3 max-sm:w-full max-sm:flex-row max-sm:flex-wrap max-sm:justify-start">
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.03, rotate: -1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group relative h-[140px] w-[140px] shrink-0 max-md:h-[120px] max-md:w-[120px] max-sm:h-[100px] max-sm:w-[100px]"
          >
            {/* soft glow behind */}
            <span
              aria-hidden
              className="absolute inset-[-14px] rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
              style={{ background: "var(--color-primary)" }}
            />
            {/* conic gradient ring */}
            <span
              aria-hidden
              className="absolute inset-[-4px] rounded-full"
              style={{
                background:
                  "conic-gradient(var(--color-primary) 0deg 270deg, var(--color-border) 270deg 360deg)",
              }}
            />
            {/* inner bg */}
            <span aria-hidden className="absolute inset-[2px] rounded-full bg-[var(--color-bg)]" />
            {/* image */}
            <div className="absolute inset-[6px] overflow-hidden rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.25),0_10px_30px_-12px_rgba(0,0,0,0.5)]">
              <Image
                src="/resume-i.jpeg"
                alt="Easin Arafat"
                fill
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 140px"
                priority
                className="rounded-full object-cover object-top grayscale-[10%] contrast-105 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* gradient sheen overlay */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-white/25"
              />
            </div>
          </motion.div>

          <Reveal delay={0.2}>
            <p className="text-center font-mono text-[7.5px] uppercase tracking-[0.16em] text-[var(--color-muted)] max-sm:text-left">
              Easin Arafat
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-surface)]/50 px-2.5 py-1 font-mono text-[7.5px] uppercase tracking-[0.12em] text-[var(--color-primary)] backdrop-blur">
              <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-[var(--color-primary)]" />
              Open to Work
            </div>
          </Reveal>
        </Reveal>
      </section>

      {/* CONTACT */}
      <Stagger className="relative grid grid-cols-4 border-b border-[var(--color-border)] max-sm:grid-cols-2 max-[420px]:grid-cols-1">
        {contactInfo.map(({ label, val, link }) => (
          <StaggerItem
            key={label}
            className="group min-w-0 border-r border-[var(--color-border)] px-5 py-4 transition-colors duration-300 last:border-r-0 hover:bg-[var(--color-surface)]/50 max-sm:border-b max-[420px]:border-r-0"
          >
            <p className="mb-1.5 font-mono text-[7.5px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {label}
            </p>
            {link ? (
              <a
                href={link}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 break-words text-[10.5px] font-medium text-[var(--color-text)] no-underline transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                {val}
                <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  ↗
                </span>
              </a>
            ) : (
              <p className="break-words text-[10.5px] font-medium text-[var(--color-text)]">
                {val}
              </p>
            )}
          </StaggerItem>
        ))}
      </Stagger>

      {/* BODY */}
      <div className="relative grid grid-cols-[1fr_250px] max-sm:grid-cols-1">
        {/* MAIN */}
        <main className="border-r border-[var(--color-border)] px-8 py-8 max-md:px-6 max-sm:border-b max-sm:border-r-0 max-sm:px-5">
          <SectionHead num="01" title="Selected Projects" />

          <Stagger className="space-y-4" gap={0.1}>
            {projects.map((p) => (
              <StaggerItem key={p.name}>
                <motion.article
                  whileHover={prefersReduced ? {} : { y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 shadow-[0_1px_0_rgba(255,255,255,0.03)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] max-[420px]:p-4"
                  style={{ willChange: "transform" }}
                >
                  {/* accent bar */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[var(--color-primary)] transition-transform duration-500 group-hover:scale-y-100"
                  />
                  {/* hover glow */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ background: "var(--color-primary)" }}
                  />

                  <div className="mb-2.5 flex items-start justify-between gap-3 max-[420px]:flex-col">
                    <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--color-text)]">
                      {p.name}
                    </h3>
                    <span className="shrink-0 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 font-mono text-[7.5px] uppercase tracking-[0.12em] text-[var(--color-primary)]">
                      {p.tag}
                    </span>
                  </div>

                  <p className="mb-3 text-[11px] font-light leading-[1.7] text-[var(--color-text-sec)]">
                    {p.desc}
                  </p>

                  <div className="mb-3 space-y-0.5">
                    {p.features.map((f) => (
                      <p
                        key={f}
                        className="relative py-[3px] pl-4 text-[10.5px] leading-normal text-[var(--color-muted)] before:absolute before:left-0 before:text-[9px] before:text-[var(--color-primary)] before:transition-transform before:duration-300 before:content-['→'] group-hover:before:translate-x-0.5"
                      >
                        {f}
                      </p>
                    ))}
                  </div>

                  <p className="mb-3.5 font-mono text-[8px] tracking-[0.05em] text-[var(--color-muted)]">
                    Stack: <span className="text-[var(--color-text-sec)]">{p.stack}</span>
                  </p>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-2 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] no-underline transition-all duration-300 hover:bg-transparent hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                  >
                    Live Site
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-9">
            <SectionHead num="02" title="Experience" />
          </div>

          <Stagger className="space-y-4" gap={0.12}>
            <StaggerItem className="border-b border-[var(--color-border)] pb-4">
              <h3 className="mb-1 text-[13px] font-semibold text-[var(--color-text)]">
                Full Stack Developer
              </h3>
              <p className="mb-2 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
                Personal &amp; Academic Projects · 2024 — Present
              </p>
              <p className="text-[11px] font-light leading-[1.7] text-[var(--color-text-sec)]">
                Built Ticket Bari, Orrderlo, and SCIC AI Resume Builder —
                production-ready full stack applications using modern
                technologies including Next.js, Express.js, MongoDB, Better
                Auth, JWT, AI Integration, and Tailwind CSS.
              </p>
            </StaggerItem>

            <StaggerItem>
              <h3 className="mb-1 text-[13px] font-semibold text-[var(--color-text)]">
                Full Stack Learner
              </h3>
              <p className="mb-2 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
                Programming Hero / Self Learning · 2025 — Present
              </p>
              <p className="text-[11px] font-light leading-[1.7] text-[var(--color-text-sec)]">
                Learning full stack development through hands-on projects,
                authentication systems, MongoDB database integration, dynamic
                routing, deployment, and clean UI design.
              </p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface)]/60 px-3.5 py-1.5 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
                <span className="font-mono text-[7.5px] uppercase tracking-[0.12em] text-[var(--color-primary)]">
                  Available Now · Remote Ready
                </span>
              </div>
            </StaggerItem>
          </Stagger>
        </main>

        {/* SIDEBAR */}
        <aside className="px-6 py-8 max-sm:px-5">
          <SectionHead num="03" title="Skills" />

          <Stagger className="space-y-5" gap={0.06}>
            {skillGroups.map((g) => (
              <StaggerItem key={g.title}>
                <h4 className="mb-2.5 font-mono text-[7.5px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  {g.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={prefersReduced ? {} : { y: -2, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      className={`inline-block cursor-default rounded-full border px-2.5 py-1 text-[9.5px] transition-colors duration-300 ${
                        g.hot
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          : "border-[var(--color-border)] text-[var(--color-text-sec)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)]"
                      }`}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8">
            <SectionHead num="04" title="Education" />
          </div>

          <Stagger className="space-y-4" gap={0.1}>
            <StaggerItem className="border-b border-[var(--color-border)] pb-4">
              <h3 className="mb-1 text-[13px] font-semibold text-[var(--color-text)]">
                Web Development
              </h3>
              <p className="mb-2 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
                Programming Hero Batch 13 · 2024 — Present
              </p>
              <p className="text-[11px] font-light leading-[1.7] text-[var(--color-text-sec)]">
                Frontend &amp; full stack dev with real-world assignments,
                authentication, MongoDB, deployment, and project-based learning.
              </p>
            </StaggerItem>

            <StaggerItem className="border-b border-[var(--color-border)] pb-4">
              <h3 className="mb-1 text-[13px] font-semibold text-[var(--color-text)]">
                Academic Study
              </h3>
              <p className="mb-2 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
                National University · Bangladesh · Present
              </p>
              <p className="text-[11px] font-light leading-[1.7] text-[var(--color-text-sec)]">
                Continuing academic study while improving programming,
                presentation, teamwork, and communication skills.
              </p>
            </StaggerItem>
          </Stagger>

          <div className="mt-8">
            <SectionHead num="05" title="Languages" />
          </div>

          <Stagger className="mb-4 space-y-2 border-b border-[var(--color-border)] pb-4" gap={0.07}>
            {[
              ["Bangla", "Native"],
              ["English", "Professional"],
              ["Hindi", "Professional"],
            ].map(([lang, level]) => (
              <StaggerItem
                key={lang}
                className="flex items-center justify-between"
              >
                <span className="text-[11px] text-[var(--color-text-sec)]">{lang}</span>
                <span className="rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-surface)]/50 px-2 py-0.5 font-mono text-[7.5px] text-[var(--color-primary)]">
                  {level}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8">
            <SectionHead num="06" title="Interests" />
          </div>

          <Reveal>
            <p className="text-[11px] font-light leading-[1.7] text-[var(--color-text-sec)]">
              Web Development, Frontend Design, Next.js Projects, Clean UI Design,
              Problem Solving, and continuous learning.
            </p>
          </Reveal>
        </aside>
      </div>

      {/* BOTTOM */}
      <div className="relative flex items-center justify-between gap-4 border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 px-9 py-4 backdrop-blur max-sm:flex-col max-sm:items-start max-sm:px-5">
        <span className="font-mono text-[7.5px] uppercase tracking-[0.12em] text-[var(--color-muted)]">
          Easin Arafat · CV 2026
        </span>
        <span className="font-mono text-[7.5px] uppercase tracking-[0.12em] text-[var(--color-muted)]">
          React · Next.js · Tailwind · Better Auth · MongoDB
        </span>
      </div>
    </div>
  );
}