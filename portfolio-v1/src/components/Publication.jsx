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
        // need to make this icon bigger


        <div className="flex justify-center items-center w-full h-full">
          <img
            src={publication.logo}
            alt={publication.venue}
            className="w-[80%] h-[80%] object-contain"
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
          {publication.venue} || {publication.place}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-white font-bold text-[18px]">Abstract:</p>
        <p className="text-secondary text-[14px] max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"> {publication.abstract} </p>
        {/* link to the paper */}
        <p className="text-white font-bold text-[18px] mt-4"><a href={publication.url} target="_blank" rel="noopener noreferrer">Link to Paper</a></p>
      </div>

    </VerticalTimelineElement>
  );
};

const Publication = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>What have I Published</p> */}
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

export default SectionWrapper(Publication, "publication");
