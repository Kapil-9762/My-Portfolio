import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <h3>Kapil Prajapati</h3>
      <ul>
        <li><FaLinkedin style={{color:"rgba(0, 92, 179, 1)"}}/></li>
        <li><FaGithub style={{color:"rgb(180, 180, 180)"}}/></li>
        <li><FaInstagramSquare style={{color:"rgba(255, 61, 181, 0.68)"}}/></li>
        <li><FaTwitterSquare style={{color:"rgb(0, 132, 255)"}}/></li>
      </ul>
      <p>Ⓒ 2025 Kapil Prajapati, all rights reserved.</p>
    </div>
  )
}

export default Footer
