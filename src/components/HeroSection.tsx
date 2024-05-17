import React from 'react';
import '../styles/HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate=useNavigate();
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Empowering Your Online Presence with Innovative Web Solutions</h1>
                <p>Welcome to WebWorks Lab - Your Partner in Web Development, Hosting, and Digital Solutions</p>
                <button onClick={()=>navigate('/get-started')} className="get-started-button">Get Started</button>
            </div>
        </section>
    );
}

export default HeroSection;
