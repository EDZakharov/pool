import io from 'socket.io-client'
export const socket = io('https://ws.e4pool.com/');

const SHOW_COINS = 'SHOW_COINS';
const DELL_COINS = 'DELL_COINS';
const SHOW_MINERS = 'SHOW_MINERS';
const DELL_MINERS = 'DELL_MINERS';


let storage = {
    coins: [],
    miners: []
}


socket.on('update', res => {
    if(res.method === 'stats'){
        let index = storage.coins.findIndex(el => el.pool === res.data.pool);
        if(index === -1){
            storage.coins.push(res.data)
        }else {
            storage.coins[index] = res.data
        }
    }

    if(res.method === 'miners') {
        storage.miners = [...res.data.miners]
    }

})

export let socketMiddleware = store => next => action => {

    if (typeof action === 'function') {
        return next(action)
    }

    if (action.type === 'SHOW_COINS') {
        socket.emit('startStats')
        action.type = 'ADD_COIN'
        action.payload = storage.coins;
        return next(action)
    }

    if (action.type === 'DELL_COINS') {
        socket.emit('stopStats')
    }

    if (action.type === 'SHOW_MINERS') {
        socket.emit('startPoolStats', {pool:action.payload, method:'miners'})
        action.type = 'ADD_MINERS'
        storage.miners.sort((el1,el2)=>{
            if(el1.pool > el2.pool){
                return 1
            }
            if(el1.pool < el2.pool){
                return -1
            }
        })
        action.payload = storage.miners;
        return next(action)
    }

    if (action.type === 'DELL_MINERS') {
        socket.emit('stopStats')
    }

    return next(action)

}


export const showCoins = () => {
    return {type: SHOW_COINS}
}

export let dellCoinData = () => {
    return {type: DELL_COINS}
}

export const showMiners = (pool) => {
    return {type: SHOW_MINERS, payload: pool}
}

export let dellMinersData = () => {
    return {type: DELL_MINERS}
}
