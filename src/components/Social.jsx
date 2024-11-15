import React, { useEffect, useState } from 'react';
import '../style/components/Social.scss';
import socialBig from '../style/imgs/imgs/socialBig.webm'
import socialSmall from '../style/imgs/imgs/socialSmall.webm'

const Social= () => {
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
              <video src={socialBig} autoPlay  muted playsInline />
            ) : (
              <video src={socialSmall} autoPlay  muted playsInline />
      )}
    </div>
  );
};

export default Social