import React from "react";
import Bg_Pink from "../../assets/img/bg-pink-1.png";
import "./About.css";
import Eye from "../Eye";

const About = ({about}) => {
    return <>
    
        <div className="about-container section-container">
            <div className="about-content">
                <h2 className="section-title" ref={about}>ABOUT CLITOPIA</h2>
                <div className="section-desc">
                    <p>The story goes that when mother Serotonix was a baby she fell down into a pot containing magic potion, causing her to be in a permenant state of super strength...
                        Onc sec, I may be getting mixed up with another tale. Aaa, What a heck!...</p>

                    <p>Welcome to Clitopia, hope of a free range psichodelic vulvas, a land of diversity, self acceptance, freedom and love and all the wonderfull words that one can imagine.</p>
                </div>
            </div>
        </div>
        <Eye id="about-eye" />
    </>
}
export default About;