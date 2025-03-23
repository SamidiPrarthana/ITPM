import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navBar.css';
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import icons

function Navbar({ isLoggedIn, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Apartment CMS
        </Link>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to="/maintenance" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>
              Maintenance
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/parking" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>
              Smart Parking
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Complaints" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>
              Marketplace
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CDetails" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MDetails" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>
              Customer Login
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="nav-item">
              <button className="nav-links" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="MDetailsAdminSide" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>
                <FaUser /> Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;