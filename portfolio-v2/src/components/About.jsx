import React from "react";
import { services } from "../constants";

const IdentityCard = ({ title, subtitle, emoji, index }) => (
  <div
    className="reveal card-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3 flex-1 min-w-[180px]"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center text-2xl">
      {emoji}
    </div>
    <div>
      <p className="font-syne font-bold text-white text-sm leading-snug">{title}</p>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <span className="font-dm-mono text-xs text-purple-400 tracking-widest uppercase">Introduction</span>
      </div>

      <h2 className="reveal font-syne font-black text-4xl sm:text-5xl text-white mb-10">
        Overview
      </h2>

      <div className="reveal reveal-delay-1 max-w-6xl">
        {/* Change */}
        <p className="text-gray-300 font-dm-sans text-base sm:text-lg leading-relaxed">
          I am a{" "}
          <span className="text-white font-semibold">research Master's student</span> in the Department of Computer Science and Engineering at IIT Bombay, working at the intersection of{" "}
          <span className="text-violet-300 font-semibold">Multilingual NLP (MNLP)</span>,{" "}
          <span className="text-violet-300 font-semibold">Machine Translation (MT)</span>,{" "}
          <span className="text-violet-300 font-semibold">Grammar Error Correction (GEC)</span>, and{" "}
          <span className="text-violet-300 font-semibold">Large Language Models (LLMs)</span>.
        </p>
        <p className="text-gray-400 font-dm-sans text-base sm:text-lg leading-relaxed mt-4">
          My work addresses the core challenge of data scarcity in low-resource languages, where I design synthetic data generation methods, multilingual training strategies, and linguistically informed models to improve robustness and cross-lingual generalization. I have contributed to large-scale, real-world{" "}
          <a href="https://www.cfilt.iitb.ac.in/mtsystem/translate" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors">MT systems</a>{" "}
          as part of{" "}
          <a href="https://bhashini.gov.in/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors">Mission Bhashini</a>,
          a Government of India initiative, collaborating across multiple institutions to build and deploy{" "}
          <a href="https://github.com/cfiltnlp/Bhashini-IITB" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors">domain-adapted MT models</a>{" "}
          for diverse Indian languages. Alongside deployment-driven research, I have led foundational research in low-resource Indic GEC, resulting in{" "}
          <span className="text-white font-semibold">first-author publications</span> at top-tier NLP conferences.
        </p>
      </div>

      {/* Identity cards */}
      <div className="mt-14 flex flex-wrap gap-4">
        {services.map((s, i) => (
          <IdentityCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}
