import React, { useEffect, useState, useRef } from "react";

const ROLES = [
  "Grammatical Error Correction",
  "Machine Translation",
  "Multilingual NLP",
  "Diffusion Language Models",
  "Low-Resource Language AI",
];

function StarField() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    for (let i = 0; i < 90; i++) {
      const s = document.createElement("div");
      const sz = Math.random() * 1.8 + 0.4;
      s.style.cssText = `position:absolute;width:${sz}px;height:${sz}px;border-radius:50%;
        background:white;top:${Math.random()*100}%;left:${Math.random()*100}%;
        opacity:${Math.random()*0.5+0.1};
        animation:blink ${2+Math.random()*5}s ease-in-out ${Math.random()*4}s infinite;`;
      c.appendChild(s);
    }
  }, []);
  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
      return () => clearTimeout(t);
    }
    const role = ROLES[roleIndex];
    if (!deleting) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else { setPaused(true); }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else { setDeleting(false); setRoleIndex(i => (i + 1) % ROLES.length); }
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Stars only on dark */}
      <StarField />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-float opacity-60"
        style={{ background: "var(--mesh-1)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full blur-3xl pointer-events-none animate-float opacity-50"
        style={{ background: "var(--mesh-2)", animationDelay: "1.5s" }} />

      {/* Subtle grid */}
      
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(var(--border-subtle) 1px,transparent 1px),linear-gradient(90deg,var(--border-subtle) 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-10 text-center w-full">
        {/* Badge */}
        

        {/* Name — capped so it never wraps weirdly on mobile */}
        <h1 className="font-syne font-extrabold leading-[1.07] mb-5 animate-fade-up"
          style={{ fontSize: "clamp(2.6rem, 10vw, 5.5rem)", animationDelay: "0.1s", color: "var(--text-primary)" }}>
          UJJWAL<br />
          <span className="gradient-text">SHARMA</span>
        </h1>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 animate-fade-in"
          style={{ border: "1px solid var(--border-subtle)", background: "var(--tag-bg)" }}>
          <span className="glow-dot" />
          <span className="font-dm-mono text-[11px] sm:text-xs tracking-widest" style={{ color: "var(--tag-text)" }}>
            Research Master's Student · IIT Bombay
          </span>
        </div>

        {/* Typewriter */}
        <div className="flex items-center justify-center mb-6 h-8 sm:h-10">
          <p className="font-dm-mono text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
            I work on{" "}
            <span style={{ color: "var(--accent-violet)" }}>{displayed}</span>
            <span className="animate-blink" style={{ color: "var(--accent-violet)" }}>|</span>
          </p>
        </div>

        {/* Bio */}
        <p className="font-dm-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up px-2"
          style={{ animationDelay: "0.35s", color: "var(--text-secondary)" }}>
          Building inclusive language AI for low-resource languages: from{" "}
          <span style={{ color: "var(--text-primary)" }} className="font-semibold">multilingual modelling</span> to{" "}
          <span style={{ color: "var(--text-primary)" }} className="font-semibold">synthetic data generation</span> and{" "}
          <span style={{ color: "var(--text-primary)" }} className="font-semibold">(diffusion) language models</span>.
        </p>

        {/* CTAs — vertical on very small, row on sm+ */}
        {/* <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 animate-fade-up px-4"
          style={{ animationDelay: "0.45s" }}>
          <a href="#publication"
            className="w-full xs:w-auto px-6 py-2.5 rounded-xl font-syne font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, var(--accent-purple), var(--accent-violet))", boxShadow: "0 4px 20px var(--glow-purple)" }}>
            View Publications
          </a>
          <a href="#contact"
            className="w-full xs:w-auto px-6 py-2.5 rounded-xl font-syne font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border-card)", background: "var(--bg-card)" }}>
            Get in Touch
          </a>
          <a href="https://aclanthology.org/search/?q=ujjwal-sharma" target="_blank" rel="noopener noreferrer"
            className="w-full xs:w-auto px-6 py-2.5 rounded-xl font-syne font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ color: "var(--accent-cyan)", border: "1px solid var(--border-card)", background: "var(--bg-card)" }}>
            ACL Anthology ↗
          </a>
        </div> */}

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 animate-fade-up px-4"
          style={{ animationDelay: "0.45s" }}>

          <a href="#publication"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-syne font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, var(--accent-purple), var(--accent-violet))", boxShadow: "0 4px 20px var(--glow-purple)" }}>
            View Publications
          </a>

          <a href="#contact"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-syne font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border-card)", background: "var(--bg-card)" }}>
            Get in Touch
          </a>

          <a href="https://aclanthology.org/people/ujjwal-sharma/" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-syne font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ color: "var(--accent-cyan)", border: "1px solid var(--border-card)", background: "var(--bg-card)" }}>
            ACL Anthology ↗
          </a>

        </div>

        {/* Scroll hint */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 animate-float">
          <span className="font-dm-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Scroll</span>
          <div className="w-px h-8 sm:h-10" style={{ background: "linear-gradient(to bottom, var(--text-muted), transparent)" }} />
        </div>
      </div>
    </section>
  );
}
