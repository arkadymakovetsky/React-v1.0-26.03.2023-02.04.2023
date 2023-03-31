import React from "react";
import './Button.css';

const Button = ({className, value, onClickHandler}) => {
    return (
    <button className={'btn ' + className} onClick={onClickHandler}>
        {value}
    </button>
    );
};

export default Button;
