const initialState = {
    maxValue: 5,
    startValue: 0,
    maxValueInput: 5,
    startValueInput: 0,
    value: 0,
    settingMode: false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-VALUE":
            return {...state, value: action.value}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET-START-VALUE":
            return {...state, startValue: action.startValue}
        case "TOGGLE-SETTING-MODE":
            return {...state, settingMode: action.settingMode}
        default:
            return state
    }
}

export const setValueAC = (value: number) => {
    return {type: "SET-VALUE", value} as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {type: "SET-MAX-VALUE", maxValue} as const
}
export const setStartValueAC = (startValue: number) => {
    return {type: "SET-START-VALUE", startValue} as const
}
export const toggleSettingModeAC = (settingMode: boolean) => {
    return {type: "TOGGLE-SETTING-MODE", settingMode} as const
}

type SetValueActionType = ReturnType<typeof setValueAC>
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
type SetStartValueActionType = ReturnType<typeof setStartValueAC>
type ToggleSettingModeActionType = ReturnType<typeof toggleSettingModeAC>

type ActionType = SetValueActionType
    | SetMaxValueActionType
    | SetStartValueActionType
    | ToggleSettingModeActionType