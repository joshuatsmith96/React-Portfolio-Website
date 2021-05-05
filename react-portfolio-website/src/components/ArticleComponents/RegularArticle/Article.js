import React from 'react'
import './Article.css';
import {Link} from 'react-router-dom';

const Article = (props) => {

    const newStyle = {
        color: "black",
        textDecoration: "none"
    };

    const Button = props.Button;

    if(Button=="true"){
        return (
            <div className="Article">
                <h1>{props.Header}</h1>
                <p>{props.Text}</p>
                <Link style={newStyle} to="/about">
                    <h2>Learn More About Josh</h2>
                </Link>
            </div>
        )
    } else if (Button=="False"){
        return (
            <div className="Article">
                <h1>{props.Header}</h1>
                <p>{props.Text}</p>
            </div>
        )
    } else {
        return (
            <div className="Article">
                <h1>{props.Header}</h1>
                <p>{props.Text}</p>
            </div>
        )
    }

    
}

export default Article;
