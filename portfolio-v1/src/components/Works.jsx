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
        <h2 className={styles.sectionSubText}>Coming Soon ...</h2>
      </motion.div>
    </>
  );
};

export default Works;
