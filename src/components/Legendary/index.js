import React, { useRef } from "react";
import Slider from "../Slider";
import "./Legendary.css";
import Eye from "../Eye";

const Legendary = () => {
    const legend = useRef(null);
    return <>
        <div className="legendary-container section-container">
            <Eye id="legendary-eye"  />
            <div className="legendary-content">
                <h2 className="section-title" ref={legend}>LEGENDARY</h2>
                <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="carousel"><Slider /></div>
        </div>
    </>
}
export default Legendary;