import React, { useState } from "react";
import { publications } from "../constants";

const PublicationCard = ({ pub, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`reveal reveal-delay-${index + 1} card-glass rounded-2xl p-6 sm:p-8`}>
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span
            className="font-dm-mono text-xs font-bold px-3 py-1.5 rounded-lg"
            style={{
              background: `${pub.venueColor}20`,
              color: pub.venueColor,
              border: `1px solid ${pub.venueColor}40`,
            }}
          >
            {pub.venue}
          </span>
          <span className="font-dm-mono text-xs text-gray-600">{pub.place} · {pub.date}</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          <a
            href={pub.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-dm-mono text-violet-400 hover:text-white border border-violet-500/30 hover:border-violet-400 px-3 py-1.5 rounded-lg transition-all"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Paper
          </a>
          <a
            href={pub.slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-dm-mono text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-400 px-3 py-1.5 rounded-lg transition-all"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            Slides
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-syne font-bold text-white text-lg sm:text-xl leading-snug mb-2">
        {pub.title}
      </h3>
      <p className="font-dm-mono text-xs text-gray-500 mb-4">{pub.authors}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {pub.tags.map((tag) => (
          <span key={tag} className="tech-badge text-xs font-dm-mono text-violet-300 px-2.5 py-1 rounded-lg">
            {tag}
          </span>
        ))}
      </div>

      {/* Abstract */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-dm-mono text-gray-500 hover:text-gray-300 transition-colors mb-2 flex items-center gap-1.5"
        >
          <svg
            className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {expanded ? "Hide abstract" : "Show abstract"}
        </button>

        {expanded && (
          <p className="text-sm text-gray-400 font-dm-sans leading-relaxed border-l-2 border-purple-700/50 pl-4 mt-3">
            {pub.abstract}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Publication() {
  return (
    <section id="publication" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <span className="font-dm-mono text-xs text-purple-400 tracking-widest uppercase">Research Output</span>
      </div>
      <h2 className="reveal font-syne font-black text-4xl sm:text-5xl text-white mb-3">Publications</h2>
      <p className="reveal text-gray-500 font-dm-sans text-sm mb-14">
        First-author publications at top-tier NLP venues.
      </p>

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <PublicationCard key={pub.title} pub={pub} index={i} />
        ))}
      </div>
    </section>
  );
}
