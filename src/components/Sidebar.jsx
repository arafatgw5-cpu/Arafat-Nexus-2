"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
import { NavbarData } from "@/constants";
import { useTheme } from "./context/ThemeContext";

const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
=======
import { useTheme } from "next-themes";
import { NavbarData } from "@/constants";

const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconMoon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
  </svg>
);

const IconHome = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
<<<<<<< HEAD
    <path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
=======
    <path
      d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
  </svg>
);

const IconUser = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
<<<<<<< HEAD
    <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
=======
    <path
      d="M20 21a8 8 0 0 0-16 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconWork = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
<<<<<<< HEAD
    <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
=======
    <path
      d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="6"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
    <path d="M3 11h18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconFile = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
<<<<<<< HEAD
    <path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 3v5h4M9 13h6M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
=======
    <path
      d="M7 3h7l4 4v14H7V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M14 3v5h4M9 13h6M9 17h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
  </svg>
);

const bottomMenu = [
<<<<<<< HEAD
  { title: "Home",     link: "/",         icon: <IconHome /> },
  { title: "Services", link: "/services", icon: <IconUser /> },
  { title: "Projects", link: "/projects", icon: <IconWork /> },
  { title: "Resume",   link: "/resume",   icon: <IconFile /> },
=======
  {
    title: "Home",
    link: "/",
    icon: <IconHome />,
  },
  {
    title: "Services",
    link: "/services",
    icon: <IconUser />,
  },
  {
    title: "Projects",
    link: "/projects",
    icon: <IconWork />,
  },
  {
    title: "Resume",
    link: "/resume",
    icon: <IconFile />,
  },
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
<<<<<<< HEAD
  const { allThemes, themeKey, setTheme } = useTheme(); 
  const [showThemes, setShowThemes] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

=======
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
<<<<<<< HEAD
        style={{
          background: "var(--color-bg)",
          borderLeft: "1px solid var(--color-border)",
        }}
        className={`fixed right-0 top-0 z-50 h-screen w-[82%] max-w-[340px] overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
=======
        className={`fixed right-0 top-0 z-50 h-screen w-[82%] max-w-[340px] overflow-hidden border-l border-white/10 bg-bodyColor shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex h-full flex-col pb-[76px]">
<<<<<<< HEAD

          {/* Header */}
          <div
            style={{ borderBottom: "1px solid var(--color-border)" }}
            className="flex items-center justify-between px-5 py-4"
          >
            <Link href="/" onClick={onClose} className="leading-none flex items-baseline gap-0.5">
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
=======
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Link href="/" onClick={onClose} className="leading-none">
              <h2 className="text-2xl font-bold">
                Easin<span className="text-hoverColor">.</span>
              </h2>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
            </Link>

            <button
              onClick={onClose}
<<<<<<< HEAD
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-sec)",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full
                         hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]
                         transition-all duration-300"
=======
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:bg-hoverColor hover:text-black"
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
              aria-label="Close menu"
            >
              <IconClose />
            </button>
          </div>

<<<<<<< HEAD
          {/* Nav Links */}
=======
          {/* Menu */}
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <div className="flex flex-col gap-3">
              {NavbarData.map((item) => {
                const isActive = pathname === item.link;
<<<<<<< HEAD
=======

>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={onClose}
<<<<<<< HEAD
                    style={
                      isActive
                        ? { background: "var(--color-gradient)", color: "#fff", boxShadow: "var(--color-glow)" }
                        : { background: "rgba(255,255,255,0.05)", color: "var(--color-text-sec)", border: "1px solid var(--color-border)" }
                    }
                    className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide
                               transition-all duration-300 hover:shadow-[var(--color-glow)]"
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "var(--color-gradient)";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.borderColor = "transparent";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        e.currentTarget.style.color = "var(--color-text-sec)";
                        e.currentTarget.style.borderColor = "var(--color-border)";
                      }
                    }}
