import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/components/contact.scss';
import '../style/effects/effcets.scss';
import instagram from '../style/imgs/icons/instagram.svg'
import behance from '../style/imgs/icons/behance.svg'
import Linkedin from '../style/imgs/icons/linkedin.svg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_0miipwe', 'template_s0fr4hw', formData, '6rqS4BH-TNgeSH-V4')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("There was an error sending your message. Please try again later.");
      });
  };

  return (
    <div className='contactForm'>
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      <div className="SocialIcons">
      <a href="https://www.behance.net/something2showu"><img src={behance} alt="behance" /></a>
      <a href="https://www.instagram.com/something2showu/">  <img src={instagram} alt="instagram" /></a>
      <a href="https://www.linkedin.com/company/something2showu/">  <img src={Linkedin} alt="Linkedin" /></a>
      </div>

    </div>
  );
};

export default ContactForm;