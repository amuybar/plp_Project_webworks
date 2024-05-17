import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const AboutSection = () => {
    const aboutSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = aboutSectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="about-section" ref={aboutSectionRef}>
            <div className="about-description">
                <h1>About Us</h1>
                <p>We are dedicated to providing top-notch web solutions tailored to meet the needs of our clients. Our focus on customer satisfaction, speed, accuracy, and support sets us apart in the industry.</p>
            </div>
            <div className="about-cards">
                <div className="about-card">
                    <h2>Customer Oriented</h2>
                    <p>We prioritize the needs and satisfaction of our clients, ensuring that their requirements are met and expectations exceeded.</p>
                </div>
                <div className="about-card">
                    <h2>Speed and Accuracy</h2>
                    <p>We strive to deliver projects with speed and precision, ensuring high-quality results within agreed timelines.</p>
                </div>
                <div className="about-card">
                    <h2>Support</h2>
                    <p>Our dedicated support team is available to assist clients at every step, providing prompt and reliable assistance whenever needed.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
