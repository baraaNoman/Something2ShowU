import React, { useRef, useEffect, useState } from 'react';
import '../style/components/Website.scss';
import website from '../style/imgs/imgs/websiteBig.webm'

function Website() {
  return (
    <div className='WebsiteComponent'>
      <video src={website}/>
    </div>
  )
}

export default Website