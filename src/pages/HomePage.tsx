
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import NewsLetterSection from '../components/NewsLetterSection';
import LocationSection from '../components/LocationSection';
import MssVsnSection from '../components/MssVsnSection';
import ContactSection from '../components/ContactSection';
import OurPartnersSection from '../components/OurPartnersSection';
import BlogSection from '../components/BlogSection';

const HomePage = () => {
    return (
        <div>
            
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <OurPartnersSection />
            <MssVsnSection />
            <LocationSection />
            <BlogSection />
            <ContactSection />
            <NewsLetterSection />
           
        </div>
    );
}

export default HomePage;