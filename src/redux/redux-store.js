import {combineReducers, createStore} from "redux";
import headerReducer from "./headerReducer";
import contentReducer from "./contentReducer";
import ethReducer from "./ethReducer";


let reducers = combineReducers({
    header: headerReducer,
    content: contentReducer,
    eth: ethReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;