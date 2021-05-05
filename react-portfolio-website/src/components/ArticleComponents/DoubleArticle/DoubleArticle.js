import React from 'react'
import './DoubleArticle.css';

const DoubleArticle = (props) => {
    return (
        <div className="DoubleArticle">
            <div className="da1">
                <h1>{props.Header1}</h1>
                <p>{props.Para1}</p>
            </div>
            <div className="da2">
                <h1>{props.Header2}</h1>
                <p>{props.Para2}</p>
            </div>
        </div>
    )
}

export default DoubleArticle;
