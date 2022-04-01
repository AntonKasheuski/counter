import React from 'react';
import s from "./App2.module.css";
import Input from "../Input";
import Button from "../Button";

type SetterPropsType ={
    maxValueInput: number
    startValueInput: number
    messageForUser: string
    errorMessage: boolean
    onChangeMaxValueInputHandler: (newValue: number) => void
    onChangeStartValueInputHandler: (newValue: number) => void
    onSetClickHandler: () => void
}

const SetterBlock2 = (props: SetterPropsType) => {
    return (
        <div className={s.SetterBody}>
            <div className={s.InputsBlock}>
                <span className={props.errorMessage ? s.RedMessage : s.Message}
                >{props.messageForUser}</span>
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
                    disableButton={props.errorMessage}
                />
            </div>
        </div>
    );
};

export default SetterBlock2;