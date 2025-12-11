import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Experience from "./Sections/Experience";
// import Education from "./Sections/Education";
import Projects from "./Sections/Projects";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
// import ParticlesBackground from "./Components/ParticlesBackground";
import CustomCursor from "./Components/CustomCursor";
import IntroAnimation from "./Components/IntroAnimation";
import { Routes, Route } from "react-router-dom";
import AllProjects from "./Pages/AllProjects";
import Services from "./Sections/Services";

const App = () => {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <div className="relative gradient-bg text-white">
      {!introDone && <IntroAnimation onfinish={() => setIntroDone(true)} />}

      <CustomCursor />

      {introDone && (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <Skills />
                <Experience />
                {/* <Education /> */}
                <Projects />
                <Services />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
