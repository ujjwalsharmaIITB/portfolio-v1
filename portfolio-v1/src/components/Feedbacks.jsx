import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Feedbacks = () => {
  return (
    <>
      <div className="mt-12 bg-blalck-100 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Feedbacks</p>
            <h2 className={styles.sectionHeadText}>Testimonials</h2>
            <p className={styles.sectionSubText}>Coming Soon ...</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
