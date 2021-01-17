import React from 'react';
import './BoxArticle.css';

const Box = (props) => {
    return (
        <div className="Box">
            <h1>{props.Header}</h1>
            <p>{props.Text}</p>
        </div>
    )
}

export default Box;
