import React from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";

import { experiences } from "../constants";

import { SectionWrapper } from "../hoc";

import { textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>



      <motion.div variants={textVariant()}>
        {/* add github icon as well */}
        <h2 className={styles.sectionSubText}>Checkout my <a href="https://github.com/ujjwalsharmaIITB" target="_blank" rel="noopener noreferrer" className="text-white underline">GitHub</a> for more projects!</h2>
      </motion.div>
    </>
  );
};

export default Works;
