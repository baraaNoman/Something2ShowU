import React, { useState } from 'react';


import { InlineWidget } from 'react-calendly';
import "../style/components/ContactForm.scss";

function ContactForm() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [calendlyError, setCalendlyError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccessPopup(true);
    setCalendlyError(null);
  };

  const handleProceedToCalendly = () => {
    setShowSuccessPopup(false);
    setShowCalendly(true);
  };

  const handleCalendlyEventScheduled = () => {
    console.log('Meeting scheduled successfully!');
  };

  const handleCalendlyError = (error) => {
    console.error('Calendly error:', error);
    setCalendlyError("We couldn't load the scheduling system. Please try again later or contact us directly.");
    setShowCalendly(false);
  };

  return (
    <div className='ContactForm'>
      {showSuccessPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <h3>Thank you!</h3>
            <p>Your information has been submitted successfully.</p>
            <button onClick={handleProceedToCalendly}>
              Proceed to Scheduling
            </button>
          </div>
        </div>
      )}

      {calendlyError && (
        <div className="error-popup">
          <div className="popup-content">
            <h3>Oops! Scheduling Error</h3>
            <p>{calendlyError}</p>
            <p>Error Code: tid-4fd394a2-bc99-47c5-86d2-64414ee3d1db</p>
            <button onClick={() => setCalendlyError(null)}>
              Try Again
            </button>
          </div>
        </div>
      )}

      {!showCalendly ? (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">
            Schedule Meeting
          </button>
        </form>
      ) : (
        <div className="calendly-container">
          <InlineWidget 
            url="https://calendly.com/something2showu/30min"
            prefill={{
              name: formData.name,
              email: formData.email,
              customAnswers: {
                a1: formData.phone,
                a2: formData.message
              }
            }}
            styles={{
              height: '500px',
              width: '100%'
            }}
            onEventScheduled={handleCalendlyEventScheduled}
            onLoad={() => console.log('Calendly loaded successfully')}
            onError={handleCalendlyError}
          />
          <button 
            className="back-button"
            onClick={() => setShowCalendly(false)}
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactForm;