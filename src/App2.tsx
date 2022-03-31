import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import SetterBlock from "./SetterBlock";
import CounterBlock from "./CounterBlock";

function App2() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValueInput, setMaxValueInput] = useState<number>(5)
    const [startValueInput, setStartValueInput] = useState<number>(0)
    const [value, setValue] = useState<number>(0)
    const [settingMode, setSettingMode] = useState<boolean>(false)

    useEffect( () => {
        let maxValueAsString = localStorage.getItem("maxCounterValue")
        if (maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString))
            setMaxValueInput(JSON.parse(maxValueAsString))
        }
    }, [])
    useEffect( () => {
        let startValueAsString = localStorage.getItem("startCounterValue")
        if (startValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
            setStartValueInput(JSON.parse(startValueAsString))
            setValue(JSON.parse(startValueAsString))
        }
    }, [])
    useEffect( () => {
        localStorage.setItem("maxCounterValue", JSON.stringify(maxValue))
    }, [maxValue])
    useEffect( () => {
        localStorage.setItem("startCounterValue", JSON.stringify(startValue))
    }, [startValue])

    const onChangeMaxValueInputHandler = (newValue: number) => {
        setMaxValueInput(newValue)
        setSettingMode(true)
    }
    const onChangeStartValueInputHandler = (newValue: number) => {
        setStartValueInput(newValue)
        setSettingMode(true)
    }
    const onSetClickHandler = () => {
        setMaxValue(maxValueInput)
        setStartValue(startValueInput)
        setValue(startValueInput)
        setSettingMode(false)
    }
    const onIncClickHandler = () => {
        setValue(value + 1)
    }
    const onResClickHandler = () => {
        setValue(startValue)
    }

    let messageForUser: string = "enter values and press 'set'";
    let disableSetButtonOnSettingModeON: boolean;
    if (startValueInput < 0 || maxValueInput <= startValueInput) {
        messageForUser = "incorrect value!";
        disableSetButtonOnSettingModeON = true;
    } else {
        disableSetButtonOnSettingModeON = false;
    }

    return (
        <div className={s.App}>
            <SetterBlock
                maxValueInput={maxValueInput}
                startValueInput={startValueInput}
                onChangeMaxValueInputHandler={onChangeMaxValueInputHandler}
                onChangeStartValueInputHandler={onChangeStartValueInputHandler}
                onSetClickHandler={onSetClickHandler}
                settingMode={settingMode}
                disableSetButtonOnSettingModeON={disableSetButtonOnSettingModeON}
            />
            <CounterBlock
                settingMode={settingMode}
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

export default App2;
