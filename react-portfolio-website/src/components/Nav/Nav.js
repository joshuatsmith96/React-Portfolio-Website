import React from 'react'
import './Nav.css';
//Component Imports
import NavList from './NavList';
import MobileNav from './MobileNav';

const Nav = () => {
    return (
        <div className="Nav">
            <h3 className="logo">Joshua's Portfolio</h3>
            <NavList />
            <MobileNav />
        </div>
    )
}

export default Nav;
