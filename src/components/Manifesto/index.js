import React from "react";
import "./Manifesto.css";
import Eye from "../Eye";

const Manifesto = ({ menifesto }) => {
    return <>
        <div className="manifesto-container section-container" ref={menifesto}>
            <div className="section-content">
                <h2 className="section-title" >MANIFESTO</h2>
                <div className="section-desc">
                    <ol>
                        <li><span>We are more than just pussies, we have names and faces, thanks!</span></li>
                        <li><span>Stop calling us vaginas, when you really mean vulva! (Google it!)</span></li>
                        <li><span>All vulvas, psychedelic or not, are different and there's no "normal" vulva. We're all non-fungible</span></li>
                        <li><span>Stop equating “pussy" to weakness, and "balls", to strength. We can push out an entire human being whilst a gentle flick to the testicles can bring a man to his knees</span></li>
                        <li><span>The clitoris is the only organ in the human body with the sole purpose of causing pleasure. Yeah baby, our clits are that special!  </span></li>
                        <li><span>Every woman is as unique and beautiful as her vulva. The only thing that needs to change is how we see ourselves. Believe in the pussy, believe in yourself.</span></li>
                    </ol>
                    <h3>Long live Clitopia!</h3>
                </div>
            </div>
            <Eye />
        </div>
    </>
}
export default Manifesto;