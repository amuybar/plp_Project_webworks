import '../styles/ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            title: "Web Development",
            description: "We offer custom web development solutions tailored to your business needs.",
            image: "web-development.png"
        },
        {
            title: "Hosting Solutions",
            description: "Reliable hosting solutions to ensure your website is always online and secure.",
            image: "hosting-solutions.png"
        },
        {
            title: "Digital Marketing",
            description: "Grow your online presence and reach your target audience with our digital marketing services.",
            image: "digital-marketing.png"
        }
    ];

    return (
        <div className="services-container">
            <div className="services">
                <h2>Services Offered</h2>
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button className="get-button">Get</button>
                        </div>
                        <div className="service-image">
                            <img src={service.image} alt={service.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ServicesSection;
