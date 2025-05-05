import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../style/imgs/icons/logo.svg'

import '../style/components/Nav.scss'
function Nav() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className='nav'>
        <img  src={logo}  alt="logo"   onClick={() => navigate('/')} // Navigate to home on click
/>
    </div>
  )
}

export default Nav