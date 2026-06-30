import Image from "next/image";
import React from "react";

const projects = [
  {
    name: "Ticket Bari",
    tag: "Ticket Booking",
    live: "https://a-fff.vercel.app",
    desc: "A modern online ticket booking platform for buses, trains, flights, and launches with separate dashboards for users, vendors, and admins.",
    features: [
      "Role-Based Access Control (User, Vendor, Admin)",
      "Stripe Payment Integration for secure booking",
      "Dynamic dashboards with real-time statistics",
    ],
    stack: "Next.js · Node.js · MongoDB · Stripe · TanStack Query",
  },
  {
    name: "SkillSphere",
    tag: "Next.js App",
    live: "https://skill-sphere-b13-8-94z6.vercel.app",
    desc: "A modern online learning platform where users can explore courses, view course details, login/register, and manage their profile with a clean responsive interface.",
    features: [
      "Better Auth authentication with protected route flow",
      "Dynamic course pages using Next.js App Router",
      "Responsive Tailwind CSS UI for mobile, tablet, and desktop",
    ],
    stack: "Next.js · Tailwind CSS · Better Auth · MongoDB",
  },
  {
    name: "Dragon News",
    tag: "News Portal",
    live: "https://dragon-news-blush.vercel.app",
    desc: "A responsive news portal with category-based news browsing, dynamic details pages, API data fetching, and clean news-card based layouts.",
    features: [
      "Dynamic category and news details routing",
      "REST API integration with Programming Hero news API",
      "Authentication UI with Google/GitHub login flow",
    ],
    stack: "Next.js · REST API · Better Auth · Tailwind CSS",
  },
];

const skillGroups = [
  {
    title: "Core Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TanStack Query"],
    hot: true,
  },
  {
    title: "UI & Animation",
    skills: ["DaisyUI", "shadcn/ui", "Framer Motion", "Responsive Design"],
    hot: false,
  },
  {
    title: "Backend & Auth",
    skills: ["Node.js", "Express.js", "MongoDB", "Better Auth", "Stripe", "REST API"],
    hot: false,
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Postman"],
    hot: false,
  },
];

const contactInfo = [
  {
    label: "Email",
    val: "arafatgw5@gmail.com",
    link: "mailto:arafatgw5@gmail.com",
  },
  {
    label: "GitHub",
    val: "github.com/arafatgw5-cpu",
    link: "https://github.com/arafatgw5-cpu",
  },
  {
    label: "Portfolio",
    val: "arafat-nexus-2.vercel.app",
    link: "https://arafat-nexus-2.vercel.app",
  },
  {
    label: "Location",
    val: "Bangladesh",
  },
];

function SectionHead({ num, title }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span className="font-mono text-[9px] tracking-[0.12em] text-[var(--color-primary)]">
        {num}
      </span>
      <div className="h-px flex-1 bg-[var(--color-border)]" />
      <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {title}
      </span>
    </div>
  );
}

