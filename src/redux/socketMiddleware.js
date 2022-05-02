import io from 'socket.io-client'

export const socket = io('https://ws.e4pool.com/');

const SHOW_COINS = 'SHOW_COINS';
const DELL_COINS = 'DELL_COINS';
const SHOW_MINERS = 'SHOW_MINERS';
const DELL_MINERS = 'DELL_MINERS';
const SHOW_ACCOUNT_DATA = 'SHOW_ACCOUNT_DATA';
const DELL_ACCOUNT_DATA = 'DELL_ACCOUNT_DATA';


let storage = {
    coins: [],
    miners: [],
    accountData: null
}


socket.on('update', res => {
    if (res.method === 'stats') {
        let index = storage.coins.findIndex(el => el.pool === res.data.pool);
        if (index === -1) {
            storage.coins.push(res.data)
        } else {
            storage.coins[index] = res.data
        }
    }

    if (res.method === 'miners') {
        storage.miners = [...res.data.miners]
    }

    if (res.method === 'account') {
        if (res.data.workers.length !== 0) {
            storage.accountData = {...res.data}
        }

    }
})


export let socketMiddleware = store => next => action => {

    if (typeof action === 'function') {
        return next(action)
    }

    if (action.type === 'SHOW_COINS') {
        action.type = 'ADD_COIN'
        storage.coins.sort((el1, el2) => {
            if (el1.pool > el2.pool) {
                return 1
            }
            if (el1.pool < el2.pool) {
                return -1
            }
        })
        action.payload = storage.coins
        return next(action)
    }

    if (action.type === 'SHOW_MINERS') {
        action.type = 'ADD_MINERS'
        action.payload = storage.miners
        return next(action)
    }

    if (action.type === 'SHOW_ACCOUNT_DATA') {
        action.type = 'ADD_ACCOUNT_DATA'
        action.payload = storage.accountData
        return next(action)
    }

    return next(action)
}

//COINS________________________________
export let showCoinsOnce = () => {
    socket.emit('startStats')
    return {type: SHOW_COINS}
}
export let showCoins = () => {
    return {type: SHOW_COINS}
}
export let dellCoinData = () => {
    socket.emit('stopStats')
    return {type: DELL_COINS}
}

//MINERS_______________________________
export let ShowMinersOnce = (pool) => {
    socket.emit('startPoolStats', {
        pool: pool,
        method: 'miners'
    })
    return {type: SHOW_MINERS, payload: pool}
}
export const showMiners = (pool) => {
    return {type: SHOW_MINERS, payload: pool}
}
export let dellMinersData = () => {
    socket.emit('stopStats')
    return {type: DELL_MINERS}
}

//ACCOUNT______________________________
export let showAccountDataOnce = (pool,account) => {
    socket.emit('startPoolStats', {
        pool: pool,
        method: 'account',
        address: account
    })
    return {type: SHOW_ACCOUNT_DATA, pool}
}
export let showAccountData = (pool) => {
    return {type: SHOW_ACCOUNT_DATA, pool}
}
export let dellAccountData = () => {
    socket.emit('stopStats')
    return {type: DELL_ACCOUNT_DATA}
}
