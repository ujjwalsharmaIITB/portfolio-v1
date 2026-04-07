import React from "react";
import { experiences } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Career</span>
      </div>
      <h2 className="reveal font-syne font-extrabold text-3xl sm:text-5xl mb-10 sm:mb-14" style={{ color: "var(--text-primary)" }}>Experience</h2>

      <div className="relative">
        {/* Vertical timeline line — desktop only, sits behind the logo badges */}
        <div className="absolute left-[1.75rem] top-0 bottom-0 w-px hidden sm:block"
          style={{ background: "linear-gradient(180deg, var(--accent-purple) 0%, transparent 100%)", opacity: 0.3 }} />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={exp.company} className={`reveal reveal-delay-${i + 1} relative sm:pl-20`}>
              {/* Logo badge — floats left of card on desktop */}
              <div className="hidden sm:flex absolute left-0 top-5 w-14 h-14 rounded-2xl items-center justify-center font-syne font-bold text-white text-[11px] flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${exp.logoColor}cc, ${exp.logoColor}55)`, border: `1px solid ${exp.logoColor}44` }}>
                {exp.logoInitials}
              </div>

              <div className="card-glass rounded-2xl p-5 sm:p-8">
                {/* On mobile: logo + title in one row */}
                <div className="flex items-start gap-3 sm:block mb-4">
                  <div className="sm:hidden w-11 h-11 rounded-xl flex items-center justify-center font-syne font-bold text-white text-[10px] flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${exp.logoColor}cc, ${exp.logoColor}55)` }}>
                    {exp.logoInitials}
                  </div>
                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 w-full">
                    <div>
                      <h3 className="font-syne font-bold text-base sm:text-lg" style={{ color: "var(--text-primary)" }}>{exp.title}</h3>
                      <p className="font-medium text-sm mt-0.5" style={{ color: "var(--accent-violet)" }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-dm-mono px-3 py-1 rounded-full flex-shrink-0"
                      style={{ color: "var(--text-muted)", background: "var(--tag-bg)" }}>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm font-dm-sans leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-cyan)" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
