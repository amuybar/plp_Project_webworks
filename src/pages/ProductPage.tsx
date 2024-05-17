import React from 'react';
import '../styles/ProductPage.css';

const products = [
    {
        category: 'Web Development',
        items: [
            { name: 'Website Builder', description: 'Create stunning websites with our easy-to-use website builder.' },
            { name: 'E-commerce Solutions', description: 'Complete solutions for your online store.' },
        ],
    },
    {
        category: 'App Development',
        items: [
            { name: 'Mobile App Development', description: 'Build powerful and intuitive mobile applications.' },
            { name: 'Enterprise Solutions', description: 'Customized apps for your business needs.' },
        ],
    },
    {
        category: 'Digital Marketing',
        items: [
            { name: 'SEO Services', description: 'Improve your website’s ranking on search engines.' },
            { name: 'Social Media Management', description: 'Grow your brand presence on social media.' },
        ],
    },
];

const testimonials = [
    { name: 'Jane Doe', feedback: 'The Webwork Lab team delivered an excellent website for our business.' },
    { name: 'John Smith', feedback: 'Their SEO services helped us achieve top rankings on Google.' },
    { name: 'Emily Johnson', feedback: 'Amazing mobile app development services. Highly recommended!' },
];

const ProductPage = () => {
    return (
        <div className="product-page">
            <header className="header">
                <h1>Our Products</h1>
                <p>Discover our range of products designed to help your business thrive in the digital age.</p>
            </header>

            <section className="product-categories">
                <h2>Product Categories</h2>
                {products.map((productCategory, index) => (
                    <div className="category-card" key={index}>
                        <h3>{productCategory.category}</h3>
                        <ul>
                            {productCategory.items.map((item, idx) => (
                                <li key={idx}>
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                        <button className="learn-more-button">Get Product</button>
                    </div>
                ))}
            </section>

            <section className="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Innovative and user-friendly products</li>
                    <li>High performance and scalability</li>
                    <li>Secure and reliable solutions</li>
                    <li>24/7 customer support</li>
                    <li>Customizable to meet your needs</li>
                </ul>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-cards">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <p>"{testimonial.feedback}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductPage;
