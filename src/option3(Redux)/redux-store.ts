import {appReducer} from "./reducer";
import {combineReducers, createStore} from "redux";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        app: store.getState().app
    });
});

export type RootStateType = ReturnType<typeof rootReducer>