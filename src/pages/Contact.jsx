import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav.jsx'
import ContactForm from '../components/ContactForm.jsx'

import instagram from '../style/imgs/icons/instagram.svg'
import behance from '../style/imgs/icons/behance.svg'
import Linkedin from '../style/imgs/icons/linkedin.svg'
import brandicon from '../style/imgs/icons/brandiconB.svg'

import toLeft from '../style/imgs/icons/toLeft.svg'
import toRight from '../style/imgs/icons/toRight.svg'
import toDown from '../style/imgs/icons/toDown.svg'

import '../style/pages/Contact.scss'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_n3f6gff', 'template_s0fr4hw', formData, '6rqS4BH-TNgeSH-V4')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("There was an error sending your message. Please try again later.");
      });
  };

  const navigate = useNavigate(); // Correctly using useNavigate

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Navigate to /services when swiped right
      navigate('/services'); // Call navigate with the path directly
    },
    onSwipedDown: () => {
      // Navigate to /services when swiped right
      navigate('/'); // Call navigate with the path directly
    },
    onSwipedRight: () => {
      navigate('/Portfolio'); // Navigate to /blogs on swipe left
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true // Optional: allows mouse swipe detection
  });

  return (
    <div className='ContactPage' {...handlers}>
      <Nav />
      <img className='brandicon' src={brandicon} alt="" />

      <div className="mianContactForm">
        <div className="contactFormPage">
          <h2>Contact <span>Us</span></h2>
          <p>Let’s Us Contact you </p>
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

            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="SocialIcons">
        <a href="https://www.behance.net/something2showu"><img src={behance} alt="behance" /></a>
          <a href="https://www.instagram.com/something2showu/"> <img src={instagram} alt="instagram" /></a>
          <a href="https://www.linkedin.com/company/something2showu/"> <img src={Linkedin} alt="Linkedin/" /></a>
        </div>
        <div className="swipe Sleft">
          <div className="toLeft ">
            <img src={toLeft} alt="to Services" onClick={() => navigate('/Services')} />
            <p>Services</p>
          </div>

          <div className="toDown">
            <img src={toDown} alt="to Contact" onClick={() => navigate('/')} />
            <p>Home</p>
          </div>

          <div className=" toRight">
            <img src={toRight} alt="to Home" onClick={() => navigate('/portoflio')} />
            <p>portfolio</p>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="alert">
          Your message has been sent!
        </div>
      )}
    </div>
  )
}

export default Contact