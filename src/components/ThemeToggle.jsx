"use client";

import { useTheme } from "@/components/context/ThemeContext";

export default function ThemeToggle() {
  const { themeKey, setTheme } = useTheme();

  const isDark = themeKey === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "red-premium" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`relative flex h-9 w-20 items-center rounded-full p-1 transition-all duration-500
        ${
          isDark
            ? "bg-gradient-to-br from-zinc-700 to-black shadow-[0_0_10px_rgba(255,255,255,.08)]"
            : "bg-gradient-to-br from-[#E83960] to-[#881534] shadow-[0_0_12px_rgba(232,57,96,.45)]"
        }`}
    >
      {/* Sun */}
      <span
        className={`absolute left-2 transition-all duration-300 ${
          isDark ? "opacity-30" : "opacity-100"
        } text-white`}
      >
        <SunIcon />
      </span>

      {/* Moon */}
      <span
        className={`absolute right-2 transition-all duration-300 ${
          isDark ? "opacity-100" : "opacity-30"
        } text-white`}
      >
        <MoonIcon />
      </span>

      {/* Knob */}
      <span
        className={`z-10 flex h-6 w-6 items-center justify-center rounded-full
          bg-white shadow-md transition-all duration-500
          ${isDark ? "translate-x-12" : "translate-x-0"}`}
      >
        {isDark ? (
          <MoonIcon className="text-zinc-900" />
        ) : (
          <SunIcon className="text-[#E83960]" />
        )}
      </span>
    </button>
  );
}

function SunIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}