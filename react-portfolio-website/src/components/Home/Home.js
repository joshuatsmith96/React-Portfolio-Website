import React, { Component } from 'react'
import './Home.css';
import Intro from '../ArticleComponents/Intro/Intro';
import BoxArticle from '../ArticleComponents/BoxArticle/BoxArticle';

class Home extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <BoxArticle />
            </div>
        )
    }
}

export default Home;
