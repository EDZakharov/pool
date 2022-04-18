const ADD_COIN = 'ADD_COIN';
const SELECT_COIN = 'SELECT_COIN';
const ADD_MINERS = 'ADD_MINERS';
const STATUS_CODE = 'STATUS_CODE';
const FETCHING = 'FETCHING';


let initialState = {
    coins: [],
    selectedCoin: '',
    miners: {
        hashrate : 0,
        miners: {},
        minersTotal: 0,
        now: 0
    },
    statusCode: 0,
    isFetching: true
}

const contentReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.coins = [...state.coins];
    stateCopy.miners = {...state.miners};
    stateCopy.miners.miners = {...state.miners.miners}

    switch (action.type) {
        case ADD_COIN: {
            const index = stateCopy.coins.findIndex(el => el.pool === action.coin.pool)
            if (index === -1){
                stateCopy.coins.push(action.coin)
                return stateCopy
            } else {
                stateCopy.coins[index] = action.coin
                return stateCopy
            }
        }
        case SELECT_COIN: {
            stateCopy.selectedCoin = action.coinName
            return stateCopy
        }
        case ADD_MINERS: {
            let b = {miners: {...action.miners[0]}}
            let c = {miners: {...b.miners.miners}}
            let k = Object.keys(c.miners)
            let miners = k.map(el => { return {
                [el]: c.miners[el]
            }})
            stateCopy.miners.miners = {...miners}


            return stateCopy
        }
        case STATUS_CODE: {
            stateCopy.statusCode = action.statusCode

            return stateCopy
        }
        case FETCHING: {
            stateCopy.isFetching = action.status
            return stateCopy
        }
        default: {
            return stateCopy
        }

    }
}

export const addCoinData = (coin) => {
    return {type: ADD_COIN, coin}
}
export const selectCoin = (coinName) => {
    return {type: SELECT_COIN, coinName}
}
export const addMiners = (miners) => {
    return {type: ADD_MINERS, miners}
}
export const statusCode = (statusCode) => {
    return {type: STATUS_CODE, statusCode}
}
export const fetching = (status) => {
    return {type: FETCHING, status}
}
export default contentReducer;














