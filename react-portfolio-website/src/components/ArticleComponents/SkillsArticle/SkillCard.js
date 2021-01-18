import React from 'react';
import './SkillsArticle.css';

const SkillCard = (props) => {

    const percent = props.Percent

    return (
        <div className="SkillCard">
            <h2>{props.Header}</h2>
            <img src={props.Image} width="200px" height="200px"/>
            <div className="progressBar">
                <div style={{width:percent + "%"}} className="progress"></div>
                <p>{percent + "% Proficient"}</p>
            </div>
        </div>
    )
}

export default SkillCard;
