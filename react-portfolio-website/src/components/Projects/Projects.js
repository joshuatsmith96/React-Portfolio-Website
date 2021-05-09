import React, { Component } from 'react';
import ProjectIntro from '../ArticleComponents/ProjectIntro/ProjectIntro';
import ProjectContainer from './ProjectContainer';

class Projects extends Component {
    render() {
        return (
            <div>
                <ProjectIntro />
                <ProjectContainer />
            </div>
        )
    }
}

export default Projects;
