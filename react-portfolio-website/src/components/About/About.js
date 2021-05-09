import React, { Component } from 'react'
import './About.css';
import AboutIntro from '../ArticleComponents/AboutIntro/AboutIntro';
import DoubleArticle from '../ArticleComponents/DoubleArticle/DoubleArticle';

class About extends Component {
    render() {
        return (
            <div className="About">
                <AboutIntro />
                <DoubleArticle 
                Header1="Military Overview"
                Para1="I joined the US Army in early February of 2015. This decision
                changed my life forever. It was in the Armed Forces that I learned the true
                meaning of hard work, dedication, and leadership. I spent my first year and a half
                learning and growing. During my last year, I was stationed at Camp Humphreys, South
                Korea. While I was stationed here, I was given a leadership position. Leading a group of 6
                soldiers really taught me what it meant to be a good leader. I left the Army
                on October, 2018 with an Honorable Discharge."
                Header2="School Overview"/>
            </div>
        )
    }
}

export default About;
