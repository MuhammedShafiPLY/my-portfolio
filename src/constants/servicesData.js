import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaServer, FaWordpress } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Building scalable web applications from scratch using the MERN Stack (MongoDB, Express, React, Node.js).",
    icon: FaCode,
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    title: "WordPress Development",
    description: "Custom theme development, plugin integration, and performance optimization for CMS-based websites.",
    icon: FaWordpress,
    color: "from-blue-600 to-cyan-400"
  },
  {
    id: 3,
    title: "UI/UX Implementation",
    description: "Translating complex design wireframes into responsive, interactive, and pixel-perfect code interfaces.",
    icon: FaPaintBrush,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Responsive Web Design",
    description: "Creating fluid layouts that work flawlessly across all devices, from mobile phones to large desktop screens.",
    icon: FaMobileAlt,
    color: "from-green-400 to-green-600"
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Implementing technical SEO best practices to ensure your website ranks higher and loads faster.",
    icon: FaSearch,
    color: "from-orange-400 to-red-500"
  },
  {
    id: 6,
    title: "Backend API Integration",
    description: "Developing robust RESTful APIs and integrating third-party services for seamless data flow.",
    icon: FaServer,
    color: "from-yellow-400 to-orange-500"
  },
];