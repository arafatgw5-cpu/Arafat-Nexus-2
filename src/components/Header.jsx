"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Container from "./Container";
import { NavbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
<<<<<<< HEAD
import ThemeToggle from "./ThemeToggle";
=======
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

<<<<<<< HEAD
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
=======
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="border-b border-b-hoverColor/10 sticky top-0 z-50 bg-bodyColor">
      <Container className="flex items-center justify-between py-5">
        <Logo title="Arafat" subtitle="." />
        <div className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.link}
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                pathname === item?.link && "text-hoverColor"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.link
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}
          <Link
            href={"/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
          >
            Hire me
          </Link>
        </div>
<<<<<<< HEAD

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

=======
        <button
          className="inline-flex md:hidden relative"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Menu className="hover:text-hoverColor hoverEffect cursor-pointer" />
        </button>
      </Container>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
