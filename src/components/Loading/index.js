import React from "react";
import "./style.css";
import Spinner from "../../assets/img/logo.png";

const Loading = () => {
    return <>
        <div className="loading">
            <img src={Spinner} alt="loading..." />
        </div>
    </>
}

export default Loading;