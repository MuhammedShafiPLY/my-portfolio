import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonialsData } from "../constants/testimonialsData"; // Import data
import PulseAnimation from "../Components/PulseAnimation";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <PulseAnimation place="top-20 right-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-400 font-bold tracking-widest uppercase mb-3 text-sm"
          >
            Client Feedback
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Say</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Giant Background Quote Icon */}
              <FaQuoteLeft className="absolute top-6 right-6 text-6xl text-white/5 group-hover:text-green-500/10 transition-colors duration-500" />

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                "{item.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-green-500 transition-colors">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-green-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;