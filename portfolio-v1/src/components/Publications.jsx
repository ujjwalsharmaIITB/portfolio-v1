import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { publications } from "../constants";

import { SectionWrapper } from "../hoc";

import { textVariant } from "../utils/motion";
import Roller from "./Roller";

const PublicationCard = ({ publication }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={publication.date}
      iconStyle={{ background: publication.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={publication.logo}
            alt={publication.venue}
            className="w-[70%] h-[70%] object-contain absolute"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold text-[24px]">{publication.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {publication.place}
        </p>
      </div>

      {/* need to create a Abstract component with scrolling effect */}
      <div className="mt-5">
        <Roller text={publication.abstract} />
      </div>

    </VerticalTimelineElement>
  );
};

const Publication = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What have I Published</p>
        <h2 className={styles.sectionHeadText}>Publications</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Publication, "publications");
