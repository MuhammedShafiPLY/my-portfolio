import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../constants/servicesData"; // Import your data
import PulseAnimation from "../Components/PulseAnimation";

const Services = () => {
  return (
    <section id="services" className="w-full py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <PulseAnimation place="-bottom-20 -right-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-400 font-bold tracking-widest uppercase mb-2 text-sm"
          >
            What I Offer
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Services</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Sub-Component for Clean Code ---
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500"
    >
      {/* 1. Gradient Hover Effect Background */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} 
      />
      
      {/* 2. Floating Glow Blob (Top Right) */}
      <div 
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} 
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        
        {/* Icon Container */}
        <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
          <service.icon className="text-2xl" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>

        {/* Learn More Arrow (Optional decoration) */}
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mt-auto group-hover:bg-white group-hover:text-black transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
             </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;