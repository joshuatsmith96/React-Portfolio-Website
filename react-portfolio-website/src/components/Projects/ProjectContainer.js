import React from 'react'
import './ProjectTile.css';
import ProjectTile from '../Projects/ProjectTile';
import PortfolioImage from '../Images/myWebsiteImage.png';

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
                Link="https://www.facebook.com"/>
                <ProjectTile 
                Header="Project 2"
                Text="This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah"/>
            </div>
        </div>
    )
}

export default ProjectContainer;
