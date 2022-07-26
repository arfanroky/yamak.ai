import { faArrowsRotate, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className='navContainer'>
            <div className='logo'>
                <span className='blueColor'>Yamak</span>.ai
            </div>
            <ul className='navMenu'>
                <li className='navItem'>Home</li>
                <li className='navItem'>Marketing</li>
                <li className='navItem blueColor'>Social Media</li>
                <li className='navItem'>Sales Copy</li>
                <li className='navItem'>Blogs</li>
                <li className='navItem'>Others</li>
                <li className='navItem badge'>
                    
                    <FontAwesomeIcon icon={faArrowsRotate}/>
                    <span className='notification'>50</span>
                    </li>
                <li className='navItem user'><FontAwesomeIcon icon={faUser}/></li>
            </ul>
        </nav>
    );
};

export default Navbar;