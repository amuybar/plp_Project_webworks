
import '../styles/Footer.css';


const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/products" className="footer-link">Products</a>
                <a href="/services" className="footer-link">Services</a>
                <a href="/about" className="footer-link">About Us</a>
                <a href="/contact" className="footer-link">Contact Us</a>
            </div>
            <div className="socials">
                <a href="https://facebook.com" className="social-link">Facebook</a>
                <a href="https://twitter.com" className="social-link">Twitter</a>
                <a href="https://linkedin.com" className="social-link">LinkedIn</a>
            </div>
            <div className="footer-text">
                &copy; 2024 WebWorks Labs Solutions
            </div>
        </footer>
    );
}

export default FooterSection;