=======
                    className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-hoverColor text-black shadow-lg"
                        : "bg-lightSky/10 hover:bg-hoverColor hover:text-black"
                    }`}
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/resume"
                onClick={onClose}
<<<<<<< HEAD
                style={{ background: "var(--color-gradient)", boxShadow: "var(--color-glow)" }}
                className="rounded-xl px-4 py-3 text-center text-sm font-bold uppercase
                           tracking-wide text-white transition-all duration-300
                           hover:shadow-[var(--color-glow-hover)]"
=======
                className="rounded-xl bg-hoverColor px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-black shadow-lg transition-all duration-300 hover:scale-[1.02]"
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
              >
                Hire Me
              </Link>

<<<<<<< HEAD
              {/* Theme Picker */}
              <button
                onClick={() => setShowThemes((v) => !v)}
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-sec)",
                  background: "rgba(255,255,255,0.04)",
                }}
                className="flex items-center justify-between gap-2 rounded-xl px-4 py-3
                           text-sm font-semibold uppercase tracking-wide transition-all duration-300
                           hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <span>Theme</span>
                {allThemes && (
                  <span
                    style={{
                      background: allThemes.find((t) => t.key === themeKey)?.preview,
                      boxShadow: `0 0 8px ${allThemes.find((t) => t.key === themeKey)?.preview}80`,
                    }}
                    className="w-4 h-4 rounded-full"
                  />
                )}
              </button>

              {/* Theme Options */}
              {showThemes && allThemes && (
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                  className="rounded-xl overflow-hidden"
                >
                  {allThemes.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => { setTheme(t.key); setShowThemes(false); }}
                      style={{
                        color: themeKey === t.key ? "var(--color-primary)" : "var(--color-text-sec)",
                        background: themeKey === t.key ? "rgba(255,255,255,0.06)" : "transparent",
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium
                                 hover:bg-white/5 transition-colors duration-200 text-left"
                    >
                      <span
                        style={{ background: t.preview, boxShadow: `0 0 6px ${t.preview}60` }}
                        className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      />
                      {t.label}
                      {themeKey === t.key && (
                        <span style={{ color: "var(--color-primary)" }} className="ml-auto text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social */}
            <div
              style={{ borderTop: "1px solid var(--color-border)" }}
              className="mt-8 pt-5"
            >
              <p style={{ color: "var(--color-muted)" }} className="mb-3 text-xs font-medium uppercase tracking-widest">
                Follow Me
              </p>
              <div className="flex items-center gap-3">
                {[
                  { label: "G",  href: "https://github.com/" },
                  { label: "In", href: "https://linkedin.com/" },
                  { label: "Fb", href: "https://facebook.com/" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    style={{ border: "1px solid var(--color-border)", color: "var(--color-text-sec)" }}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold
                               transition-all duration-300 hover:border-[var(--color-primary)]
                               hover:text-[var(--color-primary)] hover:shadow-[var(--color-glow)]"
                  >
                    {label}
                  </Link>
                ))}
=======
              <button
                onClick={handleThemeToggle}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-lightSky/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-hoverColor hover:text-black"
                aria-label="Toggle theme"
              >
                {!mounted ? (
                  <span>Theme</span>
                ) : theme === "dark" ? (
                  <>
                    <IconSun />
                    Light Mode
                  </>
                ) : (
                  <>
                    <IconMoon />
                    Dark Mode
                  </>
                )}
              </button>
            </div>

            {/* Social */}
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
                Follow Me
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com/"
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-lightSky/10 text-sm font-bold transition-all duration-300 hover:bg-hoverColor hover:text-black"
                >
                  G
                </Link>

                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-lightSky/10 text-sm font-bold transition-all duration-300 hover:bg-hoverColor hover:text-black"
                >
                  In
                </Link>

                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-lightSky/10 text-sm font-bold transition-all duration-300 hover:bg-hoverColor hover:text-black"
                >
                  Fb
                </Link>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
              </div>
            </div>
          </nav>

<<<<<<< HEAD
          {/* Bottom Icon Bar */}
          <div className="absolute bottom-4 left-1/2 w-[86%] -translate-x-1/2">
            <div
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              className="flex h-[46px] items-center justify-between rounded-full px-[6px] shadow-xl"
            >
              {bottomMenu.map((item) => {
                const isActive = pathname === item.link;
=======
          {/* Bottom Icon Bar - Same Screenshot Style */}
          <div className="absolute bottom-4 left-1/2 w-[86%] -translate-x-1/2">
            <div className="flex h-[38px] items-center justify-between rounded-full bg-[#d9d9d9] px-[6px] shadow-xl">
              {bottomMenu.map((item) => {
                const isActive = pathname === item.link;

>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={onClose}
                    aria-label={item.title}
<<<<<<< HEAD
                    style={
                      isActive
                        ? { background: "var(--color-gradient)", color: "#fff", boxShadow: "var(--color-glow)" }
                        : { color: "var(--color-muted)" }
                    }
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-full
                               transition-all duration-300 hover:text-[var(--color-primary)]"
=======
                    className={`flex h-[28px] w-[28px] items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "text-[#555] hover:bg-black hover:text-white"
                    }`}
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;