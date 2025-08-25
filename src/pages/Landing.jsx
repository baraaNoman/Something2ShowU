import React, { useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import "../style/pages/Landing.scss";
import ImgLogo from "../style/imgs/imgs/themeImg.svg";
import PackageTitel from "../style/imgs/imgs/PackagesSign.png";

function Landing() {
  const sections = useRef([]);

  useEffect(() => {
    // Smooth scroll function with bounce effect
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          bounceToElement(targetElement);
        }
      }
    };

    // Bounce scroll function
    const bounceToElement = (element) => {
      const offset = window.innerHeight * 0.1;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      
      // Add bounce animation class
      element.classList.add('bounce-scroll-target');
      
      // Scroll to position with smooth behavior
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Remove animation class after completion
      setTimeout(() => {
        element.classList.remove('bounce-scroll-target');
      }, 1500);
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Initialize Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-bounce-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className='LandingBody'>
      <Nav/>
      <section className='FirstSection'>
        <h1>Grow your online presence</h1>
        <p>Business's Website isn't just a website, it's the brand's identity. We design and build websites that drive results to help Small, medium and e-commerce businesses improve their presence online.</p>
        <a href="#SecondSection">
          <button>START</button>
        </a>
      </section>
  
      <section id='SecondSection' className='SecondSection'>
        <div className='LeftIntro'> 
          <h2>how can we help you</h2>
          <p>More bookings. Faster sales. Effortless growth. We build all-in-one digital systems for restaurants, retailers, and real estate brands worldwide – combining websites, social media, and AI automations that work while you sleep.</p>
          <a href="#ThirdSection">
            <button>our packages</button>
          </a>
        </div>
        <div className='righIntro'>
          <img src={ImgLogo} alt="Digital Solutions" />
        </div>
      </section>

      <section id='ThirdSection' className='ThirdSection'>
        <div className="PackagesTitel">
          <img src={PackageTitel} alt="Our Packages" />
        </div>
        <div className="PackagesCards">
          <div className="package">
            <h3>24/7 Digital Spotlight</h3>
            <p>Turnkey digital dominance. 24/7 lead capture. Automated sales. Real-time ROI tracking. Premium websites + social engines.</p>
            <a href="/digital-spotlight">
              <button>GO</button>
            </a>
          </div>
          <div className="package">
            <h3>AutoPilot Sales Engine</h3>
            <p>Automated sales. Higher conversions. Done-for-you store & ads. Scalable e-commerce for brands, boutiques, and beyond.</p>
            <a href="/auto-pilot-sales-engine">
              <button>GO</button>
            </a>
          </div>
          <div className="package">
            <h3>Market Leader Blueprint</h3>
            <p>Automated booking, payments & marketing—all-in-one system to attract clients and grow revenue effortlessly.</p>
            <a href="/market-leader-blueprint">
              <button>GO</button>
            </a>
          </div>
        </div>
      </section>

      <section id='FourthSection' className='FourthSection'>
        <div className="PackageName">
          <h4 className='firstH3'>SOMETHING 2 SHOW YOU • SOMETHING 2 SHOW YOU •SOMETHING 2 SHOW YOU • SOMETHING 2 SHOW YOU •</h4>
          <h4 className='secondH3'>SOMETHING 2 SHOW YOU • SOMETHING 2 SHOW YOU •SOMETHING 2 SHOW YOU • SOMETHING 2 SHOW YOU •</h4>
          <h4 className='thirdH3'>SOMETHING 2 SHOW YOU • SOMETHING 2 SHOW YOU •SOMETHING 2 SHOW YOU • SOMETHING 2 SHOW YOU •</h4>
        </div>
      </section>
    </div>
  );
}

export default Landing;