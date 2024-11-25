import React from 'react'
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

import '../style/pages/Landing.scss'
import '../style/effects/effcets.scss'

//component
import Nav from '../components/Nav.jsx'

//icons
// import instagram from '../style/imgs/icons/instagram.svg'
//import behance from '../style/imgs/icons/behance.svg'
//import Linkedin from '../style/imgs/icons/linkedin.svg'
//import toLeft from '../style/imgs/icons/toLeft.svg'
//import toRight from '../style/imgs/icons/toRight.svg'
//import brandicon from '../style/imgs/icons/img.svg'

const Landing = () => {
  const navigate = useNavigate(); // Correctly using useNavigate

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Navigate to /services when swiped right
      navigate('/services'); // Call navigate with the path directly
    },
    onSwipedRight: () => {
      navigate('/blogs'); // Navigate to /blogs on swipe left
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true // Optional: allows mouse swipe detection
  });
  return (
    
    <div className='Landing'  {...handlers}>
      <Nav/>
      <img className='brandicon' src='/imgs/icons/img.svg' alt="" />

      <div className="headings">
      <h1>Grow your online presence.</h1>
      <p>Business’s Website isn’t just a website, it’s the brand’s identity, we design and build websites that drive result to help Small, medium and 
      e-commerce business to improve there presence online.</p>
      </div>
<div className="swipe">
      <div className="toLeft">
        <img src='/imgs/icons/toLeft.svg' alt="to Services"   onClick={() => navigate('/services')}/>
        <p>Swipe Left for Services</p>
      </div>
      <div className="toRight">
        <img src='/imgs/icons/toRight.svg' alt="to BLogs"   onClick={() => navigate('/blogs')} />
        <p>Swipe Right for Blogs</p>
      </div>
      </div>
      <div className="SocialIcons">
      <a href="https://www.behance.net/something2showu"><img src='/imgs/icons/behance.svg' alt="behance" /></a>
      <a href="https://www.instagram.com/something2showu/">  <img src='/imgs/icons/instagram.svg' alt="instagram" /></a>
      <a href="https://www.linkedin.com/company/something2showu/">  <img src='/imgs/icons/linkedin.svg' alt="Linkedin" /></a>
      </div>

    </div>
  )
}

export default Landing