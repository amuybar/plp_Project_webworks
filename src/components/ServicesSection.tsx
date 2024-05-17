import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            title: "Web Development",
            description: "We offer custom web development solutions tailored to your business needs. Our team of experienced developers will work closely with you to create a stunning and functional website that represents your brand effectively.",
            image: "/images/dsn.jpg"
        },
        {
            title: "Hosting Solutions",
            description: "Ensure your website is always online and secure with our reliable hosting solutions. We provide fast and secure hosting services to keep your website running smoothly, allowing you to focus on growing your business without worrying about downtime or security issues.",
            image: "/images/lpr.avif"
        },
        {
            title: "Digital Marketing",
            description: "Grow your online presence and reach your target audience with our comprehensive digital marketing services. From search engine optimization (SEO) to social media marketing, we'll help you create and implement a customized strategy to attract more leads and increase conversions.",
            image: "/images/pln.jpg"
        }
    ];

    return (
        <div className="services-container">
            <h2>Services Offered</h2>
            <TransitionGroup className="services">
                {services.map((service, index) => (
                    <CSSTransition key={index} timeout={500} classNames="fade">
                        <div className="service">
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <button className="get-button">Get</button>
                            </div>
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default ServicesSection;
