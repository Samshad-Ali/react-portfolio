import { motion } from "framer-motion";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiRedux, SiPython } from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGit,
  FaJs,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import React from "react";

const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndthree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
    five: {
      opacity: 0,
      x: "-100%",
    },
    sixAndseven: {
      opacity: 0,
      y: "100%",
    },
  };
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="skillBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <FaJs />
          <span>javascript</span>
        </motion.div>
        <motion.div
          className="skillBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndthree}
        >
          <AiFillHtml5 />
          <span>HTML</span>
        </motion.div>
        <motion.div
          className="skillBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndthree}
          transition={{
            delay:0.15
          }}
        >
          <FaCss3Alt />
          <span>css</span>
        </motion.div>
        <motion.div
          className="skillBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
      
        >
          <FaReact />
          <span>React</span>
        </motion.div>
        <motion.div
          className="skillBox5"
          whileInView={animations.whileInView}
          initial={animations.sixAndseven}
          transition={{
            delay:0.2,
         
          }}
        >
          <SiRedux />
          <span>Redux</span>
        </motion.div>

        <motion.div
          className="skillBox6"
          whileInView={animations.whileInView}
          initial={animations.sixAndseven}
        >
          <FaBootstrap />
          <span>Bootstrap</span>
        </motion.div>
        <motion.div
          className="skillBox7"
          whileInView={animations.whileInView}
          initial={animations.sixAndseven}
          transition={{
            delay:0.15
          }}
        >
          <AiFillGithub />
          <span>git</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
