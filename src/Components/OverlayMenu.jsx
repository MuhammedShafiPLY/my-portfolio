import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { FaHome, FaTools, FaUser, FaPhone, FaHandshake } from "react-icons/fa";
import { GrUserExpert, GrProjects,  GrServices } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa6";

const OverlayMenu = ({ isOpen, onClose }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          animation={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.80)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 font-bold text-white text-3xl"
            aria-label="close Menu"
          >
            <TfiClose />
          </button>

          <ul className="text-center space-y-6">
            {[
              {key: "home",label: "Home",icon: <FaHome />,},
              {key: "about",label: "About",icon: <FaUser />,},
              {key: "skills",label: "Skills",icon: <FaTools />,},
              {key: "education",label: "Education",icon: <FaUserGraduate />,},
              {key: "experience",label: "Experience",icon: <GrUserExpert />,},
              {key: "projects",label: "Projects",icon: <GrProjects />,},
              {key: 'services', label: "Services", icon: < GrServices />},
              {key: "contact",label: "Contact",icon: <FaPhone />,},
            ].map((item, index) => (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.key.toLowerCase()}`}
                  onClick={onClose}
                  className="flex gap-3 text-2xl text-white font-semibold hover:text-green-700 transition-colors duration-300"
                >
                  {item.icon} {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;
