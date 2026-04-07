import React, { useState, useEffect, useRef } from "react";
import { navLinks, blogLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);
  const blogsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close blogs dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (blogsRef.current && !blogsRef.current.contains(e.target)) {
        setBlogsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050815]/90 backdrop-blur-xl border-b border-purple-900/20 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-xs font-bold font-syne text-white">
            US
          </div>
          <span className="font-syne font-bold text-white text-base hidden sm:block tracking-tight">
            Ujjwal Sharma
            <span className="text-violet-400 font-normal"> @IITB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-dm-sans transition-all duration-200 ${
                  active === link.title
                    ? "text-white bg-purple-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}

          {/* Blogs dropdown */}
          <li ref={blogsRef} className="relative">
            <button
              onClick={() => setBlogsOpen(!blogsOpen)}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium font-dm-sans transition-all duration-200 ${
                blogsOpen ? "text-white bg-purple-500/10" : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Blogs
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${blogsOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {blogsOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 rounded-2xl overflow-hidden border border-purple-900/30 bg-[#0a0820]/95 backdrop-blur-xl shadow-2xl shadow-purple-900/20">
                <div className="p-2">
                  {blogLinks.map((blog) => (
                    <a
                      key={blog.url}
                      href={blog.url}
                      onClick={() => setBlogsOpen(false)}
                      className="flex flex-col gap-1 px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold font-syne text-white group-hover:text-violet-300 transition-colors">
                          {blog.title}
                        </span>
                        <span className="text-[10px] font-dm-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">
                          {blog.tag}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{blog.description}</p>
                      <span className="text-[11px] font-dm-mono text-cyan-500/70">{blog.readTime}</span>
                    </a>
                  ))}
                </div>
                <div className="border-t border-purple-900/20 px-4 py-2">
                  <span className="text-xs text-gray-600 font-dm-mono">More posts coming soon ✨</span>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-[#070516]/95 backdrop-blur-xl border-t border-purple-900/20">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => { setActive(link.title); setMobileOpen(false); }}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
              >
                {link.title}
              </a>
            ))}
            <div className="mt-2 border-t border-purple-900/20 pt-2">
              <p className="text-xs font-dm-mono text-gray-600 px-4 mb-2">Blogs</p>
              {blogLinks.map((blog) => (
                <a
                  key={blog.url}
                  href={blog.url}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors flex items-center justify-between"
                >
                  <span>{blog.title}</span>
                  <span className="text-[10px] font-dm-mono text-violet-400">{blog.tag}</span>
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
