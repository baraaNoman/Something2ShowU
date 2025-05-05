import React, { useEffect, useState } from 'react';
import '../style/components/Graphic.scss';
import '../style/effects/effcets.scss';

import { IoCloseCircle } from "react-icons/io5";

import GrahpicImg from '../style/imgs/imgs/graphic.png'
import graphicimg1 from '../style/imgs/imgs/mocupGraphic1.png'
import graphicimg2 from '../style/imgs/imgs/mocupGraphic2.png'
import graphicimg3 from '../style/imgs/imgs/mocupGraphic3.png'

import Contact from '../components/ContactForm.jsx'

const Graphic = () => {
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
                        <img className='CoverImg'src={GrahpicImg}          onClick={handleVideoClick} ></img> 
      

{isFullPageVisible && (

<div className="fullpage graphicPage">
<button onClick={handleClose} className="closeButton">{<IoCloseCircle className='closeimg'/>
}</button>     <div className="text">
     <h1><span>graphic <br></br> </span>design & more</h1>
    <p>Looking for eye-catching visuals to elevate your brand? We create custom graphic designs that make a lasting impression. From eye-catching menus and impactful banners to unique logos and compelling social media graphics, we craft visuals that resonate with your target audience.</p>
 </div>

 <div className="graphicimg">
   <img src={graphicimg1} alt="Graphic design img" />
   <img src={graphicimg2} alt="Graphic design img" />
   <img src={graphicimg3} alt="Graphic design img" />
   <Contact/>
   </div>
 </div> 
 )}
</div>
);
};

export default Graphic;