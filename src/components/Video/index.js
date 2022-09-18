import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import promoDesktop from "../../assets/video/promo-desktop.mp4";
import promoMobile from "../../assets/video/promo-mobile.mp4";
import muted from "../../assets/img/video-muted.png";
import unmuted from "../../assets/img/video-unmuted.png";
import "./Video.css";

const Video = () => {
    const matchesMobile = useMediaQuery('(max-width:720px)');
    const [isMuted, setMuted] = React.useState(true)
    React.useEffect(() => {
        var video = document.querySelector('video');
        video.muted = true;
        video.controls = false;
        video.play()
    }, [])
    const mute = () => {
        var video = document.querySelector('video');
        video.muted = !video.muted;
        setMuted(!isMuted)
    }
    return <>
        <button className="mute-button" onClick={mute}>{isMuted ? <img src={muted} alt={"muted"}/> : <img src={unmuted} alt="unmuted"/>}</button>
        <div className="video-container section-container">
            {matchesMobile ?
                <video autoPlay playsInline muted loop>
                    <source src={promoMobile} type="video/mp4" />
                </video> 
                : <video autoPlay muted loop>
                    <source src={promoDesktop} type="video/mp4" />
                </video>}
        </div>
    </>

}

export default Video;
