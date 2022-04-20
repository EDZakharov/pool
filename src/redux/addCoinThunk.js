import {addCoinData, addMiners, addPayments, fetching, statusCode} from "./contentReducer";
import io from "socket.io-client";
import {getMinersFromPool, getMinersPaymentsData} from "../DAL/minersAPI";
import React from "react";


export const addCoinThunk = () => (dispatch) => {
    const socket = io('https://ws.e4pool.com');
    socket.emit('startStats')
    socket.on("update", (res) => {
            dispatch(addCoinData(res))
        }
    )
}

export const addMinersThunk = (pool) => (dispatch) => {
    setTimeout(()=> {getMinersFromPool(pool).then(res => {
        if(res.status === 200){
            dispatch(statusCode(res.status))
            const socket = io('https://ws.e4pool.com');
            socket.emit('startStats')
            socket.on("update", (res) => {
                    dispatch(addCoinData(res))
                }
            )
            let arr = [];
            arr.push(res.data)
            dispatch(addMiners(arr))
            setTimeout(()=> {
                dispatch(fetching(false))
            },100)

        }
    }).catch(err => {
        dispatch(statusCode(404))
        dispatch(fetching(false))

    })},300)
}

export const addMinersPaymentsData = (pool) => (dispatch) => {
    dispatch(fetching(true))
    setTimeout(()=> {getMinersPaymentsData(pool).then(res => {
        console.log(res)
        dispatch(addPayments(res))
        dispatch(fetching(false))
    }).catch(err => {
        dispatch(statusCode(404))
        dispatch(fetching(false))
    })},300)
}
