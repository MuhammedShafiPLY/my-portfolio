import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projectsData } from "../constants/projectsData"; // Make sure path is correct
import ProjectListItem from "../Components/ProjectsListItem"; // Import the new component
import PulseAnimation from "../Components/PulseAnimation";

const Projects = () => {
  // Show only top 4 projects
  const displayedProjects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="w-full py-24 bg-black text-white relative overflow-hidden">
        
      {/* Background Ambience */}
      <PulseAnimation place="top-0 left-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-green-400 font-bold tracking-widest uppercase mb-3 text-sm">
              Selected Works
            </h4>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Projects</span>
            </h2>
          </motion.div>
          
          {/* Decorative Line */}
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent mx-10 mb-4" />
        </div>

        {/* --- THE PROJECTS LIST --- */}
        <div className="flex flex-col gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectListItem key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
        >
            <Link to="/all-projects">
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform active:scale-95">
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    View All Projects <FaArrowRight />
                </span>
                {/* Green fill effect on hover */}
                <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;