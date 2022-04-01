import {appReducer} from "./reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    app: appReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)