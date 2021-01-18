import React from 'react'
import './Article.css';
import {Link} from 'react-router-dom';

const Article = (props) => {

    const newStyle = {
        color: "black",
        textDecoration: "none"
    };

    return (
        <div className="Article">
            <h1>{props.Header}</h1>
            <p>{props.Text}</p>
            <Link style={newStyle} to="/about">
                <h2>More About Me</h2>
            </Link>
        </div>
    )
}

export default Article;
