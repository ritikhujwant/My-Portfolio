import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import Resume from '../../assets/Ritik_Hujwant_Resume.pdf';
import './Header.css'

const Header = () => {
    return (
        <div className="project_header section__padding" id="home">
        <div className="project_header-content">
          <h1 className="gradient__text">Hello Everyone! I am<br/>Ritik S. Hujwant,<br/>Software Development Engineer</h1>
          <p>Aims to work in the environment which encourages me to succeed and grow professionally where I can utilize my technical as well as leadership skills and knowledge for growth of company.</p>
    
          <div className="project_header-content__input">
          {/*  <input type="email" placeholder="Your Email Address" />   */}
            <a href={Resume} download><button type="button">Download Resume</button></a>
            <a href="https://medium.com/@hujwantritik132"><button type="button">Visit My Blog</button></a>
          </div>
    
          <div className="project_header-content__people">
            <img src={people} />
            <p>As a Blogger, I have guided to many techies.</p>
          </div>
        </div>
    
        <div className="project_header-image">
          <img src={ai} />
        </div>
      </div>
    );
}

export default Header