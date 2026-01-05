import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

// higher order component
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary py-5 rounded-[20px] px-12 min-h-[250px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-center text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text=[24px] leading-[30px] max-w-5xl"
      >
        I am a <b>research Master's student</b> in the Department of Computer Science and Engineering at IIT Bombay, working at the intersection of <b>Multilingual NLP (MNLP), Machine Translation (MT), Grammar Error Correction (GEC), and Large Language Models (LLMs)</b>. 
        My work addresses the core challenge of data scarcity in low-resource languages, where I design synthetic data generation methods, multilingual training strategies, and linguistically informed models to improve robustness and cross-lingual generalization.
        I have contributed to large-scale, real-world <a href="https://www.cfilt.iitb.ac.in/mtsystem/translate" target="_blank" rel="noopener noreferrer"><u>MT systems</u></a> as part of <a href="https://bhashini.gov.in/" target="_blank" rel="noopener noreferrer"><u>Mission Bhashini</u></a>, a Government of India initiative, collaborating across multiple institutions to build and deploy <a href="https://github.com/cfiltnlp/Bhashini-IITB" target="_blank" rel="noopener noreferrer"><u>domain-adapted MT models</u></a> for diverse Indian languages. Alongside deployment-driven research, I have led foundational research in low-resource Indic GEC, resulting in <b>first-author publications</b> at top-tier NLP conferences.
{/* Across these efforts, my goal is to build scalable, inclusive language technologies that bridge rigorous NLP research with real-world multilingual impact, enabling reliable language understanding and generation across linguistically diverse settings. */}
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
