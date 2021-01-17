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
                Header="About Me" 
                Text="Incididunt incididunt Lorem tempor deserunt. Quis labore aliquip aute consequat quis do aliqua culpa incididunt tempor sunt reprehenderit Lorem. Commodo eu qui incididunt reprehenderit aute. Esse labore mollit consequat veniam qui velit adipisicing reprehenderit dolore velit minim. Do deserunt ut incididunt elit adipisicing occaecat aute enim. Elit officia in aliqua id do irure irure velit laboris. Tempor qui tempor aute excepteur. Click Here To Learn More"/> 
                <SkillsArticle />
            </div>
        )
    }
}

export default Home;
