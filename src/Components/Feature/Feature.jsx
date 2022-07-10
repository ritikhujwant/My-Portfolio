import React from 'react'
import './Feature.css'

const Feature = ({title, text}) => {
    return (
        <div className="project_features-container__feature">
            <div className="project_features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="project_features-container__feature-text">
                {text}
            </div>
        </div>
    )
}

export default Feature
