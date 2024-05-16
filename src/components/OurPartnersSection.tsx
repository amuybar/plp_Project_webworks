import React from 'react';
import '../styles/OurPartnersSection.css';


const OurPartnersSection = () => {
    return (
        <div className="partners-section">
            <div className="partner-card">
                <img src="partner1.png" alt="Partner 1 Logo" />
                <p>Partner 1</p>
            </div>
            <div className="partner-card">
                <img src="partner2.png" alt="Partner 2 Logo" />
                <p>Partner 2</p>
            </div>
            <div className="partner-card">
                <img src="partner3.png" alt="Partner 3 Logo" />
                <p>Partner 3</p>
            </div>
        </div>
    );
}

export default OurPartnersSection;