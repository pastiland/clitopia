import React from "react";
import "./style.css";
import Logo from "../../assets/img/spinner.gif";

const Loading = () => {
    return <>
        <div className="loading">
            <Logo />
            <p>loading...</p>
        </div>
    </>
}
export default Loading;