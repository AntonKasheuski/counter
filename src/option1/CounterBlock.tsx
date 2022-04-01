import React from 'react';
import s from "./App.module.css";
import Button from "../Button";

type CounterPropsType = {
    settingMode: boolean
    disableSetButtonOnSettingModeON: boolean
    messageForUser: string
    value: number
    maxValue: number
    startValue: number
    onIncClickHandler: () => void
    onResClickHandler: () => void
}

const CounterBlock = (props: CounterPropsType) => {
    return (
        <div className={s.CounterBody}>
            <div className={s.Display}>
                {props.settingMode
                    ? <div
                        className={props.disableSetButtonOnSettingModeON ? s.RedMessage : s.Message}
                    >{props.messageForUser}</div>
                    : <div
                        className={props.value === props.maxValue ? s.RedAnswer : s.Answer}
                    >{props.value}</div>}
            </div>
            <div className={s.ButtonsBlock}>
                <Button
                    className={s.Button}
                    name={"inc"}
                    onClick={props.onIncClickHandler}
                    disableButton={props.value === props.maxValue || props.settingMode}
                />
                <Button
                    className={s.Button}
                    name={"res"}
                    onClick={props.onResClickHandler}
                    disableButton={props.settingMode}
                />
            </div>
        </div>
    );
};

export default CounterBlock;
