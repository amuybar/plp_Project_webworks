import React from 'react';
import '../styles/Contact.css';

const ContactSection = () => {
    return (
        <section className="contact-section">

                <div className="contact-info">
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <span>Email: example@example.com</span>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <span>Phone: +1234567890</span>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
        
        </section>
    );
}

export default ContactSection;