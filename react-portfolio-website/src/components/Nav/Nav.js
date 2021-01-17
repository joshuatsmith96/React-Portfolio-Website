import React from 'react'
import './Nav.css';
//Component Imports
import NavList from './NavList';
import MobileNav from './MobileNav';

const Nav = () => {
    return (
        <div className="Nav">
            <h2 className="logo">Joshua's Portfolio</h2>
            <NavList />
            <MobileNav />
        </div>
    )
}

export default Nav;
