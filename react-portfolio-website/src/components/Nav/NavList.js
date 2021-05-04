import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom';

const NavList = () => {

    
    const navStyle={
        color: 'white',
        textDecoration: "none",
    };


    return (
        <div className="NavListContainer">
            <ul className="NavList">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>

                <Link style={navStyle} to="/projects">
                    <li>Projects</li>
                </Link>

                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                
                
            </ul>
        </div>
    )
}

export default NavList;
