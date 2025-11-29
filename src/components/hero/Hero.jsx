import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import './Hero.css'
import photo from '../../assets/myphoto.png';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
const Hero = () => {
    const texts = ["UI/UX Designer", "Web Developer", "Full Stack Developer"];
    const [val, setVal] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => (prev + 1) % texts.length);
    }, 3000); // 1 second
    return () => clearInterval(interval); // cleanup
  }, [texts]);
  return (
      <div className="home-section container">
        <div className="style-box"></div>
         <div className="home-disc">
            <h3>Hi I'm</h3>
            <h1>Kapil Prajapati</h1>
              <h3>I'm a <span className='dynamic-disc'>{texts[val]}</span></h3>
            <p>I'm a creative designer based in Uttar Pradesh, and I'm very passiotate and dedicated to my work</p>
            <div className="home-soialLinks">
                <a href="#"><FaLinkedin/></a>
                <a href="https://github.com/Kapil-9762" target='_blank'><FaGithubSquare/></a>
            </div>
            <a className='btn' href="#about">About Me</a>
         </div>
         <div className="home-img">
              <Tilt><img src={photo}  alt="photo" /></Tilt>
              <div className="style-box2"></div>
         </div>
         
      </div>
  )
}

export default Hero
