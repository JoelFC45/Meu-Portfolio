import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AboutSection from "./components/Aboutsection";
function App() {
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
