import React from 'react'
import Nav from '../components/Nav'

import "../style/pages/DigitalSpotlight.scss"

//imgs
import lineImg from "../style/imgs/icons/line.svg"
import package1Point from "../style/imgs/icons/package1Point.svg"

import package1Img from "../style/imgs/imgs/package1Img.png"
import package1Img2 from "../style/imgs/imgs/package1Img2.png"


function DigitalSpotlight() {
  return (
    <div className='DigitalSpotlight'>
                          <Nav />
        <div className="FirstSection">
            <img className='SelenderImg' src={package1Img} alt="" />
            <img className='headImg' src={package1Img2} alt="" />
            <h1>24/7 Digital Spotlight</h1>
            <div className="PandCta">
                <p>Websites + SEO + social media working in perfect sync we handle the spotlight while you run your business.</p>
                <img src={lineImg} alt="" />
<button>
  <a href="#ThirdSection">START</a>
</button> 
           </div>
        </div>
        <div id='SecondSection' className="SecondSection">
            <div className="subHeading">
<h2>Your always-visible, professionally polished online presence - shining 24/7 to attract ideal customers without lifting a finger.</h2> 
           </div>
            <div className="PackageName">
                <h3 className='firstH3'> Activate 24/7 Digital Spotlight • Activate 24/7 Digital Spotlight •</h3>
                <h3 className='secondH3'> Activate 24/7 Digital Spotlight • Activate 24/7 Digital Spotlight •</h3>
                <h3 className='thirdH3'> Activate 24/7 Digital Spotlight • Activate 24/7 Digital Spotlight •</h3>
            </div>
        </div>
        <div  id='ThirdSection' className="ThirdSection">
            <div className="TitelServices">
                <img src={package1Point} alt="" />
              <h3>  Detailed Breakdown :</h3> 
              </div>
            <div className="PackServices">
                <div className="container containr1 ">
                                            <a></a>

                    <div className='NumberContainer'>
                        <p>1</p>
                    </div>
                    <div className="DetailsService">
                        <h5>Perfect For:</h5>
                        <p>Luxury cosmetics clinics, high-end fashion boutiques, premium restaurants, exclusive travel agencies, and boutique real estate firms seeking instant digital credibility and recurring high-value bookings.</p>
                    </div>

                </div>
                <div className="container containr2 ">
                    <div className='NumberContainer'>
                        <p>2</p>
                    </div>
                    <img src="" alt="" />
                    <div className="DetailsService">
                        <h5>Launch Package ($1197  one-time):</h5>
                        <p>Premium 5 page mobile website with SEO (15 luxury keywords + schema markup). Includes 20 social posts, 10 reels, 15 stories + IG/FB branding. 24/7 AI chatbot for lead capture.</p>
                      
                    </div>
                </div>
                <div className="container containr3 ">
                    <div className='NumberContainer'>
                        <p>3</p>
                    </div>
                    <img src="" alt="" />
                    <div className="DetailsService">
                        <h5>Monthly Engine ($799/month):</h5>
                        <p>20 premium posts • 10 converting reels • 15 lead-gen stories • ROI analytics dashboard (tracks bookings & traffic sources) • Luxury client targeting"</p>
                    </div>
                </div>
                <div className="container containr4 ">
                    <div className='NumberContainer'>
                        <p>4</p>
                    </div>
                    <img src="" alt="" />
                    <div className="DetailsService">
                        <h5>Investment</h5>
                        <p>$1197  one-time (website + SEO + social content + automation) + $899 month (performance tracking, fresh content, and ad strategy).</p>
                    </div>
                </div>
                <div className="container containr5 ">
                    <img src="" alt="" />
                  
                </div>

            </div>
            <button>let’s discuss it together</button>
        </div>
        
        </div>
  )
}

export default DigitalSpotlight