import React from "react";
import { blogLinks } from "../constants";

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-3 mb-3">
        <div className="section-divider" />
        <span className="font-dm-mono text-[11px] tracking-widest uppercase" style={{ color: "var(--accent-violet)" }}>Writing</span>
      </div>
      <h2 className="reveal font-syne font-extrabold text-3xl sm:text-5xl mb-3" style={{ color: "var(--text-primary)" }}>Blogs</h2>
      <p className="reveal font-dm-sans text-sm mb-10 sm:mb-14" style={{ color: "var(--text-muted)" }}>Technical write-ups from the trenches of ML research.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {blogLinks.map((blog, i) => (
          <a key={blog.url} href={blog.url}
            className={`reveal reveal-delay-${i + 1} card-glass rounded-2xl p-6 sm:p-7 flex flex-col gap-4 group`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-dm-mono px-3 py-1 rounded-full"
                style={{ color: "var(--accent-violet)", background: "var(--tag-bg)", border: "1px solid var(--border-subtle)" }}>
                {blog.tag}
              </span>
              <span className="text-xs font-dm-mono" style={{ color: "var(--text-muted)" }}>{blog.readTime}</span>
            </div>
            <h3 className="font-syne font-bold text-lg sm:text-xl leading-snug transition-colors group-hover:opacity-80" style={{ color: "var(--text-primary)" }}>
              {blog.title}
            </h3>
            <p className="text-sm font-dm-sans leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>{blog.description}</p>
            <div className="flex items-center gap-2 text-xs font-dm-mono group-hover:gap-3 transition-all" style={{ color: "var(--accent-violet)" }}>
              <span>Read post</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
