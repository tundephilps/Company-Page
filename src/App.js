import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio"
import Homepage from "./components/Homepage"
import Errorpage from "./components/Errorpage"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"




function App () {
    return (
        
            <div className="background">
            <Router>
            <nav>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/About">ABOUT</Link></li>
                            <li><Link to="/Services">SERVICES</Link></li>
                            <li><Link to="/Portfolio">PORTFOLIO</Link></li>
                        </ul>
                        <hr />
                    </nav>
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="*" element={<Errorpage />} />
            </Routes>
            </Router>
            </div>
    );
}


export default App;