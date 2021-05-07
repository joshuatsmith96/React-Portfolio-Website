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
                Header1="Header 1"
                Header2="Header 2"
                Para1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                Para2="Vitae congue mauris rhoncus aenean vel. Magna fermentum iaculis eu non diam phasellus vestibulum. Integer quis auctor elit sed vulputate mi. Adipiscing tristique risus nec feugiat in. Metus aliquam eleifend mi in nulla posuere. Ut sem viverra aliquet eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Semper auctor neque vitae tempus quam. Vitae proin sagittis."/>
            </div>
        )
    }
}

export default About;
