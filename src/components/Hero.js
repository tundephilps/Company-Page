import React from 'react';
import camera from "../images/camera.png";
import './Hero.css';
import { useNavigate } from 'react-router';
import Typewriter from "typewriter-effect";
import {Typography} from "@material-ui/core";


function Hero() {

    let navigate = useNavigate();

    return (
        <div>
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-lg-6 py-3 wow fadeInUp" id="text-box">
            <Typography className='Typo'>
                          Welcome to <span className='Great'> 
                          <Typewriter onInit={(typewriter) => {   typewriter.typeString(  "  the Future").pauseFor(2000).deleteAll().typeString( " Possibilities").deleteAll().typeString( " Greatness").start();}} /> 
                          </span>
                        </Typography>
                        <p className="everything">
                            Everything is possible with optimummedias
                        </p>
                        <div className='bottons'>
                        <a href onClick={() => {navigate("/About");}}>Contact Us</a>
                        
                        <a href onClick={() => {navigate("/Services");}}className="btn">Services</a>
                        </div>
        
            </div>
            <div class="col-lg-6 py-3 wow zoomIn">
              <div class="img-place" id="user-img">
                <img src={camera} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


      );
}

export default Hero;