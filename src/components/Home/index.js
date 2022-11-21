import React, { useRef } from "react";
import Header from "../Header";
import Title from "../Title";
import Intro from "../Intro";
import Welcome from "../Welcome";
import About from "../About";
import Video from "../Video";
import Revolution from "../Revolution";
import Choose from "../Choose";
import DontBe from "../DontBe";
import Legendary from "../Legendary";
import Manifesto from "../Manifesto";
import Donations from "../Donations";
import CC0 from "../CC0";
import Team from "../Team";
import Footer from "../Footer";
import Bg_Blue_1 from "../../assets/img/bg-blue-1.png";
import "./Home.css";

const Home = () => {
    const goToTop = useRef(null);
    const goToWelcome = useRef(null);
    const goToAbout = useRef(null);
    const goToRevolution = useRef(null);
    const goToTeam = useRef(null);
    const goToManifesto = useRef(null);
    const goToLegendary = useRef(null);

    const handleClick = (name) => {
        if (name === "goToTop") {
            goToTop.current?.scrollIntoView({ behavior:'smooth', block: 'nearest' });
        } else if (name === "goToWelcome") {
            goToWelcome.current?.scrollIntoView({ behavior:'smooth', block: 'nearest' });
        } else if (name === "goToAbout") {
            goToAbout.current?.scrollIntoView({ behavior:'smooth', block: 'nearest' });
        } else if (name === "goToRevolution") {
            goToRevolution.current?.scrollIntoView({ behavior:'smooth', block: 'center' });
        } else if (name === "goToTeam") {
            goToTeam.current?.scrollIntoView({ behavior:'smooth', block: 'nearest' });
        } else if (name === "goToManifesto") {
            goToManifesto.current?.scrollIntoView({ behavior:'smooth', block: 'nearest' });
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

        <section id="welcome" ref={goToWelcome}>
            <Welcome />
        </section>

        <section id="about" ref={goToAbout}>
            <About />
        </section>

        <section id="video">
            <Video />
        </section>

        <section id="revolution" ref={goToRevolution}>
            <Revolution />
        </section>
        
        <div className="sep-choose"></div>
        <section id="choose">
            <Choose />
        </section>

        <section id="legendary" ref={goToLegendary}>
            <Legendary />
        </section>

        <section id="dontbe">
            <DontBe />
        </section>

        <section id="manifesto" ref={goToManifesto}>
            <Manifesto/>
        </section>

        <section id="donations">
            <Donations />
        </section>

        <section id="cc0">
            <CC0 />
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