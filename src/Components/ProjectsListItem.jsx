import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa"; 

const ProjectListItem = ({ project, index }) => {
  return (
    <motion.a 
      href={project.link}       // <--- 1. Uses the external link from your data
      target="_blank"           // <--- 2. Opens in a new tab
      rel="noopener noreferrer" // <--- 3. Security for external links
      className="block w-full group"
      
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 rounded-3xl bg-neutral-900/30 border border-white/5 hover:bg-neutral-900/60 hover:border-green-500/30 transition-all duration-500">
        
        {/* Project Thumbnail */}
        <div className="w-full md:w-[280px] h-[200px] md:h-[180px] shrink-0 overflow-hidden rounded-2xl relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
        </div>

        {/* Project Details */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left w-full">
            <div className="mb-2">
                <span className="text-xs font-bold text-green-400 tracking-widest uppercase">
                    {project.category}
                </span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                </h3>
                <FaExternalLinkAlt className="text-gray-600 text-sm group-hover:text-green-500 transition-colors" />
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
               {project.desc || "A responsive web application built with modern technologies focusing on user experience and performance."}
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                 {project.tags && project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] uppercase font-bold text-gray-500 bg-white/5 rounded-full border border-white/5">
                        {tag}
                    </span>
                 ))}
            </div>
        </div>

        {/* Action Arrow */}
        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
            <FaArrowRight className="text-white -rotate-45 group-hover:-rotate-45 transition-transform duration-300" />
        </div>

      </div>
    </motion.a>
  );
};

export default ProjectListItem;