import React, { useRef } from "react";
import Slider from "../Slider";
import "./Legendary.css";
import Eye from "../Eye";

const Legendary = () => {
    const legend = useRef(null);
    return <>
        <div className="legendary-container section-container">
            <Eye />
            <div className="legendary-content">
                <h2 className="section-title" ref={legend}>LEGENDARY</h2>
                <p className="section-desc">The legendary Clitizens are the 25 founding mothers of Clitopia. Combinations of their DNA have made possible the beginning of the new fertilized free society.</p>
                <p className="section-desc">The traits of these 25 Legendary founding mothers are the template to 9,974 Clitizens.</p>
                <p className="section-desc">With a little luck you may get your hands on one of these very special NFTs</p>
            </div>
            <div className="carousel"><Slider /></div>
        </div>
    </>
}
export default Legendary;