import React from 'react'
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import Article from '../../Components/Article/Article';
import './Brand.css'

const Brand = () => {
    return (
        <><div className="head">
            <h1 className="gradient__text">My Portfolio</h1>
        </div>
        <div className="project_portfolio section__padding" id="portfolio">
        <div className="project_portfolio-heading">
      <h1 className="gradient__text">I have some projects to Showcase...</h1>
    </div>
    <div className="project_portfolio-container">
      <div className="project_portfolio-container_groupA">
        <Article imgUrl={blog01} text="MyCloud Services - Cloud Based Android Application for storage" />
      </div>
      <div className="project_portfolio-container_groupB">
        <Article imgUrl={blog02} text="Voice Assistent Desktop App using Python" />
        <Article imgUrl={blog03} text="Transforming Education system in Blockchain" />
        <Article imgUrl={blog04} text="Social Media web application" />
        <Article imgUrl={blog05} text="File Locker using RSA Encryption Algorithm" />
      </div>
    </div>
   </div>
   </>
    )
}

export default Brand
