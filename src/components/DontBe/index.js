import React from "react";
import ModalBottom from '../ModalBottom';
import "./DontBe.css";

const DontBE=()=>{
    return <>
     <div className="cta-container">

            <p className="section-title">
                <p><span style={{ color: "red", 'textDecoration': "line-through" }}>
                    <span style={{ color: "black" }}>DON'T</span>
                </span> BE A PUSSY !</p>
            </p>
        {/*
            <button><span className="cross">DON'T</span> BE A PUSSY</button>
        */}
            <ModalBottom />
        </div>
    </>
}
export default DontBE;