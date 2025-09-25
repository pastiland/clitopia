import React from "react";
import "./Choose.css";
import Eye from "../Eye";

const Choose = React.forwardRef((props, ref) => {
    return <>

        <div className="choose-container section-container">
            <div className="choose-content">
                <h2 className="section-title" ref={ref}>YOU DON'T CHOOSE THE PUSSY,<br/> THE PUSSY CHOOSES YOU!</h2>
                <div className="section-desc">
                    <p>Clitopia NFTs are randomly assigned.
                    A total of 9.999 non-fungible pussies are available
                    </p>
                    <div className="button-center"><button onClick={() => console.log('Meet yours clicked')}>MEET YOURS</button></div>
                </div>
            </div>
            <Eye />
        </div>
    </>
});

Choose.displayName = 'Choose';

export default Choose;