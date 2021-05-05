import React, { Component } from 'react'
import './Home.css';
import Intro from '../ArticleComponents/Intro/Intro';
import Article from '../ArticleComponents/RegularArticle/Article';
import SkillsArticle from '../ArticleComponents/SkillsArticle/SkillsArticle';
import DoubleArticle from '../ArticleComponents/DoubleArticle/DoubleArticle';

class Home extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <Article 
                Header="A Little Bit About Joshua" 
                Text="My name is Joshua Smith, and I am an aspiring Front-End Web Developer. I will be graduating with an A.A.S in Web Development,
                and an A.A.S in Software Development, in March of 2022. "
                Button="true"/> 
                <SkillsArticle
                Header="Skills"/>
                <Article 
                Header="Why Hire Joshua" 
                Text="Aside from the skill set Joshua has gained since going to school and learning many things on his own, he believes that he brings a unique perspective to the table. He has had exposure to many different
                types of work to include Customer Service, IT, and Network Interfaces. Joshua also has military experience, which has taught him
                the meaning of hard work, leadership, organization, respect and timeliness. It is through these combined experiences that make 
                Joshua a highly sought after candidate. He is an extremely driven individual who works until the job is done."
                Button="false"/>
            </div>
        )
    }
}

export default Home;
