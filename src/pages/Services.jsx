import React from 'react'
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';


import Website from'../components/Website.jsx'
import Social from'../components/Social.jsx'
import Graphic from'../components/Graphic.jsx'
import Nav from '../components/Nav.jsx'

import '../style/pages/Services.scss'

const Services = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      navigate('/'); // Navigate to the landing page on swipe right
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });  return (
    <div className='servicesPage'>
<Nav/>
<div className="packages" {...handlers}>
      <Website className="package"/>

      <Social className="package"/>

      <Graphic className="package"/>

      
    </div></div>
  )
}

export default Services