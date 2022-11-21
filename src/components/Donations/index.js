import React from "react";
import "./Donations.css";

const Donations=({donations})=>{
    return <>
        <div className="donations-container section-container">
            <div className="donations-content">
                <h2 className="section-title" ref={donations}>DONATIONS</h2>
                <div className="section-desc">
                    <p>50% of all proceeds will go to an NGO that develops programs for girls and women. There are X projects to choose from, you can decide where your Ether goes.</p>
                </div>
            </div>
        </div>
    </>
}
export default Donations;