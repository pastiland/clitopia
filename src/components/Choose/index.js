import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery'
import "./Choose.css";
import Eye from "../../assets/img/eye.png"

const Choose=()=>{
    
    const matchesMobile = useMediaQuery('(max-width:600px)');

    return <>
        <div className="choose-section" >
            <p className="cta-heading" style={{ marginBottom: 10 }}>YOU DON'T CHOOSE THE PUSSY,</p>
            <p className="cta-heading">THE PUSSY CHOOSES YOU !</p>
            <button>BUTTON</button>
            {matchesMobile && <div className="eye_btnsction_mobile"><img width={60} src={Eye} alt="eye" /></div>}
        </div>
    </>
}
export default Choose