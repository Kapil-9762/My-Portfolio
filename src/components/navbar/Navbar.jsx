import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import Tilt from 'react-parallax-tilt';
import './Navbar.css'
import { VscThreeBars } from "react-icons/vsc";
import { motion } from "framer-motion";
import { fadeUp2 } from '../animationVariants/animationVariant';
const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    }
    else {
      setMobileMenu(true);
    }
  }
  return (
    <motion.div  initial="hidden"
      animate="show" variants={fadeUp2}  transition={{ duration: 0.8 }} className={`navbar ${navBg ? "after-scroll" : ""}`}>
      <Tilt scale={1.1}><h1 id="logo"><span>&lt;</span>Kapil <span>/ </span>Prajapati<span>&gt;</span></h1></Tilt>
      <div className='flex menu' style={{position:"relative"}}>
        <nav className="nav-items">
          <Link className='item' to="home-section" smooth={true} offset={-180} duration={500}>HOME</Link>
          <Link className='item' to="about" smooth={true} offset={-230} duration={500}>ABOUT</Link>
          <Link className='item' to="skills" smooth={true} offset={-235} duration={500}>SKILLS</Link>
          <Link className='item' to="projects" smooth={true} offset={-210} duration={500}>PROJECTS</Link>
        </nav>
        <Link to="contact" smooth={true} offset={-215} duration={500} style={{ color: "white" }} className='btn'>CONTACT</Link>
      </div>
      <div className='mobile-menu' style={mobileMenu ? {display:"flex"} : {display:"none"}}>
       <nav className="nav-items">
          <Link className='item' to="home-section" smooth={true} offset={-200} duration={500}>HOME</Link>
          <Link className='item' to="about" smooth={true} offset={-210} duration={500}>ABOUT</Link>
          <Link className='item' to="skills" smooth={true} offset={-225} duration={500}>SKILLS</Link>
          <Link className='item' to="projects" smooth={true} offset={-210} duration={500}>PROJECTS</Link>
        </nav>
        <Link to="contact" smooth={true} offset={-215} duration={500} style={{ color: "white" }} className='btn'>CONTACT</Link>
      </div>
       <button className="humburger" onClick={handleMobileMenu}><VscThreeBars/></button>
    </motion.div>
  )
}

export default Navbar
