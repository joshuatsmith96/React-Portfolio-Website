import React, { Component } from 'react'
import './About.css';
import AboutIntro from '../ArticleComponents/AboutIntro/AboutIntro';

class About extends Component {
    render() {
        return (
            <div className="About">
                <AboutIntro />
            </div>
        )
    }
}

export default About;
