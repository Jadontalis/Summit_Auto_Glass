import React from 'react'
import './Footer.css'
import logo from '../../assets/logo-transparent.png'
import { Link } from "react-router-dom"


export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Logo Column */}
          <div className="logo-col">
            <a href="/"><img src={logo} alt="" className='logo'/></a>
          </div>

            {/* Help Column */}
          <div className="footer-col">
            <ub><h4>Need Help?</h4></ub>
            <ul>
              <Link to="/Contact"><li>Contact Us!</li></Link>
              <Link to="/Insurance"><li>Insurance</li></Link>
              <Link to="/Payment"><li>Payment Options</li></Link>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <ub><h4>Quick Links</h4></ub>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/Services"><li>Services</li></Link>
              <Link to="/Company"><li>Our Company</li></Link>
              <Link to="/Privacy-Policy"><li>Privacy Policy</li></Link>
            </ul>
          </div>


          {/* Extra Column 
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watch</a></li>
              <li><a href="#">bag</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">dress</a></li>
            </ul>
          </div>
          */}

          {/* Social Links Column */}
          <div className="footer-col">
            <ub><h4>follow us</h4></ub>

            <div className="social-links">
              <a href="https://www.facebook.com/summitglassmt/"><img src='src\assets\facebook-app-round-white-icon.svg' alt="" /></a>
              <a href="https://www.instagram.com/reel/DKNjnmwhtYA/"><img src='src\assets\instagram-white-icon (1).svg' alt="" /></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
            <p>&copy; <b>{new Date().getFullYear()} Summit Auto Glass, LLC</b> | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
