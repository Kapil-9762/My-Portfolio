import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Skills.css'
import SkillCom from '../technology/SkillCom'
import { ImHtmlFive } from "react-icons/im";
import { FaSquareJs } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { MdExplicit } from "react-icons/md";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { BiLogoNetlify } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
const Skills = () => {
  return (
    <div className='skills container' id='skills'>
      <div className="technology">
        <h2>Frontend</h2>      
        <Tilt scale={1.05} className="tech">
           <SkillCom val="HTML" Icon={<ImHtmlFive className='icon' style={{color:"red"}}/> } />
           <SkillCom val="CSS" Icon={<DiCss3 className='icon' style={{color:"blue"}}/> } />
           <SkillCom val="JavaScript" Icon={<FaSquareJs className='icon' style={{color:"yellow"}}/> } />
           <SkillCom val="Boostrap" Icon={<FaBootstrap className='icon' style={{color:"blue"}}/> } />
           <SkillCom val="React" Icon={<FaReact className='icon' style={{color:"aqua"}}/> } />
        </Tilt>
      </div>
      <div className="technology">
        <h2>Backend</h2>
        <Tilt scale={1.05} className="tech">
           <SkillCom val="Node.js" Icon={<IoLogoNodejs className='icon' style={{color:"green"}}/> } />
           <SkillCom val="Express" Icon={<MdExplicit className='icon' style={{color:"white"}}/> } />
           <SkillCom val="MonogoDB" Icon={<SiMongodb className='icon' style={{color:"green"}}/> } />
           <SkillCom val="MySQL" Icon={<SiMysql className='icon' style={{color:"blue"}}/> } />
           <SkillCom val="JAVA (basic)" Icon={<FaJava className='icon' style={{color:"blue"}}/> } />
        </Tilt>
      </div>
      <div className="technology">
        <h2>Tools</h2>
        <Tilt scale={1.05} className="tech">
           <SkillCom val="Git" Icon={<FaGitAlt className='icon' style={{color:"red"}}/> } />
           <SkillCom val="GitHub" Icon={<FaGithub className='icon' style={{color:"black"}}/> } />
           <SkillCom val="VS Code" Icon={<VscVscode className='icon' style={{color:"blue"}}/> } />
           <SkillCom val="Compass" Icon={<SiMongodb className='icon' style={{color:"green"}}/> } />
           <SkillCom val="Netlify" Icon={<BiLogoNetlify className='icon' style={{color:"aqua"}}/> } />
           <SkillCom val="Workbench" Icon={<GrMysql className='icon' style={{color:"aqua"}}/> } />
        </Tilt>
      </div>
    </div>
  )
}

export default Skills
