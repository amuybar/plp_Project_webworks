import React from 'react';
import '../styles/CareerPage.css';

const CareerPage = () => {
    const jobOpenings = [
        {
            title: 'Front-End Developer',
            location: 'Nairobi',
            description: 'We are looking for a skilled Front-End Developer with experience in React.js to join our team.',
            requirements: [
                'Proven experience with React.js',
                'Strong understanding of JavaScript, HTML, CSS',
                'Experience with responsive design'
            ]
        },
        {
            title: 'Back-End Developer',
            location: 'Nairobi',
            description: 'Join our backend team to build robust APIs and services.',
            requirements: [
                'Proficiency in Node.js',
                'Experience with databases such as MongoDB or SQL',
                'Familiarity with RESTful APIs'
            ]
        },
        {
            title: 'Full-Stack Developer',
            location: 'Nairobi',
            description: 'We are looking for a skilled Full-Stack Developer with experience in React.js and Node.js to join our team.',
            requirements: [
                'Proven experience with React.js and Node.js',
                'Strong understanding of JavaScript, HTML, CSS',
                'Experience with responsive design',
                'Proficiency in Node.js',
                'Experience with databases such as MongoDB or SQL',
                'Familiarity with RESTful APIs'
            ]
        },
        

    ];

    return (
        <div className="career-page">
            <header className="header">
                <h1>Join Webwork Lab</h1>
                <p>Be part of our innovative team and help us build cutting-edge solutions for our clients.</p>
            </header>
            
            <section className="benefits">
                <h2>Why Work With Us?</h2>
                <ul>
                    <li>Competitive salaries</li>
                    <li>Health, dental, and vision insurance</li>
                    <li>Flexible working hours</li>
                    <li>Opportunities for career growth</li>
                    <li>Collaborative and inclusive environment</li>
                </ul>
            </section>

            <section className="culture">
                <h2>Our Culture</h2>
                <p>At Webwork Lab, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our employees to achieve their full potential and support them every step of the way.</p>
            </section>

            <section className="job-openings">
                <h2>Current Job Openings</h2>
                {jobOpenings.map((job, index) => (
                    <div className="job-card" key={index}>
                        <h3>{job.title}</h3>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p>{job.description}</p>
                        <h4>Requirements:</h4>
                        <ul>
                            {job.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                        <button className="apply-button">Apply Now</button>
                    </div>
                ))}
            </section>

            <section className="application">
                <h2>How to Apply</h2>
                <p>If you are interested in any of the positions, please send your resume and cover letter to <a href="mailto:careers@webworklab.com">careers@webworklab.com</a>. Make sure to specify the position you are applying for in the subject line of your email.</p>
            </section>
        </div>
    );
};

export default CareerPage;
