import {addCoinData, addMiners} from "./contentReducer";
import io from "socket.io-client";
import {getMinersFromPool} from "../DAL/minersAPI";


export const addCoinThunk = () => (dispatch) => {
    const socket = io('https://ws.e4pool.com');
    socket.emit('startStats')
    socket.on("update", (res) => {
            dispatch(addCoinData(res))
        }
    )

    // socket.emit('stopStats')
}

export const addMinersThunk = (pool) => (dispatch) => {
    getMinersFromPool(pool).then(res => {
        // let x = JSON.parse(res.data.miners)

        const socket = io('https://ws.e4pool.com');
        socket.emit('startStats')
        socket.on("update", (res) => {
                dispatch(addCoinData(res))
            }
        )
        let arr = [];
        arr.push(res.data)
        dispatch(addMiners(arr))
    })

}