import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./contentReducer";

import coinPageReducer from "./coinPageReducer";
import {socketMiddleware} from "./socketMiddleware";
import accountReducer from "./accountReducer";
import {socket2Middleware} from "./socket2Middleware";


let reducers = combineReducers({
    content: contentReducer,
    coinPage: coinPageReducer,
    account: accountReducer,

});

let store = createStore(reducers, applyMiddleware(socketMiddleware, socket2Middleware));

export default store;