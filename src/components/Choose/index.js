import React from "react";
import "./Choose.css";
import Eye from "../Eye";

const Choose = ({choose}) => {
    return <>
    
        <div className="choose-container section-container">
            <div className="choose-content">
                <h2 className="section-title" ref={choose}>YOU DON'T CHOOSE THE PUSSY,<br/> THE PUSSY CHOOSES YOU!</h2>
                <div className="section-desc">
                    <p>Clitopia NFTs are randomly assigned.
                    A total of 9.999 non-fungible pussies are available
                    </p>
                    <center><button>MEET YOURS</button></center>
                </div>
            </div>
            <Eye />
        </div>
    </>
}
export default Choose;