import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'; 
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
                    <img src="/images/Webworks labs.png" alt="Logo" className="logo" />
                </Link>
                
            </div>
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                 {/* Logo on small screens */}
                 <Link to="/">
                    <img src="/images/Webworks labs.png" alt="Logo" className="logo-mobile" />
                </Link>
                {/* search input with an icon for serch */}
                
                <div className="search">
                <input type="text" placeholder="Search" className="search-input" />
                    <i className='search-icon'><FaSearch /></i>
                </div>
                {/* links */}
                <Link to="/" className="nav-link" onClick={handleMenuToggle}>Home</Link>
              <li>
                <Link to='#' className="nav-link" >Services</Link>
                <ul className='sub-list'>
                <Link to="/services" className="services-list" onClick={handleMenuToggle}>Web Development</Link>
                <Link to="/services" className="services-list" onClick={handleMenuToggle}>App Development</Link>
                <Link to="/services" className="services-list" onClick={handleMenuToggle}>Web Development</Link>
                <Link to="/services" className="services-list" onClick={handleMenuToggle}>Web Hosting</Link>
                <Link to="/services" className="services-list" onClick={handleMenuToggle}>Digital Marketing</Link>
                <Link to="/services" className="services-list" onClick={handleMenuToggle}>Cloud Computing</Link>
                </ul>
                </li>
                <Link to="/career" className="nav-link" onClick={handleMenuToggle}>Careers</Link>
               <li>
                <Link to="#" className="nav-link" >Products</Link>
                <ul className='sub-list'>
                    <Link to="/products" className="products-list" onClick={handleMenuToggle}>Web Development</Link>
                    <Link to="/products" className="products-list" onClick={handleMenuToggle}>App Development</Link>
                    <Link to="/products" className="products-list" onClick={handleMenuToggle}>Web Development</Link>
                    <Link to="/products" className="products-list" onClick={handleMenuToggle}>Web Hosting</Link>
                    <Link to="/products" className="products-list" onClick={handleMenuToggle}>Digital Marketing</Link>
                    <Link to="/products" className="products-list" onClick={handleMenuToggle}>Cloud Computing</Link>
                </ul>

                </li>
                <Link to="/login" className="nav-link" onClick={handleMenuToggle}>Login</Link>
                <Link to="/register" className="nav-link" onClick={handleMenuToggle}>Register</Link>
            </div>
           {/* toogle menu */}
            <div className="menu-icon" onClick={handleMenuToggle}>
                {menuOpen? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
}

export default Navbar;
