import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPaperPlane, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaWhatsapp 
} from "react-icons/fa";
import { images } from "../assets/assets"; // Use your 'astronaut' or 'standing' image here
import ParticlesBackground from "../Components/ParticlesBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This creates a mailto link with the form data
    const subject = `Portfolio Inquiry from ${formData.name}: ${formData.service}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService Needed: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:muhammedshafiply@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center py-20">
      
      {/* --- BACKGROUND STARS EFFECT --- */}
      {/* <div className="absolute inset-0 z-0">
         <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
         <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-500/50 rounded-full blur-[2px] animate-ping"></div>
         <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
         <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
      </div> */}

      <ParticlesBackground />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === LEFT SIDE: FLOATING VISUAL === */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* The "Floating" Image Animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }} // Floating up and down
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] mb-8"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-[80px] z-0"></div>
              
              <img 
                src={images.home_img} // Use an image with a transparent background for best effect
                alt="Contact Visual" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Contact Info Text */}
            <div className="text-center lg:text-left space-y-4">
               <h3 className="text-3xl font-bold">Connect with me</h3>
               <p className="text-gray-400 max-w-md">
                 I'm currently available for freelance work or full-time projects. Let's build something scalable and user-friendly together.
               </p>
               
               {/* Social Icons */}
               <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                  {[
                    { icon: FaLinkedinIn, href: "#" },
                    { icon: FaGithub, href: "#" },
                    { icon: FaInstagram, href: "#" },
                    { icon: FaFacebookF, href: "#" },
                    { icon: FaWhatsapp, href: "#" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
                    >
                      <social.icon />
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* === RIGHT SIDE: THE FORM === */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative"
          >
             {/* Form Decoration */}
             <div className="absolute -top-5 -right-5 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>

             <div className="mb-8">
               <h2 className="text-3xl font-bold text-white mb-2">Let's Work <span className="text-green-500">Together</span></h2>
               <p className="text-sm text-gray-400">Fill out the form below and I'll get back to you shortly.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-700"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-700"
                  />
                </div>

                {/* Service Dropdown (Like the reference image) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Needed</label>
                  <select 
                    name="service"
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all cursor-pointer"
                  >
                    <option value="" className="bg-neutral-900">Select a service...</option>
                    <option value="Web Development" className="bg-neutral-900">Web Development</option>
                    <option value="WordPress" className="bg-neutral-900">WordPress Customization</option>
                    <option value="UI/UX Design" className="bg-neutral-900">UI/UX Design</option>
                    <option value="Other" className="bg-neutral-900">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Explain Your Idea</label>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me a bit about your project..."
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none placeholder:text-gray-700"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <FaPaperPlane />
                </motion.button>
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;