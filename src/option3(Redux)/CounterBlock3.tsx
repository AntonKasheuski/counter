import React from 'react';
import s from "./App3.module.css";
import Button from "../Button";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux-store";

type CounterPropsType = {
    disableSetButtonOnSettingModeON: boolean
    messageForUser: string
    value: number
    maxValue: number
    startValue: number
    onIncClickHandler: () => void
    onResClickHandler: () => void
}

const CounterBlock3 = (props: CounterPropsType) => {
    const settingMode = useSelector<RootStateType, boolean>(state => state.app.settingMode)

    return (
        <div className={s.CounterBody}>
            <div className={s.Display}>
                {settingMode
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
                    disableButton={props.value === props.maxValue || settingMode}
                />
                <Button
                    className={s.Button}
                    name={"res"}
                    onClick={props.onResClickHandler}
                    disableButton={settingMode}
                />
            </div>
        </div>
    );
};

export default CounterBlock3;
