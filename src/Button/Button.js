import React, { useState } from "react";
import "./Button.css";

const STYLES = [
    "btn--primary--solid",
    "btn--danger--solid",
    "btn--warning--solid",
    "btn--low--solid",
    "btn--info--solid",
    "btn--secondary--outline",
    "btn--success--solid"
]; 

const SIZES = ["btn--medium, btn--large"];

const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
   
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize:SIZES[0];
        return (
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}onClick={onclick} type={type}>
                {children}
            </button>
    )
}

export default Button;