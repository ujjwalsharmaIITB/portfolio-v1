import React from "react";
import { blogLinks } from "../constants";

export default function Blogs() {
  return (
    <section id="blogs" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <span className="font-dm-mono text-xs text-purple-400 tracking-widest uppercase">Writing</span>
      </div>
      <h2 className="reveal font-syne font-black text-4xl sm:text-5xl text-white mb-4">Blogs</h2>
      <p className="reveal text-gray-500 font-dm-sans text-sm mb-14">
        Technical write-ups from the trenches of ML research.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {blogLinks.map((blog, i) => (
          <a
            key={blog.url}
            href={blog.url}
            className={`reveal reveal-delay-${i + 1} card-glass rounded-2xl p-7 flex flex-col gap-4 group`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-dm-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                {blog.tag}
              </span>
              <span className="text-xs font-dm-mono text-gray-600">{blog.readTime}</span>
            </div>
            <h3 className="font-syne font-bold text-white text-xl group-hover:text-violet-300 transition-colors leading-snug">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-400 font-dm-sans leading-relaxed flex-1">{blog.description}</p>
            <div className="flex items-center gap-2 text-xs font-dm-mono text-violet-400 group-hover:gap-3 transition-all">
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
