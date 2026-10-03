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
  <div className="w-[90%] sm:w-4/5 mx-auto">
    <div className="h-px flow-line" />
  </div>
);

function App() {
  useScrollReveal();

  return (
    <div
      className="relative z-0 min-h-screen"
      style={{ background: "var(--bg-primary)", transition: "background 0.3s ease, color 0.3s ease" }}
    >
      <div className="ambient" aria-hidden="true" />
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Publication />
      <Divider />
      <Blogs />
      <Divider />
      <Experience />
      <Divider />
      <Tech />
      <Divider />
      <Contact />
    </div>
  );
}

export default App;
