import React from 'react';
import './Services.css';
import socialmedia from "../images/socialmedia.jpeg";
import music from "../images/music.jpeg";
import web from "../images/web.jpeg";
import model from "../images/model.jpeg";
import Phoneservices from './Phoneservices';


//media services, forex, web design, social media, music production, modelling agency

function About()
{
    return ( <React.Fragment>   
        <div>
        <Phoneservices />
    </div>    
    
                    <div className="slider">
                        <div className="slides">

                            <input type="radio" className="radio-btn" id="radio1"></input>
                            <input type="radio" className="radio-btn" id="radio2"></input>
                            <input type="radio" className="radio-btn" id="radio3"></input>
                            <input type="radio" className="radio-btn" id="radio4"></input>
                        
                        <div className="slide first">
                            <img src={web} alt=""></img>
                        </div>
                        <div className="slide">
                            <img src={socialmedia} alt=""></img>
                        </div>
                        <div className="slide">
                            <img src={music} alt=""></img>
                        </div>
                        <div className="slide">
                            <img src={model} alt=""></img>
                        </div>
                        
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                      
                      </div>

                        <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                        <label for="radio4" className="manual-btn"></label>
                        </div>
              

                        </div>
                       
                        </React.Fragment>        

     );
    }

export default About;

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter > 4){
        counter = 1;
    }
}, 3000);
