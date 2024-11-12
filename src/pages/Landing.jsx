import React from 'react'
import '../style/pages/Landing.scss'
import '../style/effects/effcets.scss'

//component
import Nav from '../components/Nav.jsx'

//icons
import instagram from '../style/imgs/icons/instagram.svg'
import behance from '../style/imgs/icons/behance.svg'
import Linkedin from '../style/imgs/icons/linkedin.svg'
import toLeft from '../style/imgs/icons/toLeft.svg'
import toRight from '../style/imgs/icons/toRight.svg'
import brandicon from '../style/imgs/icons/img.svg'

function Landing() {
  return (
    
    <div className='Landing'>
      <Nav/>
      <img className='brandicon' src={brandicon} alt="" />

      <div className="headings">
      <h1>Grow your online presence.</h1>
      <p>Business’s Website isn’t just a website, it’s the brand’s identity, we design and build websites that drive result to help Small, medium and 
      e-commerce business to improve there presence online.</p>
      </div>
<div className="swipe">
      <div className="toLeft">
        <img src={toLeft} alt="to Services" />
        <p>Swipe Left for Services</p>
      </div>
      <div className="toRight">
        <img src={toRight} alt="to BLogs" />
        <p>Swipe Right for Blogs</p>
      </div>
      </div>
      <div className="SocialIcons">
      <img src={behance} alt="behance" />
        <img src={instagram} alt="instagram" />
        <img src={Linkedin} alt="Linkedin" />
      </div>

    </div>
  )
}

export default Landing