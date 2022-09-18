import React from "react"
import promoVideo from "../../assets/video/promo-mobile.mp4";
import muted from "../../assets/img/video-muted.png";
import unmuted from "../../assets/img/video-unmuted.png";
import "./Video.css";

const Video = () => {
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
        <div className="video-container">
            <video width={'100%'} autoPlay playsInline muted loop>
                <source src={promoVideo} type="video/mp4" />
            </video>
        </div>
    </>

}

export default Video
