/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050815",
        secondary: "#9ca3af",
        tertiary: "#0f0c29",
        card: "#1a1640",
        "accent-purple": "#7c3aed",
        "accent-violet": "#8b5cf6",
        "accent-cyan": "#06b6d4",
        "accent-pink": "#ec4899",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.08) 0%, transparent 50%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
