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
    const about = useRef(null);
    const team = useRef(null);
    const manifesto = useRef(null);
    const legend = useRef(null);

    const handleClick = (name) => {
        if (name === "about") {
            about.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (name === "team") {
            team.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (name === "manifesto") {
            manifesto.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (name === "legendary") {
            legend.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <>
            
        <div id="Bg_RandomNfts" />

        <section id="header">
            <Header handleClick={handleClick} />
        </section>

        <section id="title">
            <Title />
            <img src={Bg_Blue_1} alt="Bg_Blue_1" className="Bg_Blue_1" />
        </section>
        
        <section id="intro">
            <Intro />
        </section>

        <section id="about" ref={about}>
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
        <section id="legendary">
            <Legendary legend={legend}/>
            <div className="circle_div_main">
                <div className="circle_div" >
                    <img src={Circle} alt="circle" className="circle" />
                </div>
            </div>
        </section>

        <div className="sep-manifesto"></div>
        <section id="manifesto" ref={manifesto}>
            <Manifesto/>
        </section>
        
        <div className="sep-team"></div>
        <section id="team" ref={team}>
            <Team/>
        </section>
        
        <section id="footer">
            <Footer />
        </section>
    </>
}

export default Home;