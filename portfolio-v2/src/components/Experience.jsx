import React from "react";
import { experiences } from "../constants";

export default function Experience() {
  return (
    <section id="experience" data-hue="teal" className="py-20 sm:py-28 w-[90%] sm:w-4/5 mx-auto">
      <div className="reveal flex items-center justify-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Career</span>
      </div>
      <h2 className="reveal font-syne text-center font-extrabold text-3xl sm:text-5xl mb-10 sm:mb-14" style={{ color: "var(--text-primary)" }}>Experience</h2>

      <div className="relative">
        {/* Vertical timeline line — desktop only, runs down the centre behind the logo badges */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden sm:block"
          style={{ background: "linear-gradient(180deg, var(--accent-purple) 0%, transparent 100%)", opacity: 0.3 }} />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={exp.company} className={`reveal reveal-delay-${i + 1} relative sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"}`}>
              {/* Logo badge — sits on the centre line, alternating cards left and right */}
              <div className={`hidden sm:flex absolute top-5 ${i % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} w-14 h-14 rounded-2xl items-center justify-center font-syne font-bold text-white text-[11px] flex-shrink-0`}
                style={{ background: `linear-gradient(135deg, ${exp.logoColor}cc, ${exp.logoColor}55)`, border: `1px solid ${exp.logoColor}44` }}>
                {exp.logo ? <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-2.5 rounded-2xl bg-white" /> : exp.logoInitials}
              </div>

              <div className="card-glass rounded-2xl p-5 sm:p-8">
                {/* On mobile: logo + title in one row */}
                <div className={`flex items-start gap-3 sm:block ${exp.points.length ? "mb-4" : ""}`}>
                  <div className="sm:hidden w-11 h-11 rounded-xl flex items-center justify-center font-syne font-bold text-white text-[10px] flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${exp.logoColor}cc, ${exp.logoColor}55)` }}>
                    {exp.logo ? <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-2 rounded-xl bg-white" /> : exp.logoInitials}
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

                {exp.points.length > 0 && <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm font-dm-sans leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-cyan)" }} />
                      {pt}
                    </li>
                  ))}
                </ul>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
