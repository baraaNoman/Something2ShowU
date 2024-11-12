import React from 'react'
import logo from '../style/imgs/logo.svg'
import '../style/components/Nav.scss'
function Nav() {
  return (
    <div className='nav'>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default Nav