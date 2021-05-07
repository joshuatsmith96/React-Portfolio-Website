import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import CheckClicked from './CheckClicked';

const MobileNavList = () => {


    const navStyle={
        textDecoration: "none"
    };


    return (
        <div className="MobileNavList">
            <ul>
                <Link style={navStyle} to="/">
                    <li onClick={CheckClicked}>Home</li>
                </Link>

                <Link style={navStyle} to="/projects">
                    <li onClick={CheckClicked}>Projects</li>
                </Link>
                
                <Link style={navStyle} to="/about">
                    <li onClick={CheckClicked}>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default MobileNavList;
