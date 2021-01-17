import React from 'react';
import './Intro.css';

const Icons = (props) => {
    return (
        <div className="Icons">
            <img src={props.Image} />
            <p>{props.ImageText}</p>
        </div>
    )
}

export default Icons;
