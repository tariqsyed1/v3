import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../Assets/logo.svg';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <NavLink to="/"><img src={Logo} alt='' style={{'width': '15%'}}/></NavLink>
            </div>
            <div className="navbar-links">
                <NavLink to="/" activeClassName="active">Info</NavLink>
                <NavLink to="/work" activeClassName="active">Work</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
