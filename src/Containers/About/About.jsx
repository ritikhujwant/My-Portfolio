import React from 'react'
import Feature from '../../Components/Feature/Feature'
import Resume from '../../assets/Ritik_Hujwant_Resume.pdf';
import './About.css'

const About = () => {
    return (
        <><div className="head">
            <h1 className="gradient__text">About Me</h1>
        </div>
        <div className="project_about section__margin" id="about">
            <div className="project_about-feature">
                <Feature title="My Description" text="I am flexible, reliable and possess excellent time keeping skills with high level of enthusiasm, self motivation and mature team worker and even adaptable to challenging situations."/>
            </div>
            <div className="project_about-heading">
                <h1 className="gradient__text">
                    Here, I have mentioned about Myself
                </h1>
                <a href={Resume} download><p>Download My Resume</p></a>
            </div>
            <div className="project_about-container">
                <Feature title="Education" text="Graduated in Bachelor of Engineering in Information Technology branch from Shri Sant Gajanan Maharaj College of Engineering Shegaon."/>
                <Feature title="Interests" text="Interested in Problem Solving in my domain and interested in Cloud computing and functioning backend technology like blockchains development."/>
                <Feature title="Languages" text="Comfortable in any environment with 3 languages as English, Hindi and Marathi and uses English as my working proficiency language."/>
            </div>
        </div></>
    )
}

export default About
