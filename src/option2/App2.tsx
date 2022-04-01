import React, {useEffect, useState} from 'react';
import s from './App2.module.css';
import SetterBlock2 from "./SetterBlock2";
import CounterBlock2 from "./CounterBlock2";

function App2() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValueInput, setMaxValueInput] = useState<number>(5)
    const [startValueInput, setStartValueInput] = useState<number>(0)
    const [value, setValue] = useState<number>(0)
    const [settingMode, setSettingMode] = useState<boolean>(false)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxCounterValue")
        if (maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString))
            setMaxValueInput(JSON.parse(maxValueAsString))
        }
    }, [])
    useEffect(() => {
        let startValueAsString = localStorage.getItem("startCounterValue")
        if (startValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
            setStartValueInput(JSON.parse(startValueAsString))
            setValue(JSON.parse(startValueAsString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("maxCounterValue", JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem("startCounterValue", JSON.stringify(startValue))
    }, [startValue])

    const onChangeMaxValueInputHandler = (newValue: number) => {
        setMaxValueInput(newValue)
    }
    const onChangeStartValueInputHandler = (newValue: number) => {
        setStartValueInput(newValue)
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
    const onSettingModeClickHandler = () => {
        setSettingMode(true)
    }

    let messageForUser: string = "enter values and press 'set':";
    let errorMessage: boolean;
    if (startValueInput < 0 || maxValueInput <= startValueInput) {
        messageForUser = "incorrect value!";
        errorMessage = true;
    } else {
        errorMessage = false;
    }

    return (
        <div className={s.App}>
            {settingMode
                ? <SetterBlock2
                    maxValueInput={maxValueInput}
                    startValueInput={startValueInput}
                    messageForUser={messageForUser}
                    errorMessage={errorMessage}
                    onChangeMaxValueInputHandler={onChangeMaxValueInputHandler}
                    onChangeStartValueInputHandler={onChangeStartValueInputHandler}
                    onSetClickHandler={onSetClickHandler}
                />
                : <CounterBlock2
                    value={value}
                    maxValue={maxValue}
                    onIncClickHandler={onIncClickHandler}
                    onResClickHandler={onResClickHandler}
                    onSettingModeClickHandler={onSettingModeClickHandler}
                />
            }
        </div>
    );
}

export default App2;