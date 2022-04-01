import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './option3(Redux)/App3';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./option3(Redux)/redux-store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App3/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
