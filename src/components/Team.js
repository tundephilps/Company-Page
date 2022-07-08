import React from 'react';
import './Portfolio.scss'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialSkype, TiSocialTwitter} from "react-icons/ti";
import './Homepage.css';
import Boss from "../images/Boss.jpg";
import Boss2 from "../images/Boss2.jpg";
import fummi from "../images/fummi.jpg";

function Portfolio() {
    return (    
             <div className='background'>
                   
                    <section className='team-section'>
                           <div className='auto-container'>
                                  <div className='sec-title centered'>
                                         <div className='title'>Our Team Members</div>
                                  </div>
                                  <div className='row'>
                                         <div className='team-block col-lg-4 col-md-6 col-sm-12'>
                                                <div className='inner-box'>
                                                       <ul className='social-icons'>
                                                        <li><a href><span><TiSocialFacebook /></span></a></li>
                                                        <li><a href><span><TiSocialTwitter /></span></a></li>
                                                        <li><a href><span><TiSocialLinkedin /></span></a></li>
                                                        <li><a href><span><TiSocialSkype /></span></a></li>
                                                       
                                                       
                                                       </ul>
                                                       <div className='image'>
                                                             <a href><img src={Boss} className="img" alt='hey'></img></a> 
                                                       </div>
                                                       <div className='lower-content'>
                                                              <h3><a href>Tunde Philps</a></h3>
                                                              <div className='designation'>C.E.O</div>
                                                       </div>

                                                </div>

                                         </div>
                                         
                                         <div className='team-block col-lg-4 col-md-6 col-sm-12'>
                                                <div className='inner-box'>
                                                       <ul className='social-icons'>
                                                        <li><a href><span><TiSocialFacebook /></span></a></li>
                                                        <li><a href><span><TiSocialTwitter /></span></a></li>
                                                        <li><a href><span><TiSocialLinkedin /></span></a></li>
                                                        <li><a href><span><TiSocialSkype /></span></a></li>
                                                       
                                                       
                                                       </ul>
                                                       <div className='image'>
                                                              <img src={Boss2} className="img" alt='yoo'></img>
                                                       </div>
                                                       <div className='lower-content'>
                                                              <h3>Marc </h3>
                                                              <div className='designation'>Co Founder</div>
                                                       </div>

                                                </div>

                                         </div>
                                         
                                         <div className='team-block col-lg-4 col-md-6 col-sm-12'>
                                                <div className='inner-box'>
                                                       <ul className='social-icons'>
                                                        <li><a href><span><TiSocialFacebook /></span></a></li>
                                                        <li><a href><span><TiSocialTwitter /></span></a></li>
                                                        <li><a href><span><TiSocialLinkedin /></span></a></li>
                                                        <li><a href><span><TiSocialSkype /></span></a></li>
                                                       
                                                       
                                                       </ul>
                                                       <div className='image'>
                                                              <img src={fummi} className="img" alt='yo'></img>
                                                       </div>
                                                       <div className='lower-content'>
                                                              <h3>Bambi</h3>
                                                              <div className='designation'>Marketing & PR</div>
                                                       </div>

                                                </div>

                                         </div>
                                  </div>
                           </div>
                    </section>
            </div>
            

     );
}

export default Portfolio;