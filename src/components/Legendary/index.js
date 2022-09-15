import React from "react"
import Slider from "../Slider"
import Eye from "../../assets/img/eye.png"
import { useMediaQuery } from "@mui/material"
import "./Legendary.css"

const Legendry = ({legendry}) => {
    const matchesMobile = useMediaQuery('(max-width:600px)');
    const matchesDesktop = useMediaQuery('(max-width:4000px)');
    return <>
        <div className="legendary-section">
                {matchesMobile && <div className="about_eye_legendary"ref={legendry}><img width={60} src={Eye} alt="eye" /></div>}
                {matchesDesktop && <div className="eye_legendary_desktop" ref={legendry}><img width={60} src={Eye} alt="eye" /></div>}
            <div className="legendary-content">
                <h2 className="section-title" >LEGENDARY</h2>
                <p className="buttonsectiondesc">LoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLorempsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsum</p>
            </div>
            <div className="carousel"><Slider /></div>
        </div>
    </>
}
export default Legendry