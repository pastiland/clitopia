import React from "react";
import logo from "../../assets/img/intro-title.webp";
import "./Title.css";

const Title = () => {
    return <>
        <div className="title-container" >
            <img src={logo} alt="Clitopia" />
        </div>
        <div className="subtitle-container" >
            <p className="subtitle">9999 NON-FUNGIBLE PUSSIES</p>
        </div>
    </>
}
export default Title;