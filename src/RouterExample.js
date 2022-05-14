import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Contact from "./Contact";

function RouterEx() {
    return (
        <div>
            <Router>
            <nav>
              <Link to="/" id="home"> Home </Link>

              <Link to="/about" id="about"> About </Link>
              
              <Link to="/contact" id="contact"> Contact </Link>
            </nav>
            <Routes>
              <Route path="/" element={<HomePage/>}/>

              <Route path="/about" element={<AboutPage/>}/>
             
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Router>
        </div>
    )
}

export default RouterEx;