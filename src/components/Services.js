import React from 'react';
import './Services.css';
import { BiAperture } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FcPortraitMode } from "react-icons/fc";
import { SiWebrtc } from "react-icons/si";
import { BsFillCameraFill } from "react-icons/bs";
import { GiMusicSpell, GiPayMoney } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";


const Services = () => {
  return (
    <div className='icon-container'>
    
    <div className='container1'>
      <BiAperture id='bi' />
      <h6>MultiMedia Services</h6>
      <FaUsers id="fa" />
      <h6>Branding</h6>
     <FcPortraitMode id="fc" />
      <h6>Modeling</h6>
      <SiWebrtc id="si" />
      <h6>Web Development</h6>
      
      </div>
      
      <div className='container2'>
      <BsFillCameraFill id="bs" />
      <h6>Photography</h6>
      <GiMusicSpell id="gig" />
      <h6>Sound Engineering</h6>
      <GiPayMoney id="gip" />
      <h6>Forex Mgt</h6>
      <MdSocialDistance id='md' />
      <h6>Social Media Mgt</h6>
      </div>
    </div>
  )
}

export default Services
