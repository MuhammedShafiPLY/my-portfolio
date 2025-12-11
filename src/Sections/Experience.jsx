import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/assets";
import { FaGraduationCap, FaBriefcase, FaQuoteLeft } from "react-icons/fa";
import PulseAnimation from "../Components/PulseAnimation";

// --- DATA ---
const educationData = [
  {
    id: 1,
    title: "Diploma in MEAN & MERN Stack",
    place: "Addon Career Platform Pvt. Ltd.",
    date: "2024 - 2025",
    desc: "Intensive 6-month specialized training in Full Stack Development.",
  },
  {
    id: 2,
    title: "Bachelor of Arts in English",
    place: "University of Calicut",
    date: "2021 - 2024",
    desc: "Focused on communication, critical thinking, and literature.",
  },
  {
    id: 3,
    title: "Higher Secondary Education",
    place: "Board of Higher Secondary Exam",
    date: "2018 - 2020",
    desc: "Completed with focus on academic excellence.",
  },
  {
    id: 4,
    title: "SSLC",
    place: "Department of General Education",
    date: "2017 - 2018",
    desc: "Secondary School Leaving Certificate.",
  },
];

const experienceData = [
  {
    id: 1,
    role: "Web Developer",
    company: "BASSYS Technologies",
    date: "July 2025 - Present",
    desc: [
      "Designing and maintaining responsive WordPress websites.",
      "Implementing SEO best practices for better ranking.",
      "Collaborating with UI/UX teams for client-focused solutions.",
    ],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "BASSYS Technologies",
    date: "June 2025 - July 2025",
    desc: [
      "Assisted in building custom WordPress themes.",
      "Gained hands-on experience in plugin integration.",
      "Troubleshot and resolved live site issues.",
    ],
  },
];

// --- QUOTES DATA ---
const quotesData = [
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    align: "self-end", // Aligns to the Left
    delay: 0.2,
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    align: "self-end", // Aligns to the Right
    delay: 0.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section
      className="w-full min-h-[1400px] relative flex items-center justify-center py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${images.ex_edu})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <PulseAnimation place={"-bottom-32 -left-32"}/>
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase opacity-90">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* === LEFT COLUMN: EDUCATION === */}
          <motion.div
            id="education"
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <FaGraduationCap className="text-4xl text-green-400" />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl">
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent md:left-12"></div>
              <div className="flex flex-col gap-10">
                {educationData.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    className="relative pl-8 md:pl-12 group"
                  >
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-green-500 md:left-2.5 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-sm font-mono text-green-400 mb-1 block">
                      {item.date}
                    </span>
                    <h4 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-semibold mt-1">
                      {item.place}
                    </p>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* === RIGHT COLUMN: QUOTES + EXPERIENCE === */}
          <div className="flex flex-col gap-10">
            
            {/* 1. QUOTES SECTION (Replaces Collage) */}
            <div className="h-[350px] flex flex-col justify-between py-4">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className={`relative max-w-sm p-6 bg-neutral-900/60 backdrop-blur-sm border-l-4 border-green-500 rounded-r-xl  shadow-lg self-end`}
                >
                  <FaQuoteLeft className="text-2xl text-green-500/30 mb-2" />
                  <p className="text-lg text-gray-300 italic font-medium leading-relaxed">
                    Code is like humor. When you have to explain it, it’s bad.
                  </p>
                  <p className="text-sm text-green-400 mt-3 font-bold text-right">
                    Cory House
                  </p>
                </motion.div>
            </div>

            {/* 2. EXPERIENCE SECTION */}
            <motion.div
              id="experience"
              className="flex flex-col gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <FaBriefcase className="text-3xl text-green-400" />
                <h3 className="text-3xl font-bold text-white">Experience</h3>
              </div>

              <div className="relative p-8 bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl">
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent md:left-12"></div>
                <div className="flex flex-col gap-12">
                  {experienceData.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={cardVariants}
                      className="relative pl-8 md:pl-12 group"
                    >
                      <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-green-500 md:left-2.5 ring-4 ring-green-500/20 group-hover:ring-green-500/40 transition-all"></div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">
                        {item.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1 mb-4">
                        <span className="text-green-400 font-semibold">
                          {item.company}
                        </span>
                        <span className="text-gray-400 text-sm">•</span>
                        <span className="text-gray-300 text-sm font-mono">
                          {item.date}
                        </span>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                        {item.desc.map((point, i) => (
                          <li key={i} className="pl-1 marker:text-green-500/50">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;