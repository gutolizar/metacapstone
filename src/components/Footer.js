import React from 'react';
import * as FaIcons from 'react-icons/fa';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";


const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a charming neighborhood bistro, a lively but casual environment. Our daily specials for our special guests.</p>
                <div className="footer-content">
                    <div className="doormat-navigation">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Chicago</li>
                            <li>Dallas</li>
                            <li>Boston</li>
                            <li>New York</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>913 Oakmound Drive, Chicago - Illinois</li>
                            <li>Tel: 773-326-4758</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>SOCIAL MEDIA</h5>
                        <ul>
                            <li>Facebook <FaIcons.FaFacebook size={20} color="#3b5998" cursor="pointer"/></li>
                            <li>Instagram <FaIcons.FaInstagram size={20} color="orange" cursor="pointer"/></li>
                            <li>Twitter <FaIcons.FaTwitter size={20} color="blue" cursor="pointer"/></li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
