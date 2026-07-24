"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";

// Shared easing so every animation in this file feels like one gesture.
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const NAV_ITEMS = ["Home", "Projects", "Services", "Contact"];

const SOCIALS = [
  { icon: Github, href: "https://github.com/arafatgw5-cpu", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/easin-arafat-gw5",
    label: "LinkedIn",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-primary)]/15 bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Decorative gradient mesh — purely ambient, sits behind everything */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[var(--color-primary)]/15 blur-[100px]" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="max-w-sm space-y-5">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)]">
              Portfolio
            </h2>
            <p className="text-sm leading-relaxed text-[var(--color-text)]/70">
              Building modern, accessible, and user-centric digital
              experiences with passion and precision.
            </p>

            {/* Social row moved up near brand for stronger hierarchy on mobile */}
            <div className="flex gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/[0.06] backdrop-blur-sm transition-colors duration-300 hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/60"
                  >
                    <Icon className="h-[18px] w-[18px] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text)]/50">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="group inline-flex items-center gap-1.5 text-[var(--color-text)]/70 transition-colors duration-300 hover:text-[var(--color-primary)]"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text)]/50">
              Contact
            </h3>
            <Link
              href="mailto:arafat@example.com"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/[0.04] px-3.5 py-2.5 text-sm text-[var(--color-text)]/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
            >
              <Mail className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span>arafatgw5@gmail.com</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </motion.div>

          {/* Availability / signature block */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text)]/50">
              Status
            </h3>
            <div className="flex items-center gap-2.5 rounded-xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/[0.04] px-3.5 py-2.5 text-sm text-[var(--color-text)]/80 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)]/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Open to frontend roles
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-primary)]/10 py-8 text-center text-xs text-[var(--color-text)]/50 sm:flex-row sm:text-left"
        >
          <p>© {currentYear} Easin Arafat. All rights reserved.</p>
          <p className="text-[var(--color-text)]/40">
            Designed &amp; built from scratch.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;