import React from 'react'
import './ProjectTile.css';
import ProjectTile from '../Projects/ProjectTile';
import Image1 from '../Images/Image1.jpg';

const ProjectContainer = (props) => {
    return (
        <div className="ProjectContainer">
            <div className="ProjectHolder">
                <ProjectTile 
                Header="Project 1"
                Image={Image1}
                Text="This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah"/>
                <ProjectTile 
                Header="Project 2"
                Text="This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah"/>
                <ProjectTile 
                Header="Project 3"
                Text="This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah"/>
                <ProjectTile 
                Header="Project 4"
                Text="This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah"/>
                <ProjectTile 
                Header="Project 5"
                Text="This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah
                This is some text about the project. Blah de blah de blah"/>
            </div>
        </div>
    )
}

export default ProjectContainer;
