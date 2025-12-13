import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import OverlayMenu from "./OverlayMenu";
import { images } from "../assets/assets";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaTools, FaUser, FaPhone } from "react-icons/fa";
import { GrUserExpert, GrProjects, GrServices } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timeId = useRef(null);

  const navItems = [
    { key: "home", label: "Home", icon: <FaHome /> },
    { key: "about", label: "About", icon: <FaUser /> },
    { key: "skills", label: "Skills", icon: <FaTools /> },
    { key: "education", label: "Education", icon: <FaUserGraduate /> },
    { key: "experience", label: "Exp.", icon: <GrUserExpert /> },
    { key: "projects", label: "Projects", icon: <GrProjects /> },
    { key: "services", label: "Services", icon: <GrServices /> },
    { key: "contact", label: "Contact", icon: <FaPhone /> },
  ];

  // --- Scroll Logic ---
  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
        if (timeId.current) clearTimeout(timeId.current);
        timeId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeId.current) clearTimeout(timeId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          window.scrollY > 50
            ? "bg-black/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* --- Logo --- */}
        <div className="flex-shrink-0">
          <img
            src={images.logo}
            className="w-[150px] md:w-[200px] h-auto object-contain"
            alt="Logo"
          />
        </div>

        {/* --- DESKTOP NAV (Center) --- */}
        {/* Added overflow-visible so the labels popping out bottom don't get cut off */}
        <div className="hidden lg:flex items-center justify-center gap-6 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10 shadow-lg overflow-visible">
          {navItems.map((item) => (
            <NavItem key={item.key} item={item} />
          ))}
        </div>

        {/* --- Mobile Trigger --- */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="open Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* --- CTA Button --- */}
        <div className="hidden lg:block flex-shrink-0">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-800 to-green-600 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Get Now
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

// --- Updated NavItem Component ---
const NavItem = ({ item }) => {
  return (
    <motion.a
      href={`#${item.key}`}
      className="relative flex flex-col items-center justify-center group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Icon Circle */}
      <motion.div
        className="text-xl p-2 rounded-full text-white/80 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.2 }}
      >
        {item.icon}
      </motion.div>

      {/* Label (Absolute positioned below) */}
      <motion.span
        className="absolute top-full mt-2 text-xs font-medium text-green-400 tracking-wide whitespace-nowrap bg-black/80 px-2 py-1 rounded-md border border-white/10 backdrop-blur-md"
        variants={{
          rest: { opacity: 0, y: -10, pointerEvents: "none" },
          hover: { opacity: 1, y: 0, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.3, ease: "backOut" }}
      >
        {item.label}
      </motion.span>
    </motion.a>
  );
};

export default Navbar;