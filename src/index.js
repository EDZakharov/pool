import React from 'react';
import store from './redux/redux-store'
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";

// import App from "./App";
import {AppContainer} from "./AppContainer";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <HashRouter>
            <AppContainer/>
        </HashRouter>
    </Provider>,
);



reportWebVitals();
