import React from "react";

import ReactTyped from "react-typed";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";

import Roller from "./Roller";

const Hero = () => {
  const name = "Ujjwal";
  const roles = [
    "Learner",
    "Computer Science Student",
    "Deep Learning Enthusiast",
    "Natural Language Processing Student",
    "Natural Language Processing Enthusiast",
  ];

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Background image in tailwindcss */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* round of purple color */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* line of purple color */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">{name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a{" "}
            <span className="text-[#915eff] font-bold">
              <ReactTyped
                strings={roles}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </span>
          </p>
        </div>

        <ComputersCanvas />

        {/* Now we add for the roller to indicate to move the page down*/}
        {/* absolute is for mid */}
        <Roller linkTo="about" />
      </div>
    </section>
  );
};

export default Hero;
