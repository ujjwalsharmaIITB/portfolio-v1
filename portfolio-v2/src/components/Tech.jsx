import React, { useState } from "react";
import { technologies } from "../constants";

export default function Tech() {
  const [open, setOpen] = useState(false);
  const categories = [...new Set(technologies.map(t => t.category))];
  return (
    <section id="tech" data-hue="berry" className="py-20 sm:py-28 w-[90%] sm:w-4/5 mx-auto">
      <div className="reveal flex items-center justify-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Stack</span>
      </div>
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="tech-list"
        className="reveal w-full flex items-center justify-center gap-4 text-center mb-3">
        <span aria-hidden="true" className="flex-shrink-0 w-9 h-9" />
        <h2 className="font-syne font-extrabold text-3xl sm:text-5xl" style={{ color: "var(--text-primary)" }}>Technologies</h2>
        <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "var(--tag-bg)", border: "1px solid var(--border-subtle)", color: "var(--accent-violet)" }}>
          <svg className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <p className="reveal font-dm-sans text-sm text-center" style={{ color: "var(--text-muted)" }}>Tools and technologies I work with regularly.</p>

      <div id="tech-list" hidden={!open} className="space-y-8 sm:space-y-10 mt-10 sm:mt-14 text-center">
        {categories.map((cat, ci) => (
          <div key={cat}>
            <p className="font-dm-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>{cat}</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {technologies.filter(t => t.category === cat).map(tech => (
                <div key={tech.name} className="tech-badge flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl cursor-default">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tech.color, boxShadow: `0 0 5px ${tech.color}80` }} />
                  <span className="font-dm-mono text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
