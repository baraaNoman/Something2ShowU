import React from 'react'
import Nav from '../components/Nav'

import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import ContactForm from '../components/ContactForm'
import "../style/pages/Contact.scss"

function Contact() {
  return (
    <div className='ContactPage'>
                                <Nav />

      <div className="sizer">
      <div className="Titels">
        <h1>Let’s Transform Your Business Get Your Free Consultation</h1>
        <p>get you free consultation and let's discuss together how we can improve your online presence and your automation</p>
        <button><a href="">Get Yours</a></button>
        <div className="SocialIcons">
        <a href=""><FaBehance /></a>
        <a href=""><FaWhatsapp /></a>
        <a href=""><BsInstagram /></a>
        </div>
      </div>
<ContactForm/>
</div>
    </div>
  )
}

export default Contact