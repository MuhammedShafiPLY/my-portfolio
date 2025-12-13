import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-400 py-8 border-t border-white/10 relative overflow-hidden z-50">
      
      {/* Optional: Very subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-green-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Left: Copyright */}
        <p className="text-sm font-medium">
          © {currentYear} <span className="text-white font-bold">SHAFI</span>. All rights reserved.
        </p>

        
        {/* Right: Social Links (Clean & Small) */}
        <div className="flex gap-4">
          <SocialLink href="https://github.com/MuhammedShafiPLY" icon={<FaGithub />} />
          <SocialLink href="https://www.instagram.com/sh_._a_fi7?igsh=Y2l0bGIyN2YxZTh2" icon={<FaLinkedin />} />
          <SocialLink href="https://www.linkedin.com/in/muhammedshafipp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<FaInstagram />} />
        </div>

        {/* Center: Developer Credit with "Love" */}
        <div className="flex items-center gap-2 text-sm">
          <span>Developed </span>
          {/* <FaHeart className="text-red-500 animate-pulse text-xs" />  */}
          <span>by</span>
          <span className="text-green-400 font-bold uppercase tracking-wider">Shafi</span>
        </div>

      </div>
    </footer>
  );
};

// Simple reusable social link component
const SocialLink = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
};

export default Footer;