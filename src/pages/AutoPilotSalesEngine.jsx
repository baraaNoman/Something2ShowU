import React from 'react'
import Nav from '../components/Nav'
import "../style/pages/AutoPilotSalesEngine.scss"


//imgs
import lineImg from "../style/imgs/icons/line.svg"
import package2Point from "../style/imgs/icons/package2Point.svg"

import package2Img1 from "../style/imgs/imgs/package2Img1.png"
import package2Img2 from "../style/imgs/imgs/package2Img2.png"

function AutoPilotSalesEngine() {
  return (
    <div className='AutoPilotSalesEngine'>
                          <Nav/>

       <div className="FirstSection">
            <img className='SelenderImg' src={package2Img1} alt="" />
            <img className='headImg' src={package2Img2} alt="" />
            <h1>AutoPilot Sales Engine</h1>
            <div className="PandCta">
                <p>E-commerce optimization, targeted ads, and automated follow-ups that generate sales while you sleep.</p>
                <img src={lineImg} alt="" />
<button>
  <a href="#ThirdSection">START</a>
</button> 
           </div>
        </div>
        <div id='SecondSection' className="SecondSection">
            <div className="subHeading">
            <h2>Your self-fueling customer acquisition machine - converting browsers into buyers 24/7 with smart tech and proven funnels.</h2>
           </div>
            <div className="PackageName">
                <h3 className='firstH3'> AutoPilot Sales Engine • AutoPilot Sales Engine •</h3>
                <h3 className='secondH3'> AutoPilot Sales Engine Spotlight • AutoPilot Sales Engine •</h3>
                <h3 className='thirdH3'> AutoPilot Sales Engine • AutoPilot Sales Engine •</h3>
            </div>
        </div>
        <div id='ThirdSection' className="ThirdSection">
            <div className="TitelServices">
                <img src={package2Point} alt="" />
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
                        <p>Luxury fashion brands, premium cosmetics lines, upscale restaurants, boutique travel agencies, and high-ticket real estate e-commerce stores needing automated 24/7 sales conversion.</p>
                    </div>

                </div>
                <div className="container containr2 ">
                    <div className='NumberContainer'>
                        <p>2</p>
                    </div>
                    <img src="" alt="" />
                    <div className="DetailsService">
                        <h5>Launch Package ($2,497 one-time):</h5>
                        <p>Premium Shopify/WooCommerce store with 1-click checkout, abandoned cart recovery, and product zoom. Includes AI product descriptions, SEO schema, 15 shoppable posts, 5 conversion reels, 8 promo stories, retargeting ads, and automated reviews.</p>
                      
                    </div>
                </div>
                <div className="container containr3 ">
                    <div className='NumberContainer'>
                        <p>3</p>
                    </div>
                    <img src="" alt="" />
                    <div className="DetailsService">
                        <h5>Monthly Engine ($899/month):</h5>
                        <p>Drive consistent growth with 20 conversion-optimized posts, 8 premium reels, and 12 sales-focused stories - plus $200 in managed Google Ads spend. Includes cross-platform performance tracking and retargeting to maximize your ROAS across all channels.</p>
                    </div>
                </div>
                <div className="container containr4 ">
                    <div className='NumberContainer'>
                        <p>4</p>
                    </div>
                    <img src="" alt="" />
                    <div className="DetailsService">
                        <h5>Investment</h5>
                        <p>$2,197 one-time (store setup + 1st month content) + $899/month (performance content & ads)</p>
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

export default AutoPilotSalesEngine