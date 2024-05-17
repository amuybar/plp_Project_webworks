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
                <Link to="/">
                    <img src="/images/Webworks labs.png" alt="Logo" className="logo-mobile" />
                </Link>
                <div className="search">
                    <input type="text" placeholder="Search" className="search-input" />
                    <i className="search-icon"><FaSearch /></i>
                </div>
                <Link to="/" className="nav-link" onClick={()=>setMenuOpen(false)}>Home</Link>
                <div className="dropdown" >
                    <Link to="#" className="nav-link">Services</Link>
                    <div className="dropdown-content">
                        <Link to="/services#web-development" className="dropdown-link" onClick={()=>setMenuOpen(false)}>Web Development</Link>
                        <Link to="/services#app-development" className="dropdown-link" onClick={()=>setMenuOpen(false)}>App Development</Link>
                        <Link to="/services#web-hosting" className="dropdown-link" >Web Hosting</Link>
                        <Link to="/services#digital-marketing" className="dropdown-link" onClick={()=>setMenuOpen(false)}>Digital Marketing</Link>
                        <Link to="/services#cloud-computing" className="dropdown-link" onClick={()=>setMenuOpen(false)}>Cloud Computing</Link>
                    </div>
                </div>
                <Link to="/career" className="nav-link" onClick={()=>setMenuOpen(false)}>Careers</Link>
                <div className="dropdown" >
                    <Link to="#" className="nav-link">Products</Link>
                    <div className="dropdown-content">
                        <Link to="/products#web-development" className="dropdown-link" onClick={()=>setMenuOpen(false)}>Web Development</Link>
                        <Link to="/products#app-development" className="dropdown-link" onClick={()=>setMenuOpen(false)}>App Development</Link>
                        <Link to="/products#web-hosting" className="dropdown-link" >Web Hosting</Link>
                        <Link to="/products#digital-marketing" className="dropdown-link" onClick={()=>setMenuOpen(false)}>Digital Marketing</Link>
                        <Link to="/products#cloud-computing" className="dropdown-link" onClick={()=>setMenuOpen(false)}>Cloud Computing</Link>
                    </div>
                </div>
                <Link to="/login" className="nav-link" >Login</Link>
                <Link to="/register" className="nav-link" >Register</Link>
            </div>
            <div className="menu-icon"  onClick={handleMenuToggle}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
}

export default Navbar;
