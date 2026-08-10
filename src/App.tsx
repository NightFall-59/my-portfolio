import { useState } from "react";
import "./styles/App.css";

import PageChange from "./components/PageChange";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import "./styles/Transitions.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <AnimatedBackground />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <PageChange />
      <PageTransition />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;