import React from 'react';
import s from "./App3.module.css";
import Input from "../Input";
import Button from "../Button";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux-store";

type SetterPropsType ={
    maxValue: number
    startValue: number
    onChangeMaxValueInputHandler: (newValue: number) => void
    onChangeStartValueInputHandler: (newValue: number) => void
    onSetClickHandler: () => void
    disableSetButtonOnSettingModeON: boolean
}

const SetterBlock3 = (props: SetterPropsType) => {
    const settingMode = useSelector<RootStateType, boolean>(state => state.app.settingMode)

    return (
        <div className={s.SetterBody}>
            <div className={s.InputsBlock}>
                <div className={s.MaxValueBlock}>
                    <span className={s.Span}>max value:</span>
                    <Input
                        className={props.maxValue <= props.startValue || props.maxValue < 0 ? s.RedInput : s.Input}
                        type={"number"}
                        value={props.maxValue}
                        onChange={props.onChangeMaxValueInputHandler}
                    />
                </div>
                <div className={s.StartValueBlock}>
                    <span className={s.Span}>start value:</span>
                    <Input
                        className={props.maxValue <= props.startValue || props.startValue < 0 ? s.RedInput : s.Input}
                        type={"number"}
                        value={props.startValue}
                        onChange={props.onChangeStartValueInputHandler}
                    />
                </div>
            </div>
            <div className={s.SetButtonBlock}>
                <Button
                    className={s.Button}
                    name={"set"}
                    onClick={props.onSetClickHandler}
                    disableButton={!settingMode || props.disableSetButtonOnSettingModeON}
                />
            </div>
        </div>
    );
};

export default SetterBlock3;