import io from "socket.io-client";
import {addCoinData, addMinersData} from "./contentReducer";
import {selectedCoin} from "../GlobalVars";

const socket = io('https://ws.e4pool.com');

export let socketMiddleware = (store) => (next) => (action) => {

    switch (action.type) {
        case 'ADD_COIN': {
            console.log(action.type);
            socket.emit('stopStats')
            socket.emit('startStats');
            socket.on("update", (res) => {

                }
            )
            return next(action);
        }
        case 'ADD_MINERS': {
            // console.log(action.type);
            socket.emit('stopStats')
            // console.log(selectedCoin)
            socket.emit('startPoolStats', {pool: selectedCoin, method:'miners'});
            socket.on("update", (res) => {
                // console.log(res.data.miners)
                    store.dispatch(addMinersData(res.data.miners))
                }
            )
            return next(action);
        }

        default: {
            return next(action);
        }

    }

    // if(action.type === 'ADD_COIN'){
    //
    //
    // }


}