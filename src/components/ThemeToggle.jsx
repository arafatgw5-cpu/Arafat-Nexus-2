"use client";
import { useState, useRef, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { useTheme } from "@/components/context/ThemeContext";

export default function ThemeToggle() {
  const { themeKey, setTheme, allThemes } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        style={{
          background: open ? "var(--color-surface)" : "transparent",
          border: "1px solid var(--color-border)",
          color: open ? "var(--color-primary)" : "var(--color-text-sec)",
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-[10px] text-[13px] font-medium
                   hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]
                   transition-all duration-300 cursor-pointer"
      >
        <Palette size={16} />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--color-glow)",
          }}
          className="absolute right-0 top-full mt-2 w-52 rounded-[14px] overflow-hidden z-[100] py-2"
        >
          <p
            style={{ color: "var(--color-muted)" }}
            className="text-[11px] uppercase tracking-widest px-4 pt-1 pb-2 font-medium"
          >
            Select Theme
          </p>

          {allThemes.map((t) => (
            <button
              key={t.key}
              onClick={() => { setTheme(t.key); setOpen(false); }}
              style={{
                background: themeKey === t.key ? "rgba(255,255,255,0.05)" : "transparent",
                color: themeKey === t.key ? "var(--color-primary)" : "var(--color-text-sec)",
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium
                         hover:bg-white/5 transition-colors duration-200 text-left cursor-pointer"
            >
              {/* Color swatch */}
              <span
                style={{ background: t.preview, boxShadow: `0 0 8px ${t.preview}60` }}
                className="w-4 h-4 rounded-full flex-shrink-0"
              />
              {t.label}
              {themeKey === t.key && (
                <Check size={14} className="ml-auto" style={{ color: "var(--color-primary)" }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}