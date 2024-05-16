import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services-container">
      <div className="top-container">
        <h1> Services Offered at Webworks Labs</h1>
        <p> 
          We are dedicated to providing top-notch web solutions tailored to meet the needs of our clients. Our focus on customer satisfaction, speed, accuracy, and support sets us apart in the industry.
         </p>
             <Link to="/contacts">
              <button className="get-button">Let's Talk</button>
           </Link>

          </div>
      <div className='services-section'>
        <h1>What to Expect</h1>
       <div className='sections'> <section className="service-section">

        <h2>Web Development</h2>
        <p> We offer a variety of web development services tailored to suit your needs. From simple static websites to complex web applications, we have the expertise to bring your ideas to life. </p>
      </section>

      <section className="service-section">
        <h2>App Development</h2>
        <p>
          Our app development services cover both iOS and Android platforms. Whether you need a native app or a cross-platform solution, we can deliver.
        </p>
      </section>

      <section className="service-section">
        <h2>Web Hosting</h2>
        <p>
          Reliable web hosting is essential for any online presence. Our web hosting services ensure your website is always up and running smoothly. 
        </p>
      </section></div>
      <Link to="/contacts">
          <button className="get-button">Let's Talk</button>
       </Link>

          </div>
        <div className='services-flow'>
          <h1> Development Process</h1>
          <p>
            Our development process is simple and straightforward. Our team of professionals work with you to understand your business goals and requirements. We then create a plan to meet those goals. Once the plan is complete, we begin the development process.
          </p>

          <div className='blueprint-card'>
            <div className='content'>
              <h2>Blueprint</h2>
            <p>
              Our team of professionals work with you to understand your business goals and requirements. We then create a plan to meet those goals. Once the plan is complete, we begin the development process.
            </p>
            </div>
            <div className='image'>
              <img src="/images/Website Process_Blueprint@2x.png" alt="" />
            </div>
          </div>
          <div className='blueprint-card'>
          <div className='image'>
              <img src="/images/Website Process_Copywriting and Planning@2x.png" alt="" />
            </div>
            <div className='content'>
             <h2>Wireframing</h2>
             <p>
             We plan the flow of each webpage so information is easy to find, demonstrating value and building trust during the user's journey 
             </p>
            </div>
          </div>
          <div className='blueprint-card'>
            <div className='content'>
             <h2>Development Stage</h2>
             <p>
              We begin the development process. Our team of professionals work with you to understand your business goals and requirements. We then create a plan to meet those goals. Once the plan is complete, we begin the development process.
             </p>
            </div>
            <div className='image'>
              <img src="/images/Website Process_Design and Development@2x.png" alt="" />
            </div>
          </div>
          <div className='blueprint-card'>
          <div className='image'>
              <img src="/images/Website Process_Build Your Inbound Machine@2x.png" alt="" />
            </div>
            <div className='content'>
             <h2>Testing ,Installation and Maintanance</h2>
             <p>
             We plan the flow of each webpage so information is easy to find, demonstrating value and building trust during the user's journey .
             </p>
             <button className='demo-btn'>See Demo</button>
            </div>
          </div>
          
        </div>
     
    </div>
  );
}

export default Services;
