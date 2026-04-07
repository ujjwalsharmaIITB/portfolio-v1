import React from "react";
import { technologies } from "../constants";

export default function Tech() {
  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section id="tech" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <span className="font-dm-mono text-xs text-purple-400 tracking-widest uppercase">Stack</span>
      </div>
      <h2 className="reveal font-syne font-black text-4xl sm:text-5xl text-white mb-4">Technologies</h2>
      <p className="reveal text-gray-500 font-dm-sans text-sm mb-14">
        Tools and technologies I work with regularly.
      </p>

      <div className="space-y-10">
        {categories.map((cat, ci) => (
          <div key={cat} className={`reveal reveal-delay-${(ci % 4) + 1}`}>
            <p className="font-dm-mono text-xs text-gray-600 tracking-widest uppercase mb-4">{cat}</p>
            <div className="flex flex-wrap gap-3">
              {technologies
                .filter((t) => t.category === cat)
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-badge flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}80` }}
                    />
                    <span className="font-dm-mono text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
