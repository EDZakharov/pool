import {applyMiddleware, combineReducers, createStore} from "redux";
import contentReducer from "./contentReducer";
import thunkCreator from 'redux-thunk'


let reducers = combineReducers({
    content: contentReducer,
});

let store = createStore(reducers, applyMiddleware(thunkCreator));

export default store;