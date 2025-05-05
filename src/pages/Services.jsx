import React from 'react'
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';


import Website from'../components/Website.jsx'
import Social from'../components/Social.jsx'
import Graphic from'../components/Graphic.jsx'
import Nav from '../components/Nav.jsx'


import toLeft from '../style/imgs/icons/toLeft.svg'
import toRight from '../style/imgs/icons/toRight.svg'
import toUp from '../style/imgs/icons/toUp.svg'

import '../style/pages/Services.scss'

const Services = () => {
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Navigate to /services when swiped right
      navigate('/Portfolio'); // Call navigate with the path directly
    },
    onSwipedUp: () => {
      // Navigate to /services when swiped right
      navigate('/Contact'); // Call navigate with the path directly
    },
    onSwipedRight: () => {
      navigate('/'); // Navigate to /blogs on swipe left
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
   return (
    <div className='servicesPage'>
<Nav/>

<div className="packages" {...handlers}>
  
    <div className="TypeOfServices">
      <Website className="package WebsiteImgComponent"/>

      <Social className="package SocialImgComponent"/>

      <Graphic className="package GraphicImgComponent"/>
      
      </div>
      <div className="swipe">
            <div className="toLeft">
              <img src={toLeft}  alt="to Portfolio"   onClick={() => navigate('/Portfolio')}/>
              <p>Portfolio</p>
            </div>
            <div className="toUp ">
              <img src={toUp} alt="to Contact"   onClick={() => navigate('/Contact')} />
              <p>Contact</p>
            </div>
            <div className="toRight ">
              <img src={toRight} alt="to Home"   onClick={() => navigate('/')} />
              <p>Home</p>
            </div>
            </div>
      
    </div></div>
  )
}

export default Services