import React from 'react'
import './Article.css'

const Article = ({ imgUrl, date, text }) => {
    return (
        <div className="project_article-container_article">
            <div className="project_article-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="project_article-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href="https://github.com/ritikhujwant?tab=repositories"><p>View Source Code on Github</p></a>
    </div>
        </div>
    )
}

export default Article
