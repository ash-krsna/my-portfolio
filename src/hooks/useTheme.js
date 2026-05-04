import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "akash-theme";

export function useTheme() {
  const systemTheme = useMemo(
    () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    []
  );
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEY) || systemTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (event) => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setTheme(event.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark"))
  };
}
