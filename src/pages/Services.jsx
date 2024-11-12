import React from 'react'
import Website from'../components/Website.jsx'
import Social from'../components/Social.jsx'
import Graphic from'../components/Graphic.jsx'
import Nav from '../components/Nav.jsx'

import '../style/pages/Services.scss'

function Services() {
  return (
    <div className='servicesPage'>
<Nav/>
<div className="packages">
      <Website className="package"/>

      <Social className="package"/>

      <Graphic className="package"/>

      
    </div></div>
  )
}

export default Services