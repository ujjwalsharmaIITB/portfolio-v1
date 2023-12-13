import { motion } from "framer-motion";

const Roller = ({ linkTo }) => {
  /* Now we add for the roller to indicate to move the page down*/
  /* absolute is for mid */

  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href={`#${linkTo}`}>
        <div className="w-[35] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          {/* framer motion motion  */}
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-[#915eff]"
          />
        </div>
      </a>
    </div>
  );
};

export default Roller;
