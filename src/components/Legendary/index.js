import React from "react"
import Slider from "../Slider"
import Eye from "../../assets/img/eye.png"
import "./Legendary.css"

const Legendry = ({legendry}) => {
    return <>
        <div className="legendary-container">
                <div className="legendary-eye" ref={legendry}><img src={Eye} alt="eye" /></div>
            <div className="legendary-content">
                <h2 className="section-title" >LEGENDARY</h2>
                <p className="buttonsectiondesc">LoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLorempsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsum</p>
            </div>
            <div className="carousel"><Slider /></div>
        </div>
    </>
}
export default Legendry