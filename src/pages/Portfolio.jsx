import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import '../style/pages/Portfolio.scss';
import Nav from '../components/Nav.jsx';

//imgs
import travelAgency from '../style/imgs/imgs/travelagency.png';
import realestate from '../style/imgs/imgs/realestate.png';
import fashion from '../style/imgs/imgs/fashion.png';
import cosmetics from '../style/imgs/imgs/cosmetics.png';
import cafeAndRestaurent from '../style/imgs/imgs/cafeAndRestaurent.png';
import toLeft from '../style/imgs/icons/toLeft.svg';
import toRight from '../style/imgs/icons/toRight.svg';
import toUp from '../style/imgs/icons/toUp.svg';

function Portfolio() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(2);
  const [isDesktop, setIsDesktop] = useState(false);
  const items = [
    { 
      img: cafeAndRestaurent,
      text: "<strong>For cafes & restaurants:</strong> We design mouth-watering websites that showcase your menu, enable online orders, and capture the ambiance of your dining experience."
    },
    { 
      img: realestate,
      text: "<strong>For real estate professionals:</strong> We build property websites that highlight listings with stunning visuals, virtual tours, and seamless contact options for potential buyers."
    },
    { 
      img: fashion,
      text: "<strong>For fashion brands:</strong> We create visually stunning e-commerce sites that showcase your collections, enhance your brand aesthetic, and drive online sales."
    },
    { 
      img: travelAgency,
      text: "<strong>For travel agencies:</strong> We develop inspiring travel websites that highlight destinations, simplify booking processes, and turn dream vacations into reality."
    },
    { 
      img: cosmetics,
      text: "<strong>For beauty brands:</strong> We design cosmetic websites that beautifully present your products, demonstrate their effects, and convert visitors into customers."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 800;
      setIsDesktop(desktop);
      if (desktop) setActiveIndex(2);
      else setActiveIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setActiveIndex(prev => {
      if (isDesktop) return Math.max(0, prev - 1);
      return (prev - 1 + items.length) % items.length;
    });
  };

  const handleNext = () => {
    setActiveIndex(prev => {
      if (isDesktop) return Math.min(items.length - 1, prev + 1);
      return (prev + 1) % items.length;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/services'),
    onSwipedUp: () => navigate('/Contact'),
    onSwipedRight: () => navigate('/'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Function to safely render HTML
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className='PortfolioPage' {...handlers}>
      <Nav/>
      <div className="MainContentP">
        <div className="contentImgs">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt=""
              className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
              style={{
                '--pos': index - activeIndex
              }}
            />
          ))}
        </div>
        
        <div className="contentText">
          <h2 dangerouslySetInnerHTML={createMarkup(items[activeIndex].text)} />
        </div>
        
        <div className="contentButtons">
          <button onClick={handlePrevious}><IoIosArrowBack className='iconInside'/></button>
          <button className='toWebsite'><a href="https://www.instagram.com/something2showu/">Check it out</a></button>
          <button onClick={handleNext}><IoIosArrowForward className='iconInside'/></button>
        </div>
      </div>

      <div className="swipe">
        <div className="toRight">
          <img src={toRight} alt="to home" onClick={() => navigate('/')} />
          <p>Home</p>
        </div>
        <div className="toUp">
          <img src={toUp} alt="to Contact" onClick={() => navigate('/Contact')} />
          <p>Contact</p>
        </div>
        <div className="toLeft">
          <img src={toLeft} alt="to Services" onClick={() => navigate('/services')}/>
          <p>Services</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;