import {addCoinData, addMiners, addPayments, fetching, statusCode} from "./contentReducer";
import io from "socket.io-client";
import {getMinersPaymentsData} from "../DAL/minersAPI";
import React from "react";

const socket = io('https://ws.e4pool.com');
export const addCoinThunk = () => (dispatch) => {

    socket.on("update", (response) => {
            responseFilter(dispatch, response)
        }
    )
    socket.emit('startStats')
}

export const addMinersThunk = (pool) => (dispatch) => {
    socket.on('update', response => {
        responseFilter(dispatch, response)
    })
    socket.emit('startPoolStats', {pool: pool, method: 'miners'})

}

export const addMinersPaymentsData = (pool) => (dispatch) => {
    dispatch(fetching(true))
    setTimeout(() => {
        getMinersPaymentsData(pool).then(res => {
            // console.log(res)
            dispatch(addPayments(res))
            dispatch(fetching(false))
        }).catch(err => {
            dispatch(statusCode(404))
            dispatch(fetching(false))
        })
    }, 300)
}

let count = 0;

const responseFilter = (dispatch, response) => {
    switch (response.method) {
        case 'stats': {
            dispatch(addCoinData(response))
            dispatch(fetching(false))
            break
        }
        case 'miners': {
            let arr = [];
            arr.push(response.data)
                // dispatch(addMiners(arr))
                // dispatch(fetching(false))
        }
    }
}



























