import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Title from './components/title/Title';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import { Toaster } from "react-hot-toast";
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
// import { div } from 'framer-motion/client';
const App = () => {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    const ready = () => setLoading(false);
    if (document.readyState === "complete") {
      ready();
    } else {
      window.addEventListener("load", ready);
    }
    return () => {
      window.removeEventListener("load", ready);
    };
  }, []);
  return (
    <div>
      {loading ? <Loader/> :
        <div>
          <Toaster/> 
      <Navbar />
      <Hero />
      <div>
        <Title title="ABOUT" disc=" A passionate web developer building modern web experiences."/>
        <About/>
        <Title title="SKILLS" disc="A collection of my technical skills behind my development process"/>
        <Skills/>
        <Title title="PROJECTS" disc="A showcase of the projects i have worked on highlighting my skills and experience in various technologies"/>
        <Projects/>
        <Title title="Contact" disc="Let’s talk and create something amazing together"/>
        <Contact/>
      </div>
      <Footer/>
      </div>
      }
    </div>
  )
}

export default App
