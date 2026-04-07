import React from "react";
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

const Divider = () => (
  <div className="max-w-7xl mx-auto px-6 sm:px-10">
    <div className="h-px" style={{ background: "var(--divider)" }} />
  </div>
);

function App() {
  useScrollReveal();

  return (
    <div
      className="relative z-0 min-h-screen"
      style={{ background: "var(--bg-primary)", transition: "background 0.3s ease, color 0.3s ease" }}
    >
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Publication />
      <Divider />
      <Experience />
      <Divider />
      <Tech />
      <Divider />
      <Blogs />
      <Divider />
      <Contact />
    </div>
  );
}

export default App;
