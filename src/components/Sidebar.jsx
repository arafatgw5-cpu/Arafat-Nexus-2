"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  </svg>
);

const IconHome = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUser = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 21a8 8 0 0 0-16 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconWork = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
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
    <path d="M3 11h18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconFile = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
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
  </svg>
);

const bottomMenu = [
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
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
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
        className={`fixed right-0 top-0 z-50 h-screen w-[82%] max-w-[340px] overflow-hidden border-l border-white/10 bg-bodyColor shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex h-full flex-col pb-[76px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Link href="/" onClick={onClose} className="leading-none">
              <h2 className="text-2xl font-bold">
                Easin<span className="text-hoverColor">.</span>
              </h2>
            </Link>

            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:bg-hoverColor hover:text-black"
              aria-label="Close menu"
            >
              <IconClose />
            </button>
          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <div className="flex flex-col gap-3">
              {NavbarData.map((item) => {
                const isActive = pathname === item.link;

                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={onClose}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-hoverColor text-black shadow-lg"
                        : "bg-lightSky/10 hover:bg-hoverColor hover:text-black"
                    }`}
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
                className="rounded-xl bg-hoverColor px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-black shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Hire Me
              </Link>

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
              </div>
            </div>
          </nav>

          {/* Bottom Icon Bar - Same Screenshot Style */}
          <div className="absolute bottom-4 left-1/2 w-[86%] -translate-x-1/2">
            <div className="flex h-[38px] items-center justify-between rounded-full bg-[#d9d9d9] px-[6px] shadow-xl">
              {bottomMenu.map((item) => {
                const isActive = pathname === item.link;

                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={onClose}
                    aria-label={item.title}
                    className={`flex h-[28px] w-[28px] items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "text-[#555] hover:bg-black hover:text-white"
                    }`}
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