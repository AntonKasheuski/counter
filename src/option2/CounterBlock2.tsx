import React from 'react';
import s from "./App2.module.css";
import Button from "../Button";

type CounterPropsType = {
    value: number
    maxValue: number
    onIncClickHandler: () => void
    onResClickHandler: () => void
    onSettingModeClickHandler: () => void
}

const CounterBlock2 = (props: CounterPropsType) => {
    return (
        <div className={s.CounterBody}>
            <div className={s.Display}>
                <div className={props.value === props.maxValue ? s.RedAnswer : s.Answer}
                >{props.value}</div>
            </div>
            <div className={s.ButtonsBlock}>
                <Button
                    className={s.Button}
                    name={"inc"}
                    onClick={props.onIncClickHandler}
                    disableButton={props.value === props.maxValue}
                />
                <Button
                    className={s.Button}
                    name={"res"}
                    onClick={props.onResClickHandler}
                />
                <Button
                    className={s.Button}
                    name={"set"}
                    onClick={props.onSettingModeClickHandler}
                />
            </div>
        </div>
    );
};

export default CounterBlock2;
