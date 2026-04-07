import React from "react";
import { experiences } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <span className="font-dm-mono text-xs text-purple-400 tracking-widest uppercase">Career</span>
      </div>
      <h2 className="reveal font-syne font-black text-4xl sm:text-5xl text-white mb-14">Experience</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[1.75rem] top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-purple-600/20 to-transparent hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`reveal reveal-delay-${i + 1} sm:pl-16 relative`}
            >
              {/* Timeline dot */}
              <div
                className="hidden sm:flex absolute left-0 top-6 w-14 h-14 rounded-2xl items-center justify-center font-syne font-black text-white text-xs flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${exp.logoColor}cc, ${exp.logoColor}44)`,
                  border: `1px solid ${exp.logoColor}40`,
                }}
              >
                {exp.logoInitials}
              </div>

              <div className="card-glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-syne font-bold text-white text-lg">{exp.title}</h3>
                    <p className="text-violet-400 font-medium text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs font-dm-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-400 font-dm-sans leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
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
