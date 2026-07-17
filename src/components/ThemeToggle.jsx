"use client";
import { useTheme } from "@/components/context/ThemeContext";

export default function ThemeToggle() {
  const { themeKey, setTheme } = useTheme();

  const isDark = themeKey === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "red-premium" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      aria-pressed={!isDark}
      style={{
        background: isDark
          ? "linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #E83960 0%, #881534 100%)",
        boxShadow: isDark
          ? "inset 0 1px 2px rgba(0,0,0,0.4), 0 0 7px rgba(255,255,255,0.08)"
          : "inset 0 1px 2px rgba(0,0,0,0.25), 0 0 10px rgba(232,57,96,0.45)",
      }}
      className="relative flex items-center w-[79px] h-[31px] rounded-full
                 px-[4px] cursor-pointer transition-all duration-500 ease-in-out"
    >
      {/* Left icon (Sun - light/red) */}
      <span
        style={{ color: "#FFFFFF", opacity: isDark ? 0.35 : 0.95 }}
        className="absolute left-2 transition-opacity duration-500 z-0"
      >
        <SunIcon />
      </span>

      {/* Right icon (Moon - dark) */}
      <span
        style={{ color: "#FFFFFF", opacity: isDark ? 0.95 : 0.35 }}
        className="absolute right-2 transition-opacity duration-500 z-0"
      >
        <MoonIcon />
      </span>

      {/* Sliding knob with icon inside */}
      <span
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #ffffff 0%, #dfe3ea 60%, #c7ccd6 100%)",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.8)",
          transform: isDark ? "translateX(48px)" : "translateX(0px)",
        }}
        className="flex items-center justify-center w-[26px] h-[26px] rounded-full
                   transition-transform duration-500 ease-in-out z-10"
      >
        <span
          style={{ color: isDark ? "#1a1a1a" : "#E83960" }}
          className="transition-colors duration-500"
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
    </button>
  );
}

/* --- Icons --- */

function SunIcon() {
  return (
    <svg
      width="12"
      height="12"
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

function MoonIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
