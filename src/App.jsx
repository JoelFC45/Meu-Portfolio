import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/Aboutsection";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
          <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
