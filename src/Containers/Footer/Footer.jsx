import React from 'react'
import gpt3Logo from '../../logo.svg';
import './Footer.css'

const Footer = () => {
    return (
        <div  className="project_footer section__padding" id="contact">
            <div className="project_footer-heading">
      <h2 className="gradient__text">"Attitude & Ability are Complementary to each other for Success in Life."</h2>
    </div>

    <div className="project_footer-links">
      <div className="project_footer-links_logo">
        <img src={gpt3Logo} alt="project_logo" />
        <p>MERN Stack Web Developer | Blockchain - <br /> Research & Development</p>
      </div>
      <div className="project_footer-links_div">
        <h4>Social Media Links</h4>
        <a href="https://www.facebook.com/ritik.hujwant.3"><p>Facebook</p></a>
        <a href="https://www.linkedin.com/in/mr-ritik-s-hujwant-b43351192/"><p>Linkedin</p></a>
        <a href="https://github.com/ritikhujwant"><p>Github</p></a>
        <a href="https://www.instagram.com/ritik_hujwant/"><p>Instagram</p></a>
      </div>
      <div className="project_footer-links_div">
        <h4>Competitive Coding References</h4>
        <a href="#"><p>CodeChef</p></a>
        <a href="#"><p>CodeForces</p></a>
        <a href="https://www.hackerearth.com/@hujwantritik132"><p>HackerEarth</p></a>
      </div>
      <div className="project_footer-links_div">
        <h4>Publication References</h4>
        <a href="https://ijarsct.co.in/Paper3321.pdf"><p>IJARSCT</p></a>
        <a href="#"><p>IJISRT</p></a>
      </div>
      <div className="project_footer-links_div">
        <h4>Get in touch</h4>
        <p>Here I am mentioning my mailing address</p>
        <p>one can mail over the below address</p>
        <p>hujwantritik132@gmail.com</p>
      </div>
    </div>

    <div className="project_footer-copyright">
      <p>@Ritik S. Hujwant. All rights reserved.</p>
    </div>
        </div>
    )
}

export default Footer
