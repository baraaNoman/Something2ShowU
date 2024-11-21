import React, { useRef, useEffect, useState } from 'react';
import '../style/components/Website.scss';
import '../style/effects/effcets.scss';
import { IoCloseCircle } from "react-icons/io5";

import websiteBig from '../style/imgs/imgs/websiteBig.webm'
import websiteSmall from '../style/imgs/imgs/websiteSmall.webm'
import webimg1 from '../style/imgs/imgs/mocupWebsite1.png'
import webimg2 from '../style/imgs/imgs/mocupWebsite2.png'
import webimg3 from '../style/imgs/imgs/mocupWebsite3.png'

import Contact from '../components/contact.jsx'


const Website= () => {
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
    <div className="graphicComponent">
      {isBigScreen ? (
              <video src={websiteBig} autoPlay  muted playsInline         onClick={handleVideoClick} // Show full page on video click
              />
            ) : (
              <video src={websiteSmall} autoPlay  muted playsInline         onClick={handleVideoClick} // Show full page on video click
              />
      )}
      {isFullPageVisible && (

     <div className="fullpage websitePage">
          <button onClick={handleClose} className="closeButton">{<IoCloseCircle className='closeimg'/>
}</button>
          <div className="text">
        <h1><span>Website<br></br></span>That Stand Out</h1>
        <p>Looking for a website that stands out from the crowd? We create custom animated websites that are both visually captivating and engaging. Our team of expert designers and developers craft unique, interactive experiences that help your business tell its story and connect with your target audience.</p>
      </div>

      <div className="Webimgs">
        <img src={webimg2} alt="website design" />
        <img src={webimg1} alt="website design" />
        <img src={webimg3} alt="website design" />
 
        <Contact/>
        </div>
      </div> 
      )}
    </div>
  );
};

export default Website