import React, { useRef, useEffect, useState } from 'react';
import '../style/components/Website.scss';
import websiteBig from '../style/imgs/imgs/websiteBig.webm'
import websiteSmall from '../style/imgs/imgs/websiteSmall.webm'



const Website= () => {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 1000);
  
  const handleResize = () => {
    setIsBigScreen(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoSrc = 'your-video-source.mp4'; // Replace with your actual video source

  return (
    <div className="graphicComponent">
      {isBigScreen ? (
              <video src={websiteBig} autoPlay  muted playsInline />
            ) : (
              <video src={websiteSmall} autoPlay  muted playsInline />
      )}
    </div>
  );
};

export default Website