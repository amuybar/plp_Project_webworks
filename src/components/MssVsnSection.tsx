
import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import '../styles/MssVsnSection.css';

const MssVsnSection = () => {
  return (
    <section className="mss-vsn-section">
      <div className="mission-card">
        <FaBullseye className="icon" />
        <h3>Our Mission</h3>
        <p>
          We are committed to providing innovative web solutions that empower
          businesses to thrive in the digital era. Our mission is to deliver
          high-quality, reliable, and scalable web services tailored to meet
          the unique needs of each client.
        </p>
      </div>
      <div className="vision-card">
        <FaEye className="icon" />
        <h3>Our Vision</h3>
        <p>
          To be the leading provider of comprehensive web services, setting new
          standards of excellence in the industry. We envision a future where
          our cutting-edge solutions drive digital transformation and create
          unparalleled value for businesses worldwide.
        </p>
      </div>
    </section>
  );
};

export default MssVsnSection;
