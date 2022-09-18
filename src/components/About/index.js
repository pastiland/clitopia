import React from "react";
import Eye from "../../assets/img/eye.png";
import Bg_Pink from "../../assets/img/bg-pink-1.png";
import "./About.css";

const About = () => {
    return <>
        <div className="about-sep"><img src={Bg_Pink} alt="Bg_Pink" /></div>
        <div className="about-container">
            <div className="about_main">
                <div className="about-eye"><img src={Eye} alt="eye" /></div>
                <h2 className="section-title">ABOUT CLITOPIA</h2>
                <div className="section-content">
                    <p>The story goes that when mother Serotonix was a baby she fell down into a pot containing magic potion, causing her to be in a permenant state of super strength...
                    Onc sec, I may be getting mixed up with another tale. Aaa, What a heck!...</p>

                    <p>Welcome to Clitopia, hope of a free range <br /> psichodelic vulvas, a land of diversity, <br />
                    self acceptance, freedom and love and all the wonderfull words that one can imagine.</p>
                </div>
            </div>
        </div>
    </>
}
export default About;