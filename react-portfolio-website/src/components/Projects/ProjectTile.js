import React from 'react'
import './ProjectTile.css';


const ProjectTile = (props) => {
    return (
        <div className="ProjectTile">
            <h1>{props.Header}</h1>
            <img src={props.Image} alt={props.Alt} />
            <p>{props.Text}</p>
        </div>
    )
}

export default ProjectTile;
