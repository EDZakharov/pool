import io from 'socket.io-client'

const socket = io('https://ws.e4pool.com/');
const socket2 = io('https://ws.e4pool.com/');

const SHOW_COINS = 'SHOW_COINS';
const DELL_COINS = 'DELL_COINS';

const SHOW_FULL_STATS = 'SHOW_FULL_STATS';
const DEL_FULLSTATS = 'DEL_FULLSTATS';

const SHOW_MINERS = 'SHOW_MINERS';
const DELL_MINERS = 'DELL_MINERS';

const SHOW_ACCOUNT_DATA = 'SHOW_ACCOUNT_DATA';
const DELL_ACCOUNT_DATA = 'DELL_ACCOUNT_DATA';


let storage = {
    coins: [],
    miners: [],
    fullStats: {},
    accountData: undefined
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
        // console.log(res)
        if (res.error !== 'Method not allowed') {
            // console.log(res)
            if (res.data !== undefined) {
                storage.accountData = {...res.data}
            }

        } else {
            console.log(res.error)
        }
    }

})

let storage2 = {
    fullStats: {},

}

socket2.on('update', res => {

    if (res.method === 'fullStats') {
        storage2.fullStats = {...res.data}
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
    if (action.type === 'SHOW_FULL_STATS') {
        action.type = 'SHOW_FULL_STATS_DATA'
        action.payload = storage2.fullStats
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
        storage.accountData = undefined
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

//FULL STATS

export let showFullStatsOnce = () => {
    let CoinName = localStorage.getItem('selectedCoin')
    socket2.emit('startPoolStats', {
        pool: CoinName,
        method: 'fullStats'
    })
    return {type: SHOW_FULL_STATS}
}
export let showFullStats = () => {
    return {type: SHOW_FULL_STATS}
}
export let dellFullStats = () => {
    socket2.emit('stopStats')
    return {type: DEL_FULLSTATS}
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
export let showAccountDataOnce = (pool, account) => {
    if (pool === 'keva' || pool === 'evox-prop' || pool === 'evox-solo') {
        return {type: SHOW_ACCOUNT_DATA, pool}
    }
    socket.emit('startPoolStats', {
        pool: pool,
        method: 'account',
        address: account
    })
    return {type: SHOW_ACCOUNT_DATA, pool}
}
export let showAccountData = () => {
    return {type: SHOW_ACCOUNT_DATA}
}
export let dellAccountData = () => {
    socket.emit('stopStats')
    return {type: DELL_ACCOUNT_DATA}
}