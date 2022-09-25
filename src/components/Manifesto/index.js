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
                        <li><span>Stop calling us viginas, when what you really mean vulva! (Google it!)</span></li>
                        <li><span>All of us vulvas, psychodelic or not are different and there's no "normal" vulva. We're all non-fungible</span></li>
                        <li><span>Why "pussy", equates to weakness, and "balls", to strength? We can push out entire human being whilst a gentle flick to the testicles can bring a man to his knees</span></li>
                        <li><span>The clitoris is the only organ in the human body designed purely pleasure for. Yea baby, our clits arethat special!</span></li>
                        <li><span>Yea, occassionaly we can be smelly, you think dick smell of flowers?</span></li>
                        <li><span>The only thing we need to change is how we see ourselves. Believe in the pussy, believe in yourself</span></li>
                    </ol>
                </div>
            </div>
            <Eye />
        </div>
    </>
}
export default Manifesto;