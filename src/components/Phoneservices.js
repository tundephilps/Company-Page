import React from 'react';
import socialmedia from "../images/socialmedia.jpeg";
import music from "../images/music.jpeg";
import web from "../images/web.jpeg";
import model from "../images/model.jpeg";
import './Services.css';

function Phoneservices() {
    return (<div className='bud'>
                        <div >
                            <img src={web} alt="" className='smallpix'></img>
                        </div>
                        <div>
                            <img src={socialmedia} alt="" className='smallpix'></img>
                        </div>
                        <div>
                            <img src={music} alt="" className='smallpix'></img>
                        </div>
                        <div>
                            <img src={model} alt="" className='smallpix'></img>
                        </div>


    </div>  );
}

export default Phoneservices;