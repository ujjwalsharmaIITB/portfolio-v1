import React from "react";
import { services } from "../constants";

const IdentityCard = ({ title, subtitle, emoji, index }) => (
  <div className="reveal card-glass rounded-2xl p-5 flex flex-col items-center text-center gap-3 flex-1"
    style={{ minWidth: "140px", transitionDelay: `${index * 0.09}s` }}>
    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
      style={{ background: "var(--tag-bg)", border: "1px solid var(--border-subtle)" }}>
      {emoji}
    </div>
    <div>
      <p className="font-syne font-bold text-sm leading-snug" style={{ color: "var(--text-primary)" }}>{title}</p>
      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{subtitle}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Introduction</span>
      </div>
      <h2 className="reveal font-syne font-extrabold text-3xl sm:text-5xl mb-8" style={{ color: "var(--text-primary)" }}>Overview</h2>

      <div className="reveal reveal-delay-1 max-w-5xl space-y-4">
        <p className="font-dm-sans text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          I am a <span className="font-semibold" style={{ color: "var(--text-primary)" }}>research Master's student</span> in CSE at IIT Bombay, working at the intersection of{" "}
          <span className="font-semibold" style={{ color: "var(--accent-violet)" }}>Multilingual NLP (MNLP)</span>,{" "}
          <span className="font-semibold" style={{ color: "var(--accent-violet)" }}>Machine Translation (MT)</span>,{" "}
          <span className="font-semibold" style={{ color: "var(--accent-violet)" }}>Grammar Error Correction (GEC)</span>, and{" "}
          <span className="font-semibold" style={{ color: "var(--accent-violet)" }}>Large Language Models (LLMs)</span>.
        </p>
        <p className="font-dm-sans text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          My work addresses data scarcity in low-resource languages through synthetic data generation methods and linguistically informed models. I have contributed to large-scale{" "}
          <a href="https://www.cfilt.iitb.ac.in/mtsystem/translate" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2" style={{ color: "var(--accent-cyan)" }}>MT systems</a>{" "}
          as part of{" "}
          <a href="https://bhashini.gov.in/" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2" style={{ color: "var(--accent-cyan)" }}>Mission Bhashini</a>{" "}
          and led foundational research in low-resource Indic GEC, resulting in{" "}
          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>first-author publications</span> at EMNLP and COLING.
        </p>
      </div>

      <div className="mt-10 sm:mt-14 flex flex-wrap gap-3 sm:gap-4">
        {services.map((s, i) => <IdentityCard key={s.title} {...s} index={i} />)}
      </div>
    </section>
  );
}
