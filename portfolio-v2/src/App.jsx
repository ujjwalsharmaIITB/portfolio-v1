import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Publication from "./components/Publication";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />
      </div>
      <Education />
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />
      </div>
      <Publication />
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />
      </div>
      <Experience />
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />
      </div>
      <Tech />
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />
      </div>
      <Blogs />
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />
      </div>
      <Contact />
    </div>
  );
}

export default App;
