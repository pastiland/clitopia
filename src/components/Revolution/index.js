import React from "react";
import "./Revolution.css";

const Revolution = React.forwardRef((props, ref) => {
    return <>

        <div className="revolution-container section-container">
            <div className="revolution-content">
                <h2 className="section-title" ref={ref}>JOIN THE DIGITAL PUSSY REVOLUTION</h2>
                <div className="section-desc">
                    <p>The team at Clitopia created a new vulva society that includes 9,999 non-fungible pussies who are as diverse as they are bright, bold and playful. When you purchase a Clitopia NFT, 50% of the proceeds will go to advocacy groups that support women and girl's rights. There are several projects to choose from, so you decide where your Ether goes.</p>
                </div>
            </div>
        </div>
    </>
});

Revolution.displayName = 'Revolution';

export default Revolution;