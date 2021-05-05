import React from 'react'
import './ImageArticle.css';

const ImageArticle = (props) => {
    return (
        <div className="ImageArticle">
            <img src={props.Image} alt={props.Alt} />
            <p>{props.Para}</p>
        </div>
    )
}

export default ImageArticle;
