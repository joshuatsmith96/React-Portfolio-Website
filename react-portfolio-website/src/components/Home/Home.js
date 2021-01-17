import React, { Component } from 'react'
import './Home.css';
import Intro from '../ArticleComponents/Intro/Intro';
import BoxArticle from '../ArticleComponents/BoxArticle/BoxArticle';
import Article from '../ArticleComponents/RegularArticle/Article';

class Home extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <Article 
                Header="About Me" 
                Text="Text about me"/>
            </div>
        )
    }
}

export default Home;
