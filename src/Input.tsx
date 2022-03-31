import React, {ChangeEvent} from 'react';

type InputPropsType = {
    className: string
    type: string
    value: number
    onChange: (newValue: number) => void
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.target.value))
    }

    return (
        <input
            className={props.className}
            type={props.type}
            value={props.value}
            onChange={onChangeHandler}
        />
    );
};

export default Input;