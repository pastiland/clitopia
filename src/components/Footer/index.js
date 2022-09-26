import React from "react";
import Logo_bottom from "../../assets/img/bottom-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = ({ handleClick }) => {
    return <> 
        <div className="footer-banner"></div>
        <div className="footer-container">
            <div className="footer-social">
                <ul>
                    
                <li><a href="https://discord.com/clitopia" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faDiscord} className="icon" title="Join us on Discord"/></a></li>
                    <li><a href="https://twitter.com/clit_opia" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon" title="Follow us on Twitter" /></a></li>
                    <li><a href="https://instagram.com/clitopia" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon" title="Follow us on Instagram" /></a></li>
                </ul>
            </div>
            <div className="footer-text">Join the community for more info!</div>
            <div className="footer-logo">
                <a href="javascript:void(0)" onClick={() => handleClick('goToTop')} title="Pussy, go to top!"><img src={Logo_bottom} alt="Back to Top" /></a>
            </div>
        </div>
    </>
}
export default Footer;