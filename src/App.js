import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Links from "./components/Links";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />

      <div className="container">
        <Links />
        <Home />
        <Experience />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Education />
        <hr />
        <Contact />
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default App;
