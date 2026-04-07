import React, { useState } from "react";
import { publications } from "../constants";

const PublicationCard = ({ pub, index }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`reveal reveal-delay-${index + 1} card-glass rounded-2xl p-5 sm:p-8`}>
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-dm-mono text-xs font-bold px-3 py-1 rounded-lg"
            style={{ background: `${pub.venueColor}18`, color: pub.venueColor, border: `1px solid ${pub.venueColor}35` }}>
            {pub.venue}
          </span>
          <span className="font-dm-mono text-xs" style={{ color: "var(--text-muted)" }}>{pub.place} · {pub.date}</span>
        </div>
        {/* Links */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-dm-mono px-3 py-1.5 rounded-lg transition-all"
            style={{ color: "var(--accent-violet)", border: "1px solid var(--border-subtle)" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent-violet)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-subtle)"}>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Paper
          </a>
          <a href={pub.slidesUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-dm-mono px-3 py-1.5 rounded-lg transition-all"
            style={{ color: "var(--accent-cyan)", border: "1px solid var(--border-subtle)" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent-cyan)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-subtle)"}>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            Slides
          </a>
        </div>
      </div>

      <h3 className="font-syne font-bold text-base sm:text-xl leading-snug mb-2" style={{ color: "var(--text-primary)" }}>{pub.title}</h3>
      <p className="font-dm-mono text-xs mb-4" style={{ color: "var(--text-muted)" }}>{pub.authors}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {pub.tags.map(tag => (
          <span key={tag} className="tech-badge text-xs font-dm-mono px-2.5 py-1 rounded-lg" style={{ color: "var(--tag-text)" }}>{tag}</span>
        ))}
      </div>

      <button onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-xs font-dm-mono transition-colors"
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--text-secondary)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
        <svg className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {expanded ? "Hide abstract" : "Show abstract"}
      </button>
      {expanded && (
        <p className="text-sm font-dm-sans leading-relaxed pl-4 mt-3"
          style={{ color: "var(--text-secondary)", borderLeft: "2px solid var(--border-subtle)" }}>
          {pub.abstract}
        </p>
      )}
    </div>
  );
};

export default function Publication() {
  return (
    <section id="publication" className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Research Output</span>
      </div>
      <h2 className="reveal font-syne font-extrabold text-3xl sm:text-5xl mb-2" style={{ color: "var(--text-primary)" }}>Publications</h2>
      <p className="reveal font-dm-sans text-sm mb-10 sm:mb-14" style={{ color: "var(--text-muted)" }}>First-author publications at top-tier NLP venues.</p>
      <div className="space-y-5 sm:space-y-6">
        {publications.map((pub, i) => <PublicationCard key={pub.title} pub={pub} index={i} />)}
      </div>
    </section>
  );
}
