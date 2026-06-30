"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { themes, DEFAULT_THEME, THEME_STORAGE_KEY } from "@/lib/themes";

const ThemeContext = createContext(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};

function applyTheme(theme) {
  const root = document.documentElement;
  const c = theme.colors;
  root.style.setProperty("--color-bg",         c.background);
  root.style.setProperty("--color-surface",    c.surface);
  root.style.setProperty("--color-primary",    c.primary);
  root.style.setProperty("--color-secondary",  c.secondary);
  root.style.setProperty("--color-border",     c.border);
  root.style.setProperty("--color-text",       c.text);
  root.style.setProperty("--color-text-sec",   c.textSecondary);
  root.style.setProperty("--color-muted",      c.muted);
  root.style.setProperty("--color-gradient",   c.gradient);
  root.style.setProperty("--color-glow",       c.glow);
  root.style.setProperty("--color-glow-hover", c.glowHover);
}

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(DEFAULT_THEME);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const initial = saved && themes[saved] ? saved : DEFAULT_THEME;
    setThemeKey(initial);
    applyTheme(themes[initial]);
  }, []);

  const setTheme = useCallback((key) => {
    if (!themes[key]) return;
    setThemeKey(key);
    applyTheme(themes[key]);
    localStorage.setItem(THEME_STORAGE_KEY, key);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[themeKey],
        themeKey,
        setTheme,
        allThemes: Object.values(themes),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}