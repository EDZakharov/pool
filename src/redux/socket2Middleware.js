import io from "socket.io-client";
const socket2 = io('https://ws.e4pool.com/');

const SHOW_FULL_STATS = 'SHOW_FULL_STATS';
const DEL_FULLSTATS = 'DEL_FULLSTATS';


let storage2 = {
    fullStats: {},
}

socket2.on('update', res => {
    if (res.method === 'fullStats') {
        storage2.fullStats = {...res.data}
    }
})


export let socket2Middleware = store => next => action => {
    if (typeof action === 'function') {
        return next(action)
    }
    if (action.type === 'SHOW_FULL_STATS') {
        action.type = 'SHOW_FULL_STATS_DATA'
        action.payload = storage2.fullStats
        return next(action)
    }
    return next(action)
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

