import React from "react";
import "./About.css";

const About = ({about}) => {
    return <>
    
        <div className="about-container section-container">
            <div className="about-content">
                <h2 className="section-title" ref={about}>ABOUT</h2>
                <div className="section-desc">
                    <p>Born from an artist who loves candor and quirkiness, Clitopia combines a love of art with new digital media and a desire to help and inspire women all over the world.</p>
                </div>
                <div className="section-desc">
                    <h3>Why vulvas?</h3>
                    <p>Marta’s project—today known as Clitopia—challenges the prejudices that exist about the female genitalia, declaring that all vulvas are valid whatever their anatomy or coloration.</p>
                    <p>In a world where women are still subject to being dominated, censored, shunned, mutilated and even eliminated; where children as young as 9 years old are searching Google for labiaplasty surgery; and where the female genitalia is still a taboo subject and cause for collective shame— we need to come together to say enough is enough!</p>
                </div>
                <div className="section-desc">
                    <h3>Why Web3?</h3>
                    <p>Web2 platforms of the likes of Instagram are wielding society in terms of their rules— exporting American puritanism and control. Anyone displaying genitalia will be punished by the algorithm. The blockchain presents an opportunity to decentralize and democratize the current power structures, but the content creators and NFT buyers are predominantly male.</p>
                </div>
            </div>
        </div>
    </>
}
export default About;