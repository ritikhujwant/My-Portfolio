import React from 'react'
import Feature from '../../Components/Feature/Feature'
import './Features.css'

const featuresData = [
    {
      title: 'UI/UX Designing',
      text: 'Expertise in UI/UX and graphics designing using multiple softwares such Adobe XD, Adobe Illustrator and Figma with higher working poficiency.',
    },
    {
      title: 'Development Frameworks & Skills',
      text: 'I am a web developer adopted MERN stack as my development strategy. Skilled in React library of Javascript, Node js and concepts of Rest API.',
    },
    {
      title: 'Domain Expertise',
      text: 'The domain in which I am working is Blockchain based application development, creating smart contacts and handling security events in the application.',
    },
    {
      title: 'Coding Languages',
      text: 'For Problem Solving and Competitive Coding I prefer C++ as my coding language as it is smooth, provides greater library support, and large community support.',
    },
  ];

const Features = () => {
    return (
        <><div id="expertise">
            <div className="head">
                <h1 className="gradient__text">My Expertise</h1>
            </div>
        </div>
        <div className="project_features section__padding">
            <div className="project_features-heading">
                <h1 className="gradient__text">In the timespan of graduation programme, I have acquired different skills. These I have mentioned by the side.</h1>
                <a href="https://drive.google.com/drive/folders/1XIGHstv1jRMGnOvoYkbrj1jT2JgVlvna?usp=sharing"><p>Click Here to view my Certifications</p></a>
            </div>
            <div className="project_features-container">
            {featuresData.map((item, index) => (
           <Feature title={item.title} text={item.text} key={item.title + index} />
               ))}
            </div>
        </div>
        </>
    )
}

export default Features
