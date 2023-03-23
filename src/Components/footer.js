import "./footer.css";

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTelegram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footerleft">
               <div className="Location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
               </div>
               <div>
                <p>Vijayawada</p>
               </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                </div>            
                <div>
                <p>+91 8328123372</p>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <p>contrastiq.tech@gmail.com</p>
                </div>
                </div>
            <div className="footerright">
               <h4>About us</h4>
               <p> This technology was created by our professional team with the express intention of giving enterprises with the tools they need to defend their assets and keep their employees and customers safe. Our Face Recognition Technology is ideal for usage in high-security environments such as airports, government buildings, and financial institutions, and it can be adjusted to your organization's specific requirements.</p>
               <div className="social">
                    <FaFacebook size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <FaInstagram size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <FaTelegram size={20} style={{color:"white",marginRight:"2rem"}}/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default footer