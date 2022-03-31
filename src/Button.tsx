import React from 'react';

type ButtonPropsType = {
    className: string
    name: string
    onClick: () => void
    disableButton?: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
            disabled={props.disableButton}
        >
            {props.name}
        </button>
    );
};

export default Button;