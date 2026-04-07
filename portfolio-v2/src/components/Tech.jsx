import React from "react";
import { technologies } from "../constants";

export default function Tech() {
  const categories = [...new Set(technologies.map(t => t.category))];
  return (
    <section id="tech" className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Stack</span>
      </div>
      <h2 className="reveal font-syne font-extrabold text-3xl sm:text-5xl mb-3" style={{ color: "var(--text-primary)" }}>Technologies</h2>
      <p className="reveal font-dm-sans text-sm mb-10 sm:mb-14" style={{ color: "var(--text-muted)" }}>Tools and technologies I work with regularly.</p>

      <div className="space-y-8 sm:space-y-10">
        {categories.map((cat, ci) => (
          <div key={cat} className={`reveal reveal-delay-${(ci % 4) + 1}`}>
            <p className="font-dm-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>{cat}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
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
