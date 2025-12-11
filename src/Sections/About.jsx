import React from "react";
import PulseAnimation from "../Components/PulseAnimation";
import { motion } from "framer-motion";
import { images } from "../assets/assets";
import { FaRegCheckCircle } from "react-icons/fa";


const fadeUpProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true } // Good to add this so it doesn't replay constantly
};



// Data Arrays
const statsData = [
  { id: 1, value: "3+", label: "Projects Completed" },
  { id: 2, value: "10+", label: "Tech Stack Mastered" },
  { id: 3, value: "6m+", label: "Commercial Experience" },
  { id: 4, value: "100%", label: "Client Satisfaction" },
];

const checkPoints = [
  {
    Id: "1",
    Icon: FaRegCheckCircle,
    Text: "Full Stack Development: Experience building scalable apps using React, Node.js, and MongoDB.",
  },
  {
    Id: "2",
    Icon: FaRegCheckCircle,
    Text: "WordPress Expertise: From theme customization to performance optimization.",
  },
  {
    Id: "3",
    Icon: FaRegCheckCircle,
    Text: "Soft Skills: Leadership, flexibility, and a hardworking attitude.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen relative bg-black text-white overflow-hidden flex flex-col py-20 items-center justify-center"
    >
      {/* Background Animations */}
      <PulseAnimation place={"-top-32 -right-32"} />
      {/* <PulseAnimation place={"top-22 left-82 w-2xl"} /> */}
      <PulseAnimation place={"-bottom-32 -left-32"} />

      {/* Main Content Wrapper - Controlled by Motion */}
      <motion.div 
        className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col gap-12"
{...fadeUpProps}
      >
        
        {/* Top Section: Image + Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Profile Image */}
          <motion.div
            {...fadeUpProps}
            className="relative w-[250px] h-[350px] md:w-[290px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-green-500/30 shrink-0"
          >
            <img
              src={images.prof}
              alt="Profile Image"
              className="absolute inset-0  hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-1 flex-col justify-start text-center md:text-left">
            <motion.h4
              {...fadeUpProps}
              className="px-4 py-1 rounded-full w-fit mx-auto md:mx-0 text-green-50 bg-gradient-to-r from-green-400 to-green-600 text-sm font-bold mb-4"
            >
              About Me
            </motion.h4>

            <motion.h2
              {...fadeUpProps}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-200 to-green-400 pb-2"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              {...fadeUpProps}
              className="mt-2 text-xl text-white/90 font-semibold"
            >
              MERN & WordPress Specialist
            </motion.p>

            <motion.p
              {...fadeUpProps}
              className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg"
            >
              I am a detail-oriented Web Developer at Bassys Technologies,
              specializing in building responsive MERN Stack applications and
              custom WordPress solutions. Leveraging strong problem-solving
              skills and SEO expertise, I focus on delivering dynamic,
              user-friendly digital experiences.
            </motion.p>

            {/* Checkpoints List */}
            <motion.div 
              className="mt-8 flex flex-col gap-4 text-sm md:text-base text-gray-300"
              {...fadeUpProps} // Nested staggering for list items
            >
              {checkPoints.map(({ Icon, Id, Text }) => (
                <motion.div 
                  key={Id} 
                  {...fadeUpProps} 
                  className="flex items-start gap-3"
                >
                  <Icon className="text-green-500 text-xl shrink-0 mt-1" />
                  <p className="text-left">{Text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section - Now Integrated nicely */}
        <motion.div 
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
          {...fadeUpProps}
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              {...fadeUpProps}
              className="p-6 flex flex-col items-center justify-center border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-green-400">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mt-2 text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;