import { Link } from 'gatsby'
import { IconContext } from "react-icons";
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail, MdClose } from 'react-icons/md';
import React from 'react'
import { colors } from '../constants/colors';

function ScaledIcon({ children }) {
  return (
    <IconContext.Provider
      value={{ size: '32px' }}
    >
      { children }
    </IconContext.Provider>
  )
}

const showSidebar = () => {
  document.querySelector('.sidebar').style.display = 'flex';
};

const hideSidebar = () => {
  document.querySelector('.sidebar').style.display = 'none';
}

export default function Navbar( { isGrey, isPurple } ) {
  const color = isGrey ? colors.dark_grey : isPurple ? colors.purple : colors.white;
  const menuItems = [
    ['Home', '/'], 
    ['About', '/about']
    // ['Knowledge Graph', '/knowledgeGraph']
  ];
  return (
    <nav>
        <div className='nav-container'>
          <div className="socials">
              <a href="https://linkedin.com/in/tales-scopinho/" target="_blank" rel="noreferrer" aria-label="Linkedin Page"><ScaledIcon ><FaLinkedin fill={color} /></ScaledIcon></a>
              <a href="https://instagram.com/tales.py/" target="_blank" rel="noreferrer" aria-label="Instagram Page"><ScaledIcon ><FaInstagram fill={color} /></ScaledIcon></a>
              <a href="https://twitter.com/otalyco/" target="_blank" rel="noreferrer" aria-label="Twitter Page"><ScaledIcon ><FaTwitter fill={color}  /></ScaledIcon></a>
              <a href="mailto:tales@scopinho.com?subject=scopinho.com | Let's Talk!" target="_blank" rel="noreferrer" aria-label="Email Address" style={{marginLeft: "30px"}}><ScaledIcon ><MdOutlineMail fill={color}  /></ScaledIcon></a>
          </div>
          <div className="navbar-toggle" onClick={showSidebar}>
            <span className='bar' style={{backgroundColor: color}}></span>
            <span className='bar' style={{backgroundColor: color}}></span>
            <span className='bar' style={{backgroundColor: color}}></span>
          </div>
          <div className="sidebar">
            <div onClick={hideSidebar}><ScaledIcon><MdClose fill={colors.purple}  /></ScaledIcon></div>
            <div className='sidebar-links'>
              { menuItems.map((item) =>   
              <Link to={item[1]}
                    title={item[0]}
                    key={item[0]}> 
                {item[0]} 
              </Link>) }
              <a href="resume.pdf" title="CV">CV</a>
            </div>
          </div>
          <div className="links">
            { menuItems.map((item) =>   
            <Link to={item[1]} 
                  style={{color: color}}
                  title={item[0]}
                  key={item[0]}> 
              {item[0]} 
            </Link>) }
            <a href={"../".repeat(window.location.pathname.split("/").filter((val) => val !== "").length) + "resume.pdf"} title="CV" style={{color: color}}>CV</a>
          </div>
        </div>
    </nav>
  )
}
