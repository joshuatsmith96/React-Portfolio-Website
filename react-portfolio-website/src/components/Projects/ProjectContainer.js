import React from 'react'
import './ProjectTile.css';
import ProjectTile from '../Projects/ProjectTile';
import PortfolioImage from '../Images/myWebsiteImage.png';
import BudgetImage from '../Images/BudgetImage.png';
import Mentalhealth from '../Images/MentalHealth.png';
import ItalianPage from '../Images/ItalianPage.png';
import TheStory from '../Images/TheStory.png';

const ProjectContainer = (props) => {
    return (
        <div className="ProjectContainer">
            <div className="ProjectHolder">
                <ProjectTile 
                Header="Portfolio Website"
                Image={PortfolioImage}
                Text="The code for this website. My portfolio website was 
                created using HTML, CSS, JavaScript, and the React Framework.
                All components and images were created by me."
                Link="https://github.com/joshuatsmith96/React-Portfolio-Website"/>
                <ProjectTile 
                Header="Budget App"
                Image={BudgetImage}
                Text="This web application was made using HTML, CSS and Javascript. This 
                application allows a user to input their monthly expenses, and the app
                will tell you what your total monthly costs are."
                Link="https://joshuatsmith96.github.io/Budget-Planner-Application/"/>
                <ProjectTile 
                Header="M.H. Website"
                Image={Mentalhealth}
                Text="This website was created using HTML and CSS. I made this website for a
                class project during my first semester of school. The idea and design was inspired
                by my wife who is a Phsyciatric Technician."
                Link="https://joshuatsmith96.github.io/Mental-Health-Website/"/>
                <ProjectTile 
                Header="Italian Restaurant"
                Image={ItalianPage}
                Text="This website was created using HTML, CSS and Javascript. I made this
                landing page as a proof of concept. This landing page includes a form in which users
                can reserve a table."
                Link="https://joshuatsmith96.github.io/ItalianRestaurant/"/>
                <ProjectTile 
                Header="'The Story'"
                Image={TheStory}
                Text="'The Story' is a python based, text adventure game. This game starts you off
                as the only survivor of a plane crash. Every choice you make will determine what kind
                of ending you will get."
                Link="https://github.com/joshuatsmith96/theStory"/>
            </div>
        </div>
    )
}

export default ProjectContainer;
