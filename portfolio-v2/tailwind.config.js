/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFDF7",
        secondary: "#6A5A47",
        tertiary: "#FFF8EC",
        card: "#FFFFFF",
        "accent-purple": "#AC4C0B",
        "accent-violet": "#AC4C0B",
        "accent-cyan": "#19659F",
        "accent-pink": "#AC2F4E",
      },
      fontFamily: {
        syne: ["Playfair Display", "Georgia", "serif"],
        "dm-sans": ["Source Sans 3", "system-ui", "sans-serif"],
        "dm-mono": ["Source Sans 3", "system-ui", "sans-serif"],
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
