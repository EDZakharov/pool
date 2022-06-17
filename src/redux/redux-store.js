import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./contentReducer";
import coinPageReducer from "./coinPageReducer";
import {socketMiddleware} from "./socketMiddleware";
import accountReducer from "./accountReducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    content: contentReducer,
    coinPage: coinPageReducer,
    account: accountReducer,

});

let store = createStore(reducers, applyMiddleware(thunk,socketMiddleware));

export default store;