import React from "react";
import Slider from "../Slider";
import "./Legendary.css";

const Legendary = React.forwardRef((props, ref) => {
    return (
        <div className="legendary-container section-container">
            <div className="legendary-content">
                <h2 className="section-title" ref={ref}>LEGENDARY</h2>
                <p className="section-desc">The legendary Clitizens are the 25 founding mothers of Clitopia. Combinations of their DNA have made possible the beginning of the new fertilized free society.
The traits of these 25 Legendary founding mothers are the template to 9,974 Clitizens.</p>
                <p className="section-desc">With a little luck, you can get your hands on one of these very special NFTs.</p>
            </div>
            <div className="carousel"><Slider /></div>
        </div>
    );
});

Legendary.displayName = 'Legendary';

export default Legendary;