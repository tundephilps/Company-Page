import { useNavigate } from 'react-router';
import camera from "../images/camera.png";
import './Homepage.css';
import Typewriter from "typewriter-effect";




const Homepage = () => {
    let navigate = useNavigate();
    
    
    
    return (    
             <div>
                  
                    <div className="text-box">
                        <h1>
                          Welcome to
                          <Typewriter onInit={(typewriter) => {   typewriter.typeString( "the Future").pauseFor(2000).deleteAll().typeString( "Possibilities").deleteAll().typeString( "Greatness").start();}} /> 
                        </h1>

                        <p className="everything">
                            Everything is possible with optimummedias
                        </p>
                        <a href onClick={() => {navigate("/About");}}>Contact Us</a>
                        
                        <a href onClick={() => {navigate("/Services");}}className="btn">Services</a>
                    </div>
                    <img src={camera} className="user-img" alt="hey"  />

                    
            </div>
                   
        

     );
}

export default Homepage;

