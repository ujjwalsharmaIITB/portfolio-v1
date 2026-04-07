import React from "react";
import { educations } from "../constants";

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <span className="font-dm-mono text-xs text-purple-400 tracking-widest uppercase">Background</span>
      </div>
      <h2 className="reveal font-syne font-black text-4xl sm:text-5xl text-white mb-14">Education</h2>

      <div className="space-y-6">
        {educations.map((edu, i) => (
          <div
            key={edu.institute}
            className={`reveal reveal-delay-${i + 1} card-glass rounded-2xl p-6 sm:p-8 grid sm:grid-cols-[auto_1fr] gap-6`}
          >
            {/* Logo */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-syne font-black text-white text-sm flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${edu.logoColor}cc, ${edu.logoColor}44)`, border: `1px solid ${edu.logoColor}40` }}
            >
              {edu.logoInitials}
            </div>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-syne font-bold text-white text-lg leading-tight">{edu.degree}</h3>
                  <p className="text-violet-400 font-medium text-sm mt-0.5">{edu.institute}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-dm-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <p className="text-xs text-gray-600 mt-1 font-dm-mono">{edu.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {edu.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-400 font-dm-sans leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
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
