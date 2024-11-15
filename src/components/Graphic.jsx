import React, { useEffect, useState } from 'react';
import '../style/components/Graphic.scss';
import GrahpicBig from '../style/imgs/imgs/GrahpicBig.webm'
import Graphicsmall from '../style/imgs/imgs/graphicsmall.webm'


const Graphic = () => {
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
              <video src={GrahpicBig} autoPlay  muted playsInline />
            ) : (
              <video src={Graphicsmall} autoPlay  muted playsInline />
      )}
    </div>
  );
};

export default Graphic;