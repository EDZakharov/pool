const ADD_COIN = 'ADD_COIN';
const SELECT_COIN = 'SELECT_COIN';
const ADD_MINERS = 'ADD_MINERS';
const STATUS_CODE = 'STATUS_CODE';
const FETCHING = 'FETCHING';
const PAYMENTS = 'PAYMENTS';


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
    isFetching: true,
    payments: []
}

const contentReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.coins = [...state.coins];
    stateCopy.miners = {...state.miners};
    stateCopy.payments = [...state.payments];
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
            let miners2 = sortMinersToHashrate(action)
            stateCopy.miners.miners = {...miners2}
            return stateCopy
        }
        case STATUS_CODE: {
            stateCopy.statusCode = action.statusCode
            return stateCopy
        }
        case PAYMENTS: {
            console.log(action.payments.data.payments)
            stateCopy.payments = action.payments.data.payments
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
export const addPayments = (payments) => {
    return {type: PAYMENTS, payments}
}
export const fetching = (status) => {
    return {type: FETCHING, status}
}
export default contentReducer;


// Сортировка майнеро по хэшрейту
let sortMinersToHashrate = (action) => {
    let b = {miners: {...action.miners[0].miners}}
    let k = Object.keys(b.miners)
    let miners = k.map(el => {
        return {[el]: b.miners[el]}})
    let minersSorted = miners.sort((el1, el2) => {
        let key = Object.keys(el1);
        let newKey = key[0]
        let key2 = Object.keys(el2);
        let newKey2 = key2[0]
        if (el1[newKey].hr > el2[newKey2].hr) {return -1}})
    return minersSorted.map(res => {
        let x = {};
        let keys = Object.getOwnPropertyNames(res)
        for(const i in res) {x = res[i]}
        return {[keys[0]]: x}})
}








