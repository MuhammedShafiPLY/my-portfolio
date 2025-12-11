import React, { useEffect, useState, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import { images } from "../assets/assets";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timeId = useRef(null);

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
    <div>
      <nav
        className={`fixed w-full top-0 left-0 z-50 flex items-center justify-between px-6  transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-12 my-5 ">
          <img src={images.logo180} className="w-[200px] h-[60px]" alt="" />
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="open Menu"
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-linear-to-r from-green-950 to-green-950 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300 "
          >
            Get Now
          </a>
        </div>
      </nav>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Navbar;
