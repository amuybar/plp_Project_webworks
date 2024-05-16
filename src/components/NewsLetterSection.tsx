import React, { useState } from 'react';
import '../styles/NewsLetter.css';


const NewsLetterSection = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const subscribeToNewsletter = () => {
        alert(`Thank you for subscribing with email: ${email}`);
        setEmail('');
    };

    return (
        <div className="newsletter-section">
            <h2>Subscribe to our Newsletter</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
            />
            <button onClick={subscribeToNewsletter}>Subscribe</button>
        </div>
    );
}

export default NewsLetterSection;