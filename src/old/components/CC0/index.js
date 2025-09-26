import React from "react";
import "./CC0.css";

const CC0 = React.forwardRef((props, ref) => {
    return <>
        <div className="cc0-container section-container">
            <div className="cc0-content">
                <h2 className="section-title" ref={ref}>CC0 NFTs</h2>
                <div className="section-desc">
                    <p>All Clitopia collectables come under Creative Commons Zero NFT copyright. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. </p>
                </div>
            </div>
        </div>
    </>
});

CC0.displayName = 'CC0';

export default CC0;