import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../Components/ParticlesBackground";
import PulseAnimation from "../Components/PulseAnimation";
import { useMemo } from "react";
import { images } from "../assets/assets";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  const social = [
    {
      Icon: FaFacebook,
      label: "FaceBooK",
      link: "https://www.facebook.com/share/1Bryv12FLt/",
    },
    {
      Icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/sh_._a_fi7?igsh=Y2l0bGIyN2YxZTh2",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammedshafipp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      Icon: FaTwitter,
      label: "X",
      link: "https://x.com/MHD_SHAFI_KPM?t=kS3tXggaveTs0kLu8T3dhg&s=09",
    },
    {
      Icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/MuhammedShafiPLY",
    },
  ];

  const glowVariants = {
    initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      scale: 1.2,
      y: -3,
      filter: "drop-shadow(0 0 6px rgba(36, 255, 113, 0.7))",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.95, y: 0, transition: { duration: 8.08 } },
  };

  const roles = useMemo(
    () => [
      "Web Designer",
      "Web Developer",
      "Frontend Developer",
      "React Developer",
    ],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeOut = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 70 : 70
    );

    return () => clearTimeout(timeOut);
  }, [subIndex, index, deleting, roles]);

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      // Before 5 PM
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      <PulseAnimation place={"-top-32 -left-32"} />
      <PulseAnimation place={"-bottom-32 -right-32"} />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 lg:pl-24 mx-auto mx-w-[48rem]">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>
                {roles[index].substring(0, subIndex)}
                <span className="animate-pulse ml-1 inline-block w-1 h-9 bg-white align-middle"></span>
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text
                    bg-linear-to-r from-[#24ff71] via-[#029c07] to-[#013002] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* <span className="text-2xl text-white">{getGreeting()}</span>  */}
              {/* <br /> */}
              Hello I'm
              <br />
              <span className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl lg:whitespace-nowrap">
                Muhammed Shafi
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I am a Frontend Developer. I create beautiful and functional
              websites using the latest web technologies.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-white text-lg text-black font-medium rounded-full 
             shadow-lg hover:bg-green-700 hover:text-white hover:scale-105 
             transition-all duration-300"
              >
                View My Works
              </a>
              <a
                href={images.resume}
                download={true}
                className="inline-block px-6 py-3 bg-transparent border-2 border-green-700 text-lg text-green-700 font-medium rounded-full 
             shadow-lg hover:bg-green-700 hover:text-white hover:scale-103
             transition-all duration-300"
              >
                Get Resume
              </a>
            </motion.div>

            <motion.div
              className=" mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {social.map(({ Icon, label, link }) => (
                <motion.a
                  href={link}
                  target="_blank"
                  key={label}
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <div className=" relative hidden lg:block">
          <motion.img
            src={images.profile}
            alt="my profile avatar"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "-30px ",
              width: "min(45vw, 750px )",
              maxHeight: "80vh",
            }}
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
