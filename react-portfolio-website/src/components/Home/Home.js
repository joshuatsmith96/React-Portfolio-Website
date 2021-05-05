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
                <DoubleArticle 
                Header1="Header 1"
                Header2="Header 2"
                Para1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                 in culpa qui officia deserunt mollit anim id est laborum."
                Para2="Enim eu turpis egestas pretium aenean pharetra magna ac. A diam maecenas sed enim ut sem viverra aliquet. Viverra vitae congue 
                eu consequat ac felis. Urna duis convallis convallis tellus. Tortor dignissim convallis aenean et. Nascetur ridiculus mus mauris vitae 
                ultricies leo integer. Tristique senectus et netus et malesuada. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Ut tellus 
                elementum sagittis vitae et. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Pharetra diam sit amet nisl suscipit 
                adipiscing bibendum est ultricies."/>
            </div>
        )
    }
}

export default Home;
