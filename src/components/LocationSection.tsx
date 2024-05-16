import React from 'react';

const LocationSection = () => {
    return (
        <div className="location">
            <h2>Our Location in Nairobi</h2>
            <div id="map-container">
                <iframe 
                    width="100%" 
                    height="600" 
                    frameborder={0} 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Webwork%20labs)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
        </div>
    );
}

export default LocationSection;
