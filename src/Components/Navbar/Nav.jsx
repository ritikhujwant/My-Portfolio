import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './Nav.css'
import logo from '../../assets/logo.svg';

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="project_navbar">
            <div className="project_navbar-links">
                <div className="project_navbar-links_logo">
                     <p className="p1 gradient__text logo1"><a href="#home">R.HUJWANT</a></p>
                </div>
                <div className="project_navbar-links_container">
                    <p className="p1"><a href="#home">HOME</a></p>
                    <p className="p1"><a href="#about">ABOUT</a></p>
                    <p className="p1"><a href="#expertise">EXPERTISE</a></p>
                    <p className="p1"><a href="#experience">EXPERIENCE</a></p>
                    <p className="p1"><a href="#portfolio">PORTFOLIO</a></p>
                    <p className="p1"><a href="#blog">BLOG</a></p>
                    <p className="p1"><a href="#contact">CONTACT</a></p>
                </div>
            </div>
            
            <div className="project_navbar-menu">
            {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="project_navbar-menu_container scale-up-center">
          <div className="project_navbar-menu_container-links">
            <p><a href="#home">HOME</a></p>
            <p><a href="#about">ABOUT</a></p>
            <p><a href="#expertise">EXPERTISE</a></p>
            <p><a href="#experience">EXPERIENCE</a></p>
            <p><a href="#portfolio">PORTFOLIO</a></p>
            <p><a href="#contact">BLOG</a></p>
            <p className="p1"><a href="#contact">CONTACT</a></p>
          </div>
          
        </div>
        )}
      </div>
  </div>
  
    )
}

export default Nav
