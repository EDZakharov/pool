import io from 'socket.io-client'
import {fetching} from "./coinPageReducer";

const socket = io('https://ws.e4pool.com/');

const SHOW_COINS = 'SHOW_COINS';
const DELL_COINS = 'DELL_COINS';

const SHOW_MINERS = 'SHOW_MINERS';
const DELL_MINERS = 'DELL_MINERS';

const SHOW_ACCOUNT_DATA = 'SHOW_ACCOUNT_DATA';
const DELL_ACCOUNT_DATA = 'DELL_ACCOUNT_DATA';

const SHOW_BLOCKS = 'SHOW_BLOCKS';
const DELL_BLOCKS = 'DELL_BLOCKS';

const SHOW_FULL_STATS = 'SHOW_FULL_STATS';
const DEL_FULLSTATS = 'DEL_FULLSTATS';

let storage = {
    coins: [],
    miners: undefined,
    fullStats: undefined,
    accountData: undefined,
    blocks: undefined,
}


socket.on('update', res => {
    // console.log(res)
    if (res.method === 'stats') {
        let index = storage.coins.findIndex(el => el.pool === res.data.pool);
        if (index === -1) {
            storage.coins.push(res.data)
        } else {
            storage.coins[index] = res.data
        }
    }

    if (res.method === 'miners') {
        if (res.data !== undefined) {

            storage.miners = [...res.data.miners]
        }

    }
    if (res.method === 'account') {
        if (res.error !== 'Method not allowed') {
            if (res.data !== undefined) {
                storage.accountData = {...res.data}
                if(storage.accountData.workers && storage.accountData.workers.length !== 0) {
                    storage.accountData.workers.sort((a,b)=>{
                        if (a.hr < b.hr){
                            return 1
                        } else return -1
                    })
                }
            }

        } else {
            console.log(res.error)
        }
    }
    if (res.method === 'blocks') {
        if (res.data !== undefined) {
            storage.blocks = {...res.data}
        }
    }
    if (res.method === 'fullStats') {
        storage.fullStats = {...res.data}
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
    if (action.type === 'SHOW_BLOCKS') {
        action.type = 'ADD_BLOCKS'
        action.payload = storage.blocks
        return next(action)
    }
    if (action.type === 'SHOW_ACCOUNT_DATA') {
        action.type = 'ADD_ACCOUNT_DATA'
        action.payload = storage.accountData
        storage.accountData = undefined
        return next(action)
    }
    if (action.type === 'SHOW_FULL_STATS') {
        action.type = 'SHOW_FULL_STATS_DATA'
        action.payload = storage.fullStats
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
    storage.miners = undefined
    return {type: DELL_MINERS}
}
//BLOCKS_______________________________
export let ShowBlocksOnce = (pool) => {
    socket.emit('startPoolStats', {
        pool: pool,
        method: 'blocks'
    })
    return {type: SHOW_BLOCKS, payload: pool}
}
export const showBlocks = (pool) => {
    return {type: SHOW_BLOCKS, payload: pool}
}
export let dellBlocksData = () => {
    socket.emit('stopStats')
    storage.blocks = undefined
    return {type: DELL_BLOCKS}
}

//FULL STATS
export let showFullStatsOnce = (coinName) => {
    storage.fullStats = undefined

    socket.emit('startPoolStats', {
        pool: coinName,
        method: 'fullStats'
    })
    return {type: SHOW_FULL_STATS}
}

export let showFullStats = () => {
    return {type: SHOW_FULL_STATS}
}
export let dellFullStats = () => {
    socket.emit('stopStats')
    return {type: DEL_FULLSTATS}
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