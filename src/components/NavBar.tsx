import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="logo.png" alt="Logo" className="logo" />
                </Link>
                <button className="menu-icon" onClick={handleMenuToggle}>
                    <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>
            </div>
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <Link to="/" className="nav-link" onClick={handleMenuToggle}>Home</Link>
                <Link to="/services" className="nav-link" onClick={handleMenuToggle}>Services</Link>
                <Link to="/about" className="nav-link" onClick={handleMenuToggle}>About</Link>
                <Link to="/contact" className="nav-link" onClick={handleMenuToggle}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
