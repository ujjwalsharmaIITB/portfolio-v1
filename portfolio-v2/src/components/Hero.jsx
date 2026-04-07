import React, { useEffect, useState, useRef } from "react";

// Change
const ROLES = [
  // "NLP Researcher",
  "Multilingual NLP",
  "Machine Translation",
  "Grammatical Error Correction",
  "Low-Resource Language AI",
  "Large Language Models",
];



function StarField() {
  const starsRef = useRef(null);
  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 120; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 0.5;
      star.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        border-radius:50%;background:white;
        top:${Math.random() * 100}%;left:${Math.random() * 100}%;
        opacity:${Math.random() * 0.7 + 0.1};
        animation: blink ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 4}s infinite;
      `;
      container.appendChild(star);
    }
  }, []);
  return <div ref={starsRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 1600);
      return () => clearTimeout(t);
    }
    const role = ROLES[roleIndex];
    if (!deleting) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      <StarField />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-cyan-500/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-pink-500/8 blur-2xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8 animate-fade-in">
          <span className="glow-dot" />
          <span className="text-xs font-dm-mono text-violet-300 tracking-widest uppercase">
            Research Master's Student · IIT Bombay
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-syne font-black text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", letterSpacing: "-2px" }}
        >
          Ujjwal
          <br />
          <span className="gradient-text">Sharma</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-8" style={{ animationDelay: "0.3s" }}>
          <p className="font-dm-mono text-lg sm:text-xl text-gray-400">
            I Work on{" "}
            <span className="text-violet-300">{displayed}</span>
            <span className="animate-blink text-violet-400">|</span>
          </p>
        </div>

        {/* Bio snippet */}
        <p
          className="text-gray-400 font-dm-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Change */}
          Building inclusive language AI for low-resource languages: from{" "}
          <span className="text-white font-medium">synthetic data generation</span> to{" "}
          <span className="text-white font-medium">multilingual modelling</span> and{" "}
          <span className="text-white font-medium">(diffusion) language models</span>.
        </p>

        {/* CTA row */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#publication"
            className="px-7 py-3 rounded-xl font-syne font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-500/30 hover:scale-[1.03]"
          >
            View Publications
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl font-syne font-semibold text-sm text-gray-300 border border-gray-700 hover:border-purple-500/50 hover:text-white hover:bg-purple-500/5 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="https://aclanthology.org/people/ujjwal-sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl font-syne font-semibold text-sm text-cyan-400 border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all duration-300"
          >
            ACL Anthology ↗
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs font-dm-mono text-gray-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
