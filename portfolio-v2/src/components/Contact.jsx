import React from "react";


// --- Contcts ------------------

export const CONTACTS = [
  {
    label: "Email",
    value: "ujjwalsharma@cse.iitb.ac.in",
    href: "mailto:ujjwalsharma@cse.iitb.ac.in",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#7c3aed",
  },
  {
    label: "GitHub",
    value: "ujjwalsharmaIITB",
    href: "https://github.com/ujjwalsharmaIITB",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "#8b5cf6",
  },
  {
    label: "ACL Anthology",
    value: "ACL Profile",
    href: "https://aclanthology.org/people/ujjwal-sharma/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "#06b6d4",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/ujjwalsharmacs/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0ea5e9",
  },
];





export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="reveal flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <span className="font-dm-mono text-xs text-purple-400 tracking-widest uppercase">Let's Connect</span>
      </div>
      <h2 className="reveal font-syne font-black text-4xl sm:text-5xl text-white mb-4">Contact</h2>
      <p className="reveal text-gray-500 font-dm-sans text-sm mb-14 max-w-xl">
        Always happy to chat about NLP research, collaborations, or just say hi. Reach out through any of the channels below.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CONTACTS.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`reveal reveal-delay-${i + 1} card-glass rounded-2xl p-6 flex flex-col gap-4 group`}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: `${c.color}20`,
                border: `1px solid ${c.color}30`,
                color: c.color,
              }}
            >
              {c.icon}
            </div>
            <div>
              <p className="font-dm-mono text-xs text-gray-600 uppercase tracking-wider mb-1">{c.label}</p>
              <p className="font-syne font-semibold text-white text-sm group-hover:text-violet-300 transition-colors break-all">
                {c.value}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-dm-mono group-hover:gap-2.5 transition-all" style={{ color: c.color }}>
              <span>Open</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-dm-mono text-xs text-gray-600">
          © {new Date().getFullYear()} Ujjwal Sharma · IIT Bombay
        </p>
        <p className="font-dm-mono text-xs text-gray-700">
          Built with ❤️ using React, Vite, and Tailwind by Ujjwal and Claude
        </p>
      </div>
    </section>
  );
}
