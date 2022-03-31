import React from 'react';
import s from "./App.module.css";
import Input from "./Input";
import Button from "./Button";

type SetterPropsType ={
    maxValueInput: number
    startValueInput: number
    onChangeMaxValueInputHandler: (newValue: number) => void
    onChangeStartValueInputHandler: (newValue: number) => void
    onSetClickHandler: () => void
    settingMode: boolean
    disableSetButtonOnSettingModeON: boolean
}

const SetterBlock = (props: SetterPropsType) => {
    return (
        <div className={s.SetterBody}>
            <div className={s.InputsBlock}>
                <div className={s.MaxValueBlock}>
                    <span className={s.Span}>max value:</span>
                    <Input
                        className={props.maxValueInput <= props.startValueInput || props.maxValueInput < 0 ? s.RedInput : s.Input}
                        type={"number"}
                        value={props.maxValueInput}
                        onChange={props.onChangeMaxValueInputHandler}
                    />
                </div>
                <div className={s.StartValueBlock}>
                    <span className={s.Span}>start value:</span>
                    <Input
                        className={props.maxValueInput <= props.startValueInput || props.startValueInput < 0 ? s.RedInput : s.Input}
                        type={"number"}
                        value={props.startValueInput}
                        onChange={props.onChangeStartValueInputHandler}
                    />
                </div>
            </div>
            <div className={s.SetButtonBlock}>
                <Button
                    className={s.Button}
                    name={"set"}
                    onClick={props.onSetClickHandler}
                    disableButton={!props.settingMode || props.disableSetButtonOnSettingModeON}
                />
            </div>
        </div>
    );
};

export default SetterBlock;