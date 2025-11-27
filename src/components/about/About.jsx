import React from 'react'
import Tilt from 'react-parallax-tilt';
import photo from '../../assets/myphoto.png'
import './About.css'
const About = () => {
  return (
     <div className="about" id='about'>
         <Tilt className="about-img">
         <img src={photo} alt="photo"/>
        </Tilt>
      <div className="about-title">
        <h3><span className='tle'>Name: </span><span className='tle-disc'>Kapil Prajapati</span></h3>
        <h3><span className='tle'>Address: </span><span className='tle-disc'>Uttra Pradesh, Gonda 271603</span></h3>
      </div>
         <div className="about-disc">
         <p>I’m a <span style={{color:"aqua"}}>Web Developer</span> who loves building clean and user-friendly websites.
            I enjoy learning new technologies and improving my development skills.
            My goal is to become a strong full-stack developer and work on meaningful real projects, i have knowledge of many technologies such as  <span style={{color:"orange"}}>Frontend (HTML, CSS, JavaScript, React)</span>, <span style={{color:"green"}}>Backend(Node.js, Express.js)</span>, <span style={{color:"yellow"}}>Database(MongoDB, MySQL(basic))</span> ete. please see my resume one time...</p>
         <a href="#" className='btn'>Resume</a>
         </div>
    </div>
  )
}

export default About
