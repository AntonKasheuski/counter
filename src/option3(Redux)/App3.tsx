import React from 'react';
import s from './App3.module.css';
import SetterBlock3 from "./SetterBlock3";
import CounterBlock3 from "./CounterBlock3";
import {setMaxValueAC, setStartValueAC, setValueAC, toggleSettingModeAC} from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux-store";

function App3() {
    const dispatch = useDispatch()
    const startValue = useSelector<RootStateType, number>(state => state.app.startValue)
    const maxValue = useSelector<RootStateType, number>(state => state.app.maxValue)
    const value = useSelector<RootStateType, number>(state => state.app.value)

    const onChangeMaxValueInputHandler = (newValue: number) => {
        dispatch(setMaxValueAC(newValue))
        dispatch(toggleSettingModeAC(true))
    }
    const onChangeStartValueInputHandler = (newValue: number) => {
        dispatch(setStartValueAC(newValue))
        dispatch(toggleSettingModeAC(true))
    }
    const onSetClickHandler = () => {
        dispatch(setValueAC(startValue))
        dispatch(toggleSettingModeAC(false))
    }
    const onIncClickHandler = () => {
        dispatch(setValueAC(value + 1))
    }
    const onResClickHandler = () => {
        dispatch(setValueAC(startValue))
    }

    let messageForUser: string = "enter values and press 'set'";
    let disableSetButtonOnSettingModeON: boolean;
    if (startValue < 0 || maxValue <= startValue) {
        messageForUser = "incorrect value!";
        disableSetButtonOnSettingModeON = true;
    } else {
        disableSetButtonOnSettingModeON = false;
    }

    return (
        <div className={s.App}>
            <SetterBlock3
                maxValue={maxValue}
                startValue={startValue}
                onChangeMaxValueInputHandler={onChangeMaxValueInputHandler}
                onChangeStartValueInputHandler={onChangeStartValueInputHandler}
                onSetClickHandler={onSetClickHandler}
                disableSetButtonOnSettingModeON={disableSetButtonOnSettingModeON}
            />
            <CounterBlock3
                disableSetButtonOnSettingModeON={disableSetButtonOnSettingModeON}
                messageForUser={messageForUser}
                value={value}
                maxValue={maxValue}
                startValue={startValue}
                onIncClickHandler={onIncClickHandler}
                onResClickHandler={onResClickHandler}
            />
        </div>
    );
}

export default App3;
