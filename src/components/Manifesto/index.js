import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import manifesto_bg from "../../assets/img/bg-pink-2.png"
import Eye from "../../assets/img/eye.png"
import "./Manifesto.css"

const Manifesto = ({ menifesto }) => {
    const matchesMobile = useMediaQuery('(max-width:600px)');
    const matchesDesktop = useMediaQuery('(max-width:4000px)');

    return <>

        <div className="manifesto-container" ref={menifesto}>

            <h2 className="section-title" >MANIFESTO</h2>

            <ol>
                <li><span>Stop calling us viginas, when what you really mean vulva! (Google it!)</span></li>
                <li><span>All of us vulvas, psychodelic or not are different and there's no "normal" vulva. We're all non-fungible</span></li>
                <li><span>Why "pussy", equates to weakness, and "balls", to strength? We can push out entire human being whilst a gentle flick to the testicles can bring a man to his knees</span></li>
                <li><span>The clitoris is the only organ in the human body designed purely pleasure for. Yea baby, our clits arethat special!</span></li>
                <li><span>Yea, occassionaly we can be smelly, you think dick smell of flowers?</span></li>
                <li><span>The only thing we need to change is how we see ourselves. Believe in the pussy, believe in yourself</span></li>
            </ol>

            {matchesMobile && <div className="manifesto_mobile"><img width={60} src={Eye} alt="eye" /></div>}
            {matchesDesktop && <div className="manifesto_desktop"><img width={60} src={Eye} alt="eye" /></div>}

        </div></>
}
export default Manifesto