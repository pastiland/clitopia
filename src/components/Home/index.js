import React, { useRef } from "react";
import Header from "../Header";
import Title from "../Title";
import Intro from "../Intro";
import About from "../About";
import Choose from "../Choose";
import Video from "../Video";
import DontBE from "../DontBe";
import Legendary from "../Legendary";
import Manifesto from "../Manifesto";
import Team from "../Team";
import Footer from "../Footer";
import Circle from "../../assets/img/circle-pink.png";
import Bg_Blue_1 from "../../assets/img/bg-blue-1.png";
import "./Home.css";

const Home = () => {
    const goToTop = useRef(null);
    const goToAbout = useRef(null);
    const goToTeam = useRef(null);
    const goToManifesto = useRef(null);
    const goToLegendary = useRef(null);

    const handleClick = (name) => {
        if (name === "goToTop") {
            goToTop.current?.scrollIntoView({ behavior:'smooth', block: 'nearest' });
        } else if (name === "goToAbout") {
            goToAbout.current?.scrollIntoView({ behavior:'smooth', block: 'center' });
        } else if (name === "goToTeam") {
            goToTeam.current?.scrollIntoView({ behavior:'smooth', block: 'nearest' });
        } else if (name === "goToManifesto") {
            goToManifesto.current?.scrollIntoView({ behavior:'smooth', block: 'center' });
        } else if (name === "goToLegendary") {
            goToLegendary.current?.scrollIntoView({ behavior:'smooth', block:'center' });
        }
    };

    return <>
    
        <div id="Bg_RandomNfts" />

        <section id="header" ref={goToTop}>
            <Header handleClick={handleClick} />
        </section>

        <section id="title">
            <Title />
            <img src={Bg_Blue_1} alt="Bg_Blue_1" className="Bg_Blue_1" />
        </section>
        
        <section id="intro">
            <Intro />
        </section>

        <div className="sep-about"></div>
        <section id="about" ref={goToAbout}>
            <About />
        </section>

        <div className="sep-choose"></div>
        <section id="choose">
            <Choose />
        </section>

        <section id="video">
            <Video />
        </section>

        <section id="cta-dont-be">
            <DontBE />
        </section>

        <div className="sep-legendary"></div>
        <section id="legendary" ref={goToLegendary}>
            <Legendary />
        </section>

        <div className="sep-manifesto"></div>
        <section id="manifesto" ref={goToManifesto}>
            <Manifesto/>
        </section>
        
        <div className="sep-team"></div>
        <section id="team" ref={goToTeam}>
            <Team/>
        </section>
        
        <section id="footer">
            <Footer handleClick={handleClick} />
        </section>
    </>
}

export default Home;