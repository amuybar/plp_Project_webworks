import React, { useState } from 'react';
import '../styles/GetStarted.css';

const GetStarted = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        help: ''
    });

    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      location: '',
      help: ''
  });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit the data
            console.log('Form data:', formData);
        }
    };

    const validateForm = (data: { firstName: any; lastName: any; email: any; phoneNumber?: string; location: any; help: any; }) => {
      let errors = {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          location: '',
          help: ''
      };

      if (!data.firstName) errors.firstName = 'Please complete this required field.';
      if (!data.lastName) errors.lastName = 'Please complete this required field.';
      if (!data.email) errors.email = 'Please complete this required field.';
      if (!data.location) errors.location = 'Please complete this required field.';
      if (!data.help) errors.help = 'Please complete this required field.';

      return errors;
  };

    return (
        <div className="get-started-container">
            <div className="info">
                <h2>Let's Talk</h2>
                <p>We'll chat through your goals, your business and your ideas. Then we'll create a plan to accomplish them within your timeline and budget.</p>
            </div>
            <div className="form-container">
                <h2>Get Started</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First name*</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Last name*</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Country*</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} />
                        {errors.location && <span className="error-message">{errors.location}</span>}
                    </div>
                    <div className="form-group">
                        <label>How Can We Help?*</label>
                        <textarea name="help" value={formData.help} onChange={handleChange}></textarea>
                        {errors.help && <span className="error-message">{errors.help}</span>}
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default GetStarted;
