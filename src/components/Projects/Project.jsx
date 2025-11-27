import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Project.css';
const Project = ({ project, disc, title, proTech, projectsLinks}) => {
  // const proTech = proTech.proTech;
  return (
    <div className='project'>
      <div className='content'>
        <Tilt><img src={project} alt="project photo"/></Tilt>
        <h1>{title}</h1>
        <p>{disc}</p>
        <div className="technologies">
        {proTech.map((name, index) => (
         <p key={index}>{name}</p>
       ))}
      </div>
      </div>
      <div className="link">
        <a href={projectsLinks.git} target="_blank" rel="noopener noreferrer">Source Code</a>
        <a href={projectsLinks.live} target="_blank" rel="noopener noreferrer">Live Preview</a>
      </div>
    </div>
  )
}

export default Project
