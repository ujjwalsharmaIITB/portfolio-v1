import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none "
      style={{
        background: isDark
          ? "linear-gradient(135deg, #33291B, #1B170F)"
          : "linear-gradient(135deg, #FFDE87, #FFC489)",
        border: isDark ? "1px solid #54452C" : "1px solid #E7CCA4",
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
          background: isDark ? "#E08536" : "#ffffff",
          boxShadow: isDark
            ? "0 0 8px rgba(224,133,54,0.6)"
            : "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