export default function EasinArafatCV() {
  return (
    <div className="mx-auto max-w-[900px] overflow-hidden bg-[var(--color-bg)] font-['Space_Grotesk'] text-[var(--color-text)]">
      {/* TOP BAR */}
      <div className="flex items-center justify-between gap-3 bg-[var(--color-primary)] px-9 py-2 max-sm:flex-col max-sm:items-start max-sm:px-5">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-bg)]">
          Curriculum Vitae — 2026
        </span>
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-bg)]">
          Frontend &amp; Full Stack Learner
        </span>
      </div>

      {/* HERO */}
      <section className="flex items-start justify-between gap-6 border-b border-[var(--color-border)] px-9 py-9 max-md:px-6 max-sm:flex-col-reverse max-sm:px-5 max-sm:py-6">
        <div className="min-w-0 flex-1">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {"Available for junior / internship roles"}
          </p>

          <h1 className="mb-2 text-[50px] font-bold leading-none tracking-[-0.03em] text-[var(--color-text)] max-md:text-[42px] max-sm:text-[38px] max-[420px]:text-[32px]">
            Easin
            <br />
            <span className="text-[var(--color-primary)]">Arafat</span>
          </h1>

          <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.06em] text-[var(--color-text-sec)] max-[420px]:text-[9.5px] max-[420px]:leading-relaxed">
            Frontend Developer · React · Next.js · Bangladesh
          </p>

          <p className="max-w-[480px] text-[12.5px] font-light leading-[1.7] text-[var(--color-text-sec)] max-sm:max-w-full max-[420px]:text-[11.5px]">
            Aspiring Frontend and Full Stack Web Developer from Bangladesh,
            focused on building clean, responsive, and user-friendly web
            applications. I enjoy solving real-world problems through hands-on
            projects and continuously improving my development skills.
          </p>
        </div>

        {/* PROFILE PHOTO */}
        <div className="flex shrink-0 flex-col items-center gap-2.5 pt-1 max-sm:w-full max-sm:flex-row max-sm:flex-wrap max-sm:justify-start">
          <div className="relative h-[110px] w-[110px] shrink-0 rounded-full before:absolute before:inset-[-3px] before:rounded-full before:bg-[conic-gradient(var(--color-primary)_0deg_270deg,var(--color-border)_270deg_360deg)] after:absolute after:inset-0.5 after:rounded-full after:bg-[var(--color-bg)] max-md:h-24 max-md:w-24 max-sm:h-[92px] max-sm:w-[92px]">
            <Image
              src="/resume-i.jpeg"
              alt="Easin Arafat"
              fill
              sizes="(max-width: 640px) 92px, (max-width: 768px) 96px, 110px"
              priority
              className="z-10 rounded-full object-cover object-top p-[5px] grayscale-[10%] contrast-105"
            />
          </div>

          <div>
            <p className="text-center font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--color-muted)] max-sm:text-left">
              Easin Arafat
            </p>

            <div className="mt-1 flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.1em] text-[var(--color-primary)]">
              <span className="h-[5px] w-[5px] rounded-full bg-[var(--color-primary)]" />
              Open to Work
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="grid grid-cols-4 border-b border-[var(--color-border)] max-sm:grid-cols-2 max-[420px]:grid-cols-1">
        {contactInfo.map(({ label, val, link }) => (
          <div
            key={label}
            className="min-w-0 border-r border-[var(--color-border)] px-[18px] py-3 last:border-r-0 max-sm:border-b max-[420px]:border-r-0"
          >
            <p className="mb-1 font-mono text-[7.5px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {label}
            </p>

            {link ? (
              <a
                href={link}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="break-words text-[10.5px] font-medium text-[var(--color-text)] no-underline hover:text-[var(--color-primary)]"
              >
                {val}
              </a>
            ) : (
              <p className="break-words text-[10.5px] font-medium text-[var(--color-text)]">
                {val}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* BODY */}
      <div className="grid grid-cols-[1fr_230px] max-sm:grid-cols-1">
        {/* MAIN */}
        <main className="border-r border-[var(--color-border)] px-[30px] py-[26px] max-md:px-6 max-sm:border-r-0 max-sm:border-b max-sm:px-5">
          <SectionHead num="01" title="Selected Projects" />

          <div className="space-y-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] px-[18px] py-4 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-[var(--color-primary)] max-[420px]:p-[15px]"
              >
                <div className="mb-2 flex items-start justify-between gap-2.5 max-[420px]:flex-col">
                  <h3 className="text-[13.5px] font-semibold tracking-[-0.01em] text-[var(--color-text)]">
                    {p.name}
                  </h3>
                  <span className="shrink-0 whitespace-nowrap border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-[3px] font-mono text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-primary)]">
                    {p.tag}
                  </span>
                </div>

                <p className="mb-2 text-[11px] font-light leading-[1.65] text-[var(--color-text-sec)]">
                  {p.desc}
                </p>

                <div className="mb-2">
                  {p.features.map((f) => (
                    <p
                      key={f}
                      className="relative py-[2.5px] pl-3.5 text-[10.5px] leading-normal text-[var(--color-muted)] before:absolute before:left-0 before:text-[9px] before:text-[var(--color-primary)] before:content-['→']"
                    >
                      {f}
                    </p>
                  ))}
                </div>

                <p className="mb-2.5 font-mono text-[8px] tracking-[0.05em] text-[var(--color-muted)]">
                  Stack: <span className="text-[var(--color-text-sec)]">{p.stack}</span>
                </p>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-primary)] px-3 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[var(--color-bg)] no-underline transition hover:bg-transparent hover:text-[var(--color-primary)]"
                >
                  Live Site
                </a>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <SectionHead num="02" title="Experience" />
          </div>

          <div className="mb-3.5 border-b border-[var(--color-border)] pb-3.5">
            <h3 className="mb-0.5 text-[12.5px] font-semibold text-[var(--color-text)]">
              Frontend Developer
            </h3>
            <p className="mb-1.5 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
              Personal &amp; Academic Projects · 2024 — Present
            </p>
            <p className="text-[11px] font-light leading-[1.65] text-[var(--color-text-sec)]">
              Building modern and responsive web applications using React,
              Next.js, Tailwind CSS, and Better Auth. Worked on Ticket Bari,
              SkillSphere, Dragon News, and multiple assignment-based projects.
            </p>
          </div>

          <div>
            <h3 className="mb-0.5 text-[12.5px] font-semibold text-[var(--color-text)]">
              Full Stack Learner
            </h3>
            <p className="mb-1.5 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
              Programming Hero / Self Learning · 2025 — Present
            </p>
            <p className="text-[11px] font-light leading-[1.65] text-[var(--color-text-sec)]">
              Learning full stack development through hands-on projects,
              authentication systems, MongoDB database integration, dynamic
              routing, deployment, and clean UI design.
            </p>

            <div className="mt-2 inline-flex items-center gap-1.5 border border-[var(--color-primary)] bg-[var(--color-bg)] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="font-mono text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-primary)]">
                Available Now · Remote Ready
              </span>
            </div>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="px-5 py-[22px] max-sm:px-5">
          <SectionHead num="03" title="Skills" />

          {skillGroups.map((g) => (
            <div key={g.title} className="mb-[18px]">
              <h4 className="mb-2 font-mono text-[7.5px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
                {g.title}
              </h4>

              <div className="flex flex-wrap gap-1">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={`inline-block border px-[9px] py-[3px] text-[9.5px] ${
                      g.hot
                        ? "border-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-primary)]"
                        : "border-[var(--color-border)] text-[var(--color-text-sec)]"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <SectionHead num="04" title="Education" />

          <div className="mb-3.5 border-b border-[var(--color-border)] pb-3.5">
            <h3 className="mb-0.5 text-[12.5px] font-semibold text-[var(--color-text)]">
              Web Development
            </h3>
            <p className="mb-1.5 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
              Programming Hero Batch 13 · 2024 — Present
            </p>
            <p className="text-[11px] font-light leading-[1.65] text-[var(--color-text-sec)]">
              Frontend &amp; full stack dev with real-world assignments,
              authentication, MongoDB, deployment, and project-based learning.
            </p>
          </div>

          <div className="mb-3.5 border-b border-[var(--color-border)] pb-3.5">
            <h3 className="mb-0.5 text-[12.5px] font-semibold text-[var(--color-text)]">
              Academic Study
            </h3>
            <p className="mb-1.5 font-mono text-[8px] tracking-[0.06em] text-[var(--color-muted)]">
              National University · Bangladesh · Present
            </p>
            <p className="text-[11px] font-light leading-[1.65] text-[var(--color-text-sec)]">
              Continuing academic study while improving programming,
              presentation, teamwork, and communication skills.
            </p>
          </div>

          <SectionHead num="05" title="Languages" />

          <div className="mb-3.5 border-b border-[var(--color-border)] pb-3.5">
            {[
              ["Bangla", "Native"],
              ["English", "Professional"],
              ["Hindi", "Professional"],
            ].map(([lang, level]) => (
              <div
                key={lang}
                className="mb-1.5 flex items-center justify-between"
              >
                <span className="text-[11px] text-[var(--color-text-sec)]">{lang}</span>
                <span className="font-mono text-[7.5px] text-[var(--color-primary)]">
                  {level}
                </span>
              </div>
            ))}
          </div>

          <SectionHead num="06" title="Interests" />

          <p className="text-[11px] font-light leading-[1.65] text-[var(--color-text-sec)]">
            Web Development, Frontend Design, Next.js Projects, Clean UI Design,
            Problem Solving, and continuous learning.
          </p>
        </aside>
      </div>

      {/* BOTTOM */}
      <div className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] px-9 py-3 max-sm:flex-col max-sm:items-start max-sm:px-5">
        <span className="font-mono text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
          Easin Arafat · CV 2026
        </span>
        <span className="font-mono text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
          React · Next.js · Tailwind · Better Auth · MongoDB
        </span>
      </div>
    </div>
  );
}
