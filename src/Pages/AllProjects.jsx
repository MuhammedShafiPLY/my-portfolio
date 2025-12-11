import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa"; // Changed arrow icon to Down
import { projectsData } from "../constants/projectsData"; 
import ProjectListItem from "../Components/ProjectsListItem"; 
import PulseAnimation from "../Components/PulseAnimation";
import BackToHome from "../Components/BackToHome";

const AllProjects = () => {
  // 1. State to track how many items to show (Start with 10)
  const [visibleCount, setVisibleCount] = useState(10);

  // 2. Function to load next 10 items
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  // 3. Slice the data to show only 'visibleCount' items
  const displayedProjects = projectsData.slice(0, visibleCount);

  return (
    <>
      <BackToHome />
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
              className="max-w-2xl mt-10 md:mt-0"
            >
              <h4 className="text-green-400 font-bold tracking-widest uppercase mb-3 text-sm">
                My Portfolio
              </h4>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                All <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Projects</span>
              </h2>
            </motion.div>
            
            {/* Decorative Line */}
            <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent mx-10 mb-4" />
          </div>

          {/* --- THE PROJECTS LIST (DYNAMIC) --- */}
          <div className="flex flex-col gap-6">
            {displayedProjects.map((project, index) => (
              <ProjectListItem key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* --- LOAD MORE BUTTON --- */}
          {/* Only show this button if there are still more projects to show */}
          {visibleCount < projectsData.length && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 flex justify-center"
            >
              <button 
                onClick={handleLoadMore}
                className="group relative px-10 py-4 bg-neutral-900 border border-white/10 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:border-green-500/50 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3 group-hover:text-green-400 transition-colors duration-300">
                   Load More Projects <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
                </span>
                
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          )}

          {/* Optional: Message when end of list reached */}
          {visibleCount >= projectsData.length && projectsData.length > 10 && (
             <p className="text-center text-gray-500 mt-12 italic">
                You've reached the end of the list.
             </p>
          )}

        </div>
      </section>
    </>
  );
};

export default AllProjects;