import React from "react"
import social_twitter from "../../assets/img/social-twitter.png"
import social_discord from "../../assets/img/social-discord.png"
import social_instagram from "../../assets/img/social-instagram.png"
import Logo_bottom from "../../assets/img/bottom-logo.png"
import "./Footer.css"

const Footer = () => {
    return <> 
        <div className="footer-banner"></div>
        <div className="footer-container">
            <div className="footer-social">
                <a href="https://twitter.com/clit_opia" rel="noreferrer" target="_blank"><img src={social_twitter} alt="Twitter" /></a>
                <a href="https://discord.com/clitopia" rel="noreferrer" target="_blank"><img src={social_discord} alt="Discord" /></a>
                <a href="https://instagram.com/clitopia" rel="noreferrer" target="_blank"><img src={social_instagram} alt="Instagram" /></a>
            </div>
            <div className="footer-text">❤ Join the community for more info ❤</div>
            <div className="footer-logo">
                <a href="#top"><img src={Logo_bottom} alt="Back to Top" /></a>
            </div>
        </div>
    </>
}
export default Footer