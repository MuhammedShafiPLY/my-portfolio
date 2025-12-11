// src/constants/projectData.js
import { images } from "../assets/assets"; // Assuming you have images here

export const projectsData = [
  {
    id: 1,
    title: "GSI",
    category: "Performance Marketer",
    image: images.project1, // Replace with your actual image variable
    color: "#006D9E", // Blue
    link: "https://react-icons.github.io/react-icons/"
  },
  {
    id: 2,
    title: "Mehab Studio",
    category: "E-Commerce Store",
    image: images.project2,
    color: "#B8862F", // Gold/Mustard
    link: "/projects/manha"
  },
  {
    id: 3,
    title: "Textora",
    category: "Educational Platform",
    image: images.project3,
    color: "#E61B23", // Red
    link: "/projects/speak-eazy"
  },
  {
    id: 4,
    title: "Vidya Portal",
    category: "LMS System",
    image: images.project4,
    color: "#188d55", // Green
    link: "/projects/vidya"
  },
  // ... Add 21 more projects here
  {
    id: 5,
    title: "Auto Tech",
    category: "Corporate Website",
    image: images.project1,
    color: "#4B5563", // Grey
    link: "/projects/autotech"
  },
  // ...
];