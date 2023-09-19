import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <ul className='nav'>
                <NavLink
                    to='/'
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `} >
                    Home
                </NavLink>
                <NavLink
                    to='/login'
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `} >
                    Login
                </NavLink>
            </ul>
        </nav>
    );
};
