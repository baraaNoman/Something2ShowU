import React from 'react'
import Nav from '../components/Nav'

import "../style/pages/MarketLeaderBlueprint.scss"


//imgs
import lineImg from "../style/imgs/icons/line.svg"
import package3Point from "../style/imgs/icons/package3Point.svg"

import package3Img1 from "../style/imgs/imgs/package3Img1.png"
import package3Img2 from "../style/imgs/imgs/package3Img2.png"

function MarketLeaderBlueprint() {
  return (

    <div className='MarketLeaderBlueprint'>
                  <Nav/>
    <div className="FirstSection">
               <img className='SelenderImg' src={package3Img1} alt="" />
               <img className='headImg' src={package3Img2} alt="" />
               <h1>Market Leader Blueprint</h1>
               <div className="PandCta">
                <p>Data-driven strategies and high-impact execution for businesses ready to own their market.</p>
                   <img src={lineImg} alt="" />
<button>
  <a href="#ThirdSection">START</a>
</button> 
              </div>
           </div>
           <div id='SecondSection' className="SecondSection">
               <div className="subHeading">
                    <h2>Data-driven strategies and high-impact execution for businesses ready to own their market.</h2>
              </div>
               <div className="PackageName">
                   <h3 className='firstH3'> Market Leader Blueprint • Market Leader Blueprint •</h3>
                   <h3 className='secondH3'> Market Leader Blueprint • Market Leader Blueprint •</h3>
                   <h3 className='thirdH3'> Market Leader Blueprint • Market Leader Blueprint •</h3>
               </div>
           </div>
           <div  id='ThirdSection' className="ThirdSection">
               <div className="TitelServices">
                   <img src={package3Point} alt="" />
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
                            <p>Luxury spas, private chefs, and elite coaches who need a seamless booking experience paired with high-end marketing.</p>
                       </div>
   
                   </div>
                   <div className="container containr2 ">
                       <div className='NumberContainer'>
                           <p>2</p>
                       </div>
                       <img src="" alt="" />
                       <div className="DetailsService">
                           <h5>Launch Package ($2,997 one-time):</h5>
                            <p>Launch a high-converting booking hub with Calendly integration, 360° virtual tours, and automated SMS/payment links—all optimized with local SEO to attract premium clients. Includes intake forms and service displays to streamline appointments.</p>
                         
                       </div>
                   </div>
                   <div className="container containr3 ">
                       <div className='NumberContainer'>
                           <p>3</p>
                       </div>
                       <img src="" alt="" />
                       <div className="DetailsService">
                           <h5>Monthly Engine ($997/month):</h5>
                           <p>Secure consistent bookings with 12 conversion posts, 6 expert reels, and 10 testimonial stories—backed by ad management and real-time tracking to maximize appointment rates.</p>
                       </div>
                   </div>
                   <div className="container containr4 ">
                       <div className='NumberContainer'>
                           <p>4</p>
                       </div>
                       <img src="" alt="" />
                       <div className="DetailsService">
                           <h5>Investment</h5>
                            <p>$2,997 one-time (system + SEO) + $997/month (content + ads).</p>
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

export default MarketLeaderBlueprint