import React from 'react'
import './SkillsIcon.css';

const SkillsIcon = (props) => {

    return (
        <div className="SkillsIcon">
            <h2>{props.Header}</h2>
            <div className="imageStyle">
                <img src={props.Image} alt={props.ImageAlt} />
            </div>
        </div>
    )
}

export default SkillsIcon;
