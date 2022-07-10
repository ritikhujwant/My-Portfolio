import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './Possibility.css'

const Possibility = () => {
    return (
        <><div className="head">
            <h1 className="gradient__text">My Experiences</h1>
        </div>
        <div className="project_experience section__padding" id="experience">
    <div className="project_experience-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="project_experience-content">
      <h4>MERN Stack Web Developer</h4>
      <h1 className="gradient__text">I am SDE @<br />Persistent Systems Ltd.</h1>
      <p>Currently I am working as a Software Engineer at Persistent Systems where my duty is to create wonderful Frontend UI for web application which is assigned, using React library of JavaScript and also works with backend team and Delivery team.</p>
      <h4>I am experienced in Android App Development too.</h4>
    </div>
  </div>
        </>
    )
}

export default Possibility
