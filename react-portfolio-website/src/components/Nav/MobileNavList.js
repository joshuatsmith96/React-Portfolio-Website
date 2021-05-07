import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import Clicked from './Clicked'

const MobileNavList = () => {


    const navStyle={
        textDecoration: "none"
    };



    return (
        <div className="MobileNavList">
            <ul>
                <Link style={navStyle} to="/">
                    <li onClick={Clicked}>Home</li>
                </Link>

                <Link style={navStyle} to="/projects">
                    <li onClick={Clicked}>Projects</li>
                </Link>
                
                <Link style={navStyle} to="/about">
                    <li onClick={Clicked}>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default MobileNavList;
