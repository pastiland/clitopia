import React from "react";
import ModalBottom from '../ModalBottom';
import "./DontBe.css";

const DontBe = () => {
    return <>
     <div className="cta-container">
            <p className="section-title">
                <span style={{ color: "red", 'textDecoration': "line-through" }}>
                    <span style={{ color: "black" }}>DON'T</span>
                </span> BE A PUSSY !
            </p>
            <ModalBottom />
        </div>
    </>
}
export default DontBe;