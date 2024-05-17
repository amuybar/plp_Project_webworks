
import '../styles/LocationSection.css';

const LocationSection = () => {
  return (
    <div className="location">
      <h2>Our Location in Nairobi</h2>
      <div id="map-container">
        <iframe
          width="100%"
          height="600"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Webwork%20labs)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </div>
    </div>
  );
};

export default LocationSection;