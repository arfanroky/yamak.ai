import { faArrowsRotate, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navContainer container-fluid">
        
      <div className="navMdContainer d-md-flex justify-content-between align-items-center d-none">
        <div className="logo ">
          <span className="blueColor">Yamak</span>.ai
        </div>
        <ul className="navMenu ">
          <li className="navItem  ">Home</li>
          <li className="navItem ">Marketing</li>
          <li className="navItem blueColor  ">Social Media</li>
          <li className="navItem  ">Sales Copy</li>
          <li className="navItem ">Blogs</li>
          <li className="navItem">Others</li>
          <li className="navItem badge ">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span className="notification ">50</span>
          </li>
          <li className="navItem user ">
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>

      </div>

      <div className="navSmContainer d-md-none d-block">
        <div className="navHeader">
          <p className='fs-2 fw-bold'>
            {' '}
            <span className="blueColor">Yamak</span>.ai
          </p>

          <ul className="userActivity ">
            <li className="notifyIcon">
              <FontAwesomeIcon icon={faArrowsRotate} />
              <span className="notification">50</span>
            </li>
            <li className="userIcon">
              <FontAwesomeIcon icon={faUser} />
            </li>
          </ul>
        </div>

        <ul className="navMenu navSmMenu  ">
          <li className="navItem fs-6 
           me-2">Home</li>
          <li className="navItem fs-6 
           me-2">Marketing</li>
          <li className="navItem blueColor  fs-6 
           me-2">
            Social Media
          </li>
          <li className="navItem  fs-6 
           me-2">Sales Copy</li>
          <li className="navItem  fs-6 
           me-2">Blogs</li>
          <li className="navItem fs-6 
           me-2">Others</li>
          <li className="navItem badge fs-6 
           me-2">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span className="notification ">50</span>
          </li>
          <li className="navItem user fs-6 
           me-2 ">
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
