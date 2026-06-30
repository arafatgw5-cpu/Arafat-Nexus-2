"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Container from "./Container";
import { NavbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header
      style={{
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}
      className="sticky top-0 z-50"
    >
      <Container className="flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 leading-none">
          <span
            style={{ color: "var(--color-text)" }}
            className="text-2xl font-bold"
          >
            Arafat
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarData?.map((item) => {
            const isActive = pathname === item?.link;
            return (
              <Link
                key={item?.title}
                href={item?.link}
                style={{
                  color: isActive ? "var(--color-primary)" : "var(--color-text-sec)",
                }}
                className="relative group overflow-x-hidden transition-colors duration-300 hover:text-[var(--color-primary)]"
              >
                {item?.title}
                <span
                  style={{ background: "var(--color-gradient)" }}
                  className={`w-full h-px inline-block absolute left-0 bottom-0 transition-transform duration-300 group-hover:translate-x-0 ${
                    isActive ? "translate-x-0" : "-translate-x-[105%]"
                  }`}
                />
              </Link>
            );
          })}

          <ThemeToggle />

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-primary)",
            }}
            className="text-sm px-4 py-2 rounded-md transition-all duration-300
                       hover:shadow-[var(--color-glow-hover)]"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-gradient)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-primary)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            Hire me
          </Link>
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            style={{ color: "var(--color-text-sec)" }}
            className="inline-flex relative hover:text-[var(--color-primary)] transition-colors duration-300"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </Container>

      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;