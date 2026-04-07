import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #4c1d95, #1e3a5f)"
          : "linear-gradient(135deg, #ddd6fe, #bae6fd)",
        border: isDark ? "1px solid rgba(139,92,246,0.3)" : "1px solid rgba(109,40,217,0.2)",
      }}
    >
      {/* Track icons */}
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-[10px]">
        {isDark ? "🌙" : ""}
      </span>
      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px]">
        {!isDark ? "☀️" : ""}
      </span>

      {/* Thumb */}
      <span
        className="absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-xs"
        style={{
          left: isDark ? "calc(100% - 1.625rem)" : "0.125rem",
          background: isDark ? "#7c3aed" : "#ffffff",
          boxShadow: isDark
            ? "0 0 8px rgba(124,58,237,0.6)"
            : "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
