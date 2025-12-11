import React from "react";
import { motion } from "framer-motion";
import PulseAnimation from "../Components/PulseAnimation";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const skillsData = [
  { name: "React.js", icon: SiReact, level: 90, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, level: 85, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47A248" },
  { name: "Express", icon: SiExpress, level: 80, color: "#ffffff" },
  { name: "WordPress", icon: SiWordpress, level: 95, color: "#21759B" },
  { name: "JavaScript", icon: SiJavascript, level: 90, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, level: 80, color: "#38B2AC" },
  { name: "HTML5", icon: SiHtml5, level: 98, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, level: 95, color: "#1572B6" },
  { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952B3" },
  { name: "Photoshop", icon: SiAdobephotoshop, level: 80, color: "#067bd1" },
  { name: "Illustrator", icon: SiAdobeillustrator, level: 70, color: "#ff7c00" },
];

// Animation Variants for the Stagger Effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for grid items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className=" relative w-full bg-black overflow-hidden flex flex-col py-20 items-center justify-center text-white">
      <PulseAnimation place={"-top-35 -left-32"} />
      {/* <PulseAnimation place={"top-42 right-102 "} /> */}
      <PulseAnimation place={"-bottom-32 -right-32"} />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h4 className="px-4 py-1 rounded-full w-fit mx-auto md:mx-0 text-green-50 bg-gradient-to-r from-green-400 to-green-600 text-sm font-bold mb-4">
            Skills
          </motion.h4>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 inline-block">
            Tools & Technologies I work with
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            A curated list of the languages, frameworks, and tools I use to
            build scalable and responsive digital solutions.
          </p>
        </div>

        {/* The Grid Container */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2, delay: 0 },
              }}
              className="group relative h-[200px] bg-neutral-900/50 border border-white/10 rounded-2xl flex flex-col items-center justify-between p-6 hover:border-green-500/50 hover:bg-neutral-800 transition-all duration-300"
            >
              {/* 1. Heading (Top) */}
              <h3 className="text-lg font-bold text-gray-200 tracking-wide">
                {skill.name}
              </h3>

              {/* 2. Icon (Middle) */}
              <div
                className="text-6xl drop-shadow-2xl filter transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>

              {/* 3. Range Value (Bottom) */}
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400">
                    {skill.level}%
                  </span>
                  <br />
                  <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
                    Proficiency
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                  {/* Progress Fill */}
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
