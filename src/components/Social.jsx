import React, { useEffect, useState } from 'react';
import '../style/components/Social.scss';
import '../style/effects/effcets.scss';

import { IoCloseCircle } from "react-icons/io5";
import Contact from './ContactForm.jsx'
import SocailImg from '../style/imgs/imgs/socialBig.png'
 import socialimg1 from '../style/imgs/imgs/Instagram Post Mockup 1.png'
 import socialimg2 from '../style/imgs/imgs/Instagram Post Mockup 2.png'
import socialimg3 from '../style/imgs/imgs/Instagram Post Mockup 3.png'

const Social= () => {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 1000);
  const [isFullPageVisible, setIsFullPageVisible] = useState(false); // State to manage visibility

  const handleVideoClick = () => {
    setIsFullPageVisible(true); // Show the full page on video click
  };

  const handleClose = () => {
    setIsFullPageVisible(false); // Hide the full page on close button click
  };

  const handleResize = () => {
    setIsBigScreen(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="SocailComponent">
                       <img className='CoverImg' src={SocailImg}          onClick={handleVideoClick} ></img> 
     
      {isFullPageVisible && (

<div className="fullpage socialPage ">
<button onClick={handleClose} className="closeButton">{<IoCloseCircle className='closeimg'/>
}</button>     <div className="text">
     <h1><span>Social<br></br></span>media content</h1>
        <p>Looking to level up your social media presence? We create captivating and engaging content that helps you connect with your target audience, grow your following, and achieve your marketing goals. From eye-catching visuals and compelling captions to engaging video content and strategic storytelling, we tailor our content to your brand identity and industry.</p>
 </div>

 <div className="socialImg">
   <img src={socialimg1}  alt="socail media img" />
   <img src={socialimg2} alt="socail media img" />
   <img src={socialimg3} alt="socail media img" />
 
   </div>
   <Contact/>

 </div> 
 )}
      
    </div>
  );
};

export default Social