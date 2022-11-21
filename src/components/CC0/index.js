import React from "react";
import "./CC0.css";

const CC0=({cc0})=>{
    return <>
        <div className="cc0-container section-container">
            <div className="cc0-content">
                <h2 className="section-title" ref={cc0}>CC0 NFTs</h2>
                <div className="section-desc">
                    <p>All Clitopia collectables come under Creative Commons Zero NFT copywrite. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. </p>
                </div>
            </div>
        </div>
    </>
}
export default CC0;