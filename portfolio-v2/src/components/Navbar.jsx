import React, { useState, useEffect, useRef } from "react";
import { navLinks, blogLinks } from "../constants";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);
  const blogsRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (blogsRef.current && !blogsRef.current.contains(e.target)) setBlogsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? "var(--bg-nav)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        <a href="#" onClick={() => { setActive(""); window.scrollTo(0, 0); }} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-xs font-bold font-syne text-white flex-shrink-0">US</div>
          <span className="font-syne font-bold text-base hidden sm:block tracking-tight" style={{ color: "var(--text-primary)" }}>
            Ujjwal Sharma<span style={{ color: "var(--accent-violet)" }} className="font-normal"> @IITB</span>
          </span>
        </a>

        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className="px-3 py-2 rounded-lg text-sm font-medium font-dm-sans transition-all duration-200"
                style={{ color: active === link.title ? "var(--text-primary)" : "var(--text-secondary)", background: active === link.title ? "var(--tag-bg)" : "transparent" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.background = "var(--tag-bg)"; }}
                onMouseLeave={e => { if (active !== link.title) { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "transparent"; } }}
              >
                {link.title}
              </a>
            </li>
          ))}

          <li ref={blogsRef} className="relative">
            <button
              onClick={() => setBlogsOpen(!blogsOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium font-dm-sans transition-all duration-200"
              style={{ color: blogsOpen ? "var(--text-primary)" : "var(--text-secondary)", background: blogsOpen ? "var(--tag-bg)" : "transparent" }}
            >
              Blogs
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${blogsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {blogsOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 rounded-2xl overflow-hidden shadow-2xl" style={{ background: theme === "dark" ? "rgba(7,5,22,0.97)" : "rgba(255,255,255,0.97)", border: "1px solid var(--border-subtle)", backdropFilter: "blur(20px)" }}>
                <div className="p-2">
                  {blogLinks.map((blog) => (
                    <a key={blog.url} href={blog.url} onClick={() => setBlogsOpen(false)}
                      className="flex flex-col gap-1 px-4 py-3 rounded-xl transition-colors"
                      onMouseEnter={e => e.currentTarget.style.background = "var(--tag-bg)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold font-syne" style={{ color: "var(--text-primary)" }}>{blog.title}</span>
                        <span className="text-[10px] font-dm-mono px-2 py-0.5 rounded-full" style={{ color: "var(--accent-violet)", background: "var(--tag-bg)" }}>{blog.tag}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{blog.description}</p>
                      <span className="text-[11px] font-dm-mono" style={{ color: "var(--accent-cyan)" }}>{blog.readTime}</span>
                    </a>
                  ))}
                </div>
                <div className="px-4 py-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  <span className="text-xs font-dm-mono" style={{ color: "var(--text-muted)" }}>More posts coming soon ✨</span>
                </div>
              </div>
            )}
          </li>

          <li className="ml-2"><ThemeToggle /></li>
        </ul>

        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--text-secondary)" }} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} style={{ background: "var(--text-secondary)" }} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--text-secondary)" }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ background: "var(--bg-nav)", borderTop: "1px solid var(--border-subtle)", backdropFilter: "blur(16px)" }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => { setActive(link.title); setMobileOpen(false); }}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.background = "var(--tag-bg)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.title}
              </a>
            ))}
            <div className="mt-2 pt-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>
              <p className="text-xs font-dm-mono px-4 mb-2" style={{ color: "var(--text-muted)" }}>Blogs</p>
              {blogLinks.map((blog) => (
                <a key={blog.url} href={blog.url} onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span>{blog.title}</span>
                  <span className="text-[10px] font-dm-mono" style={{ color: "var(--accent-violet)" }}>{blog.tag}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
