import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify'; // 1. Import Toast
import 'react-toastify/dist/ReactToastify.css'; // 2. Import CSS
import { 
  FaPaperPlane, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaWhatsapp 
} from "react-icons/fa";
import { images } from "../assets/assets"; 
import ParticlesBackground from "../Components/ParticlesBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const myForm = e.target;
    const formDataObj = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataObj).toString(),
    })
      .then(() => {
        // 3. Show Success Toast
        toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
        
        setIsSubmitting(false);
        setFormData({ name: "", email: "", service: "", message: "" }); 
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
        // 4. Show Error Toast
        toast.error("Failed to send message. Please try again.", {
            theme: "dark",
        });
      });
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center py-20">
      
      {/* 5. Add the Toast Container Here */}
      <ToastContainer />

      <ParticlesBackground />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === LEFT SIDE === */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] mb-8"
            >
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-[80px] z-0"></div>
              <img 
                src={images.home_img} 
                alt="Contact Visual" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="text-center lg:text-left space-y-4">
               <h3 className="text-3xl font-bold">Connect with me</h3>
               <p className="text-gray-400 max-w-md">
                 I'm currently available for freelance work or full-time projects. Let's build something scalable and user-friendly together.
               </p>
               
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

          {/* === RIGHT SIDE === */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-900/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative"
          >
             <div className="absolute -top-5 -right-5 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>

             <div className="mb-8">
               <h2 className="text-3xl font-bold text-white mb-2">Let's Work <span className="text-green-500">Together</span></h2>
               <p className="text-sm text-gray-400">Fill out the form below and I'll get back to you shortly.</p>
             </div>

             <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-5"
             >
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Needed</label>
                  <select 
                    name="service"
                    value={formData.service}
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

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Explain Your Idea</label>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me a bit about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none placeholder:text-gray-700"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <FaPaperPlane />
                </motion.button>
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;