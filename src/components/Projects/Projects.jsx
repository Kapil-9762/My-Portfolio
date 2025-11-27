import React from 'react'
import './Projects.css';
import Project from './Project'
import project_1 from '../../assets/edusity.png'
import project_2 from '../../assets/gracolor.png'
import project_3 from '../../assets/ticTac.png'
import project_4 from '../../assets/weather.png'
const Projects = () => {
    const proTech1 = ["HTML", "CSS", "JavaScript", "React"];
    const proTech2 = ["HTML", "CSS", "JavaScript"];
    const proTech3 = ["HTML", "CSS", "JavaScript"];
  const proTech4 = ["HTML", "CSS", "JavaScript", "API"];
  
  const gradientColor = { git: `https://github.com/Kapil-9762/Gradient-Color-generator`, live: `https://gradientuniquecolor.netlify.app/` };

  const weatherApp = { git: `https://github.com/Kapil-9762/Weather-App`, live: `https://weatherappcity9648.netlify.app/` };

  const ticTacToe = { git: `https://github.com/Kapil-9762/Tic-Tac-Tao`, live: `https://tictactoe9648.netlify.app/` };

  const edusityProject = { git: `https://github.com/Kapil-9762/Edusity-College-UI`, live: `https://edusity-college-ui.vercel.app/` };

  return (
    <div className='projects container'>
          <Project project={project_1} title="Edusity" disc="Edusity is a modern education platform built with React, featuring responsive design, smooth navigation, and course presentation for a clean learning experience." proTech={proTech1} projectsLinks={edusityProject}/>
          <Project project={project_2} title="GradientCol Generator" disc="A simple and modern gradient generator built with HTML, CSS, JS that lets users create, preview, and copy beautiful linear-gradient color combinations." proTech={proTech2} projectsLinks={gradientColor} />
          <Project project={project_3} title="Tic Tac Toe Game" disc="A simple and interactive Tic Tac Toe game built with HTML, CSS , JS, featuring clean UI and smooth game logic." proTech={proTech3} projectsLinks={ticTacToe}/>
         <Project project={project_4} title="Weather Web App" disc="A simple weather app that shows real-time temperature, humanity, pressure, wind, feels like, conditions, and city-wise weather updates using API data." proTech={proTech4} projectsLinks={weatherApp}/>
    </div>
  )
}

export default Projects
