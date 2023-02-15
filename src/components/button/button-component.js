import React from "react";
import "./button-component.css";

const ButtonComponent = ({ label, buttonClickHandler }) => {
    return <button onClick={buttonClickHandler}> { label } </button>
}

export default ButtonComponent;