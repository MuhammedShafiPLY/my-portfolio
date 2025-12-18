import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const phone_num = import.meta.env.VITE_PHONE;

const WhatsAppBtn = () => {
  const phoneNumber = phone_num;
  const message =
    "Hello, I saw your portfolio and would like to discuss a project.";

  // 3. Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-center group">
      {/* Tooltip Text (Appears on Hover) */}
      <span className="absolute bottom-full mb-2 w-max px-3 py-1 text-xs font-bold text-black bg-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        Chat with me!
      </span>

      {/* The Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors duration-300"
        // Initial Animation (Slide in)
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        // Hover Animation
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse Effect Rings */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Icon */}
        <FaWhatsapp className="text-3xl relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppBtn;
