import React, { useRef, useState, useEffect } from "react";
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
import ScrollDebugger from "../ScrollDebugger";
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
    const videoRef = useRef(null);

    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVideoFullscreen, setIsVideoFullscreen] = useState(true);
    const [debugData, setDebugData] = useState({});

    const handleClick = (name) => {
        const scrollToSection = (ref, offset = 0) => {
            if (ref.current) {
                const element = ref.current;
                const headerHeight = 70; // Fixed header height
                const titleOffset = -35; // More negative offset to bring titles even closer to header
                const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                const finalPosition = elementTop - headerHeight - titleOffset + offset;

                window.scrollTo({
                    top: Math.max(0, finalPosition),
                    behavior: 'smooth'
                });
            }
        };

        switch (name) {
            case "goToTop":
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case "goToWelcome":
                scrollToSection(goToWelcome, 0);
                break;
            case "goToAbout":
                scrollToSection(goToAbout, 40);
                break;
            case "goToRevolution":
                scrollToSection(goToRevolution, 0);
                break;
            case "goToTeam":
                scrollToSection(goToTeam, 0);
                break;
            case "goToManifesto":
                scrollToSection(goToManifesto, 20);
                break;
            case "goToLegendary":
                scrollToSection(goToLegendary, 0);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            let videoRect = null;
            let isVideoVisible = false;

            if (videoRef.current) {
                videoRect = videoRef.current.getBoundingClientRect();
                isVideoVisible = videoRect.bottom > 0;

                // Update debug data
                setDebugData({
                    scrollY: currentScrollY,
                    lastScrollY,
                    showHeader,
                    isVideoFullscreen,
                    videoRect,
                    isVideoVisible
                });

                if (currentScrollY === 0) {
                    // At the very top of the page, always show header and enable fullscreen video
                    setShowHeader(true);
                    setIsVideoFullscreen(true);
                } else if (isVideoVisible) {
                    // Video is still visible (even partially), always show header
                    setShowHeader(true);
                    // Don't change video fullscreen state while video is visible
                } else {
                    // Video is completely hidden, set video to embedded mode
                    setIsVideoFullscreen(false);
                    // Use scroll direction logic for header visibility
                    if (currentScrollY > lastScrollY) {
                        // Scrolling down, hide header
                        setShowHeader(false);
                    } else if (currentScrollY < lastScrollY) {
                        // Scrolling up, show header
                        setShowHeader(true);
                    }
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, showHeader, isVideoFullscreen]);

    if (isVideoFullscreen) {
        // In fullscreen mode, only show the video
        return <>
            <Video
                isFullscreen={true}
                videoContainerRef={videoRef}
                onTransition={() => {
                    console.log('Video transition triggered');
                    setIsVideoFullscreen(false);
                }}
            />
            <ScrollDebugger
                scrollY={debugData.scrollY}
                lastScrollY={debugData.lastScrollY}
                showHeader={debugData.showHeader}
                isVideoFullscreen={debugData.isVideoFullscreen}
                videoRect={debugData.videoRect}
                isVideoVisible={debugData.isVideoVisible}
            />
        </>
    }

    // Normal website mode with all sections
    return <>
        <div id="Bg_RandomNfts" />

        <section id="header" ref={goToTop}>
            <Header handleClick={handleClick} showHeader={showHeader} />
        </section>

        <section id="title">
            <Title />
            <img src={Bg_Blue_1} alt="Bg_Blue_1" className="Bg_Blue_1" />
        </section>

        <section id="intro">
            <Intro />
        </section>

        <section id="welcome">
            <Welcome ref={goToWelcome} />
        </section>

        <section id="about">
            <About ref={goToAbout} />
        </section>

        <section id="video">
            <Video
                isFullscreen={false}
                videoContainerRef={videoRef}
                onTransition={() => {
                    console.log('Video transition triggered - should not happen in embedded mode');
                }}
            />
        </section>

        <section id="revolution">
            <Revolution ref={goToRevolution} />
        </section>

        <div className="sep-choose"></div>
        <section id="choose">
            <Choose />
        </section>

        <section id="legendary">
            <Legendary ref={goToLegendary} />
        </section>

        <section id="dontbe">
            <DontBe />
        </section>

        <section id="manifesto">
            <Manifesto ref={goToManifesto}/>
        </section>

        <section id="donations">
            <Donations />
        </section>

        <section id="cc0">
            <CC0 />
        </section>

        <div className="sep-team"></div>
        <section id="team">
            <Team ref={goToTeam}/>
        </section>

        <section id="footer">
            <Footer handleClick={handleClick} />
        </section>

        <ScrollDebugger
            scrollY={debugData.scrollY}
            lastScrollY={debugData.lastScrollY}
            showHeader={debugData.showHeader}
            isVideoFullscreen={debugData.isVideoFullscreen}
            videoRect={debugData.videoRect}
            isVideoVisible={debugData.isVideoVisible}
        />
    </>
}

export default Home;