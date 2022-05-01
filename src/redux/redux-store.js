import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./contentReducer";

import coinPageReducer from "./coinPageReducer";
import {socketMiddleware} from "./socketMiddleware";


let reducers = combineReducers({
    content: contentReducer,
    coinPage: coinPageReducer

});

let store = createStore(reducers, applyMiddleware(socketMiddleware));

export default store;