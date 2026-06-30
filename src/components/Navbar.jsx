"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarData } from "@/constants";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        style={{ background: "var(--color-bg)" }}
        className="sticky top-0 z-30 w-full"
      >
        <div className="mx-auto flex items-center justify-between px-5 py-4 max-w-7xl">
          
          {/* Logo */}
          <Link href="/" className="leading-none flex items-baseline gap-0.5">
            <span style={{ color: "var(--color-text)" }} className="text-2xl font-bold">
              Easin
            </span>
            <span
              style={{
                background: "var(--color-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-2xl font-bold"
            >
              .
            </span>
          </Link>

          {/* Desktop Pill Nav */}
          <nav
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
            className="hidden lg:flex items-center gap-2 rounded-full px-2 py-2"
          >
            {NavbarData.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={item.title}
                  href={item.link}
                  style={
                    isActive
                      ? { background: "var(--color-gradient)", color: "#fff", boxShadow: "var(--color-glow)" }
                      : { color: "var(--color-text-sec)" }
                  }
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                             transition-all duration-300 hover:text-[var(--color-primary)]"
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--color-text-sec)";
                  }}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: ThemeToggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* ThemeToggle — desktop & mobile dono te */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-sec)",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden
                         hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]
                         transition-all duration-300"
              aria-label="Open menu"
            >
              <IconMenu />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;