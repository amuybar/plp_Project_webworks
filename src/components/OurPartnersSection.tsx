import React from 'react';
import '../styles/OurPartnersSection.css';


const partners = [
    { name: 'Partner A', logo: 'https://via.placeholder.com/150' },
    { name: 'Partner B', logo: 'https://via.placeholder.com/150' },
    { name: 'Partner C', logo: 'https://via.placeholder.com/150' },
    { name: 'Partner D', logo: 'https://via.placeholder.com/150' },
  ];
  
  const OurPartnersSection = () => {
    return (
      <section className="section">
        <h2 className="title">Our Valued Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img className="logo" src={partner.logo} alt={partner.name} />
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurPartnersSection;