import React from "react";
import { educations } from "../constants";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Background</span>
      </div>
      <h2 className="reveal font-syne font-extrabold text-3xl sm:text-5xl mb-10 sm:mb-14" style={{ color: "var(--text-primary)" }}>Education</h2>

      <div className="space-y-5">
        {educations.map((edu, i) => (
          <div key={edu.institute} className={`reveal reveal-delay-${i + 1} card-glass rounded-2xl p-5 sm:p-8 grid grid-cols-[auto_1fr] gap-5 sm:gap-6`}>
            {/* Logo — always visible, left column */}
            <div className="w-14 h-14 rounded-xl flex items-center justify-center font-syne font-bold text-white text-xs flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${edu.logoColor}cc, ${edu.logoColor}55)`, border: `1px solid ${edu.logoColor}44` }}>
              {edu.logoInitials}
            </div>

            {/* Content — right column */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 mb-3">
                <div>
                  <h3 className="font-syne font-bold text-base sm:text-lg leading-tight" style={{ color: "var(--text-primary)" }}>{edu.degree}</h3>
                  <p className="font-medium text-sm mt-0.5" style={{ color: "var(--accent-violet)" }}>{edu.institute}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block text-xs font-dm-mono px-3 py-1 rounded-full" style={{ color: "var(--text-muted)", background: "var(--tag-bg)" }}>{edu.period}</span>
                </div>
              </div>
              <ul className="space-y-1.5">
                {edu.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm font-dm-sans leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-violet)" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
