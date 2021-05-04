import React, { Component } from 'react'
import './Home.css';
import Intro from '../ArticleComponents/Intro/Intro';
import Article from '../ArticleComponents/RegularArticle/Article';
import SkillsArticle from '../ArticleComponents/SkillsArticle/SkillsArticle';

class Home extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <Article 
                Header="A Little Bit About Me" 
                Text="My name is Joshua Smith, and I am an aspiring Front-End Web Developer. I will be graduating with an A.A.S in Web Development,
                and an A.A.S in Software Development, in March of 2022. "
                color="red"/> 
                <SkillsArticle
                Header="Skills"/>
            </div>
        )
    }
}

export default Home;
