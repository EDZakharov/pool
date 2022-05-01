const SELECT_COIN = 'SELECT_COIN';
const FETCHING = 'FETCHING';

const ADD_COIN = 'ADD_COIN';


let initialState = {
    coins: [],
    selectedCoin: '',
<<<<<<< HEAD
    miners: [],
    statusCode: 0,
=======
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a
    isFetching: true,
}

let count = 0

const contentReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.coins = [...state.coins];
<<<<<<< HEAD
    stateCopy.miners = [...state.miners];
    stateCopy.payments = [...state.payments];
    stateCopy.miners.miners = {...state.miners.miners}

    switch (action.type) {
        case ADD_COIN: {
            const index = stateCopy.coins.findIndex(el => el.pool === action.coin.pool)
            if (index === -1){
                stateCopy.coins.push(action.coin)
            } else {
                stateCopy.coins[index] = action.coin
            }
=======
    switch (action.type) {
        case ADD_COIN: {
            stateCopy.coins = [...action.payload]
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a
            return stateCopy
        }
        case SELECT_COIN: {
            stateCopy.selectedCoin = action.coinName
            return stateCopy
        }
<<<<<<< HEAD
        case ADD_MINERS: {
            stateCopy.miners.miners = action.miners[0].miners
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
=======
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a
        case FETCHING: {
            stateCopy.isFetching = action.status
            return stateCopy
        }
        default: {
            return stateCopy
        }

    }
}

export const selectCoin = (coinName) => {
    return {type: SELECT_COIN, coinName}
}
export const fetching = (status) => {
    return {type: FETCHING, status}
}
export default contentReducer;


<<<<<<< HEAD
// Сортировка майнеро по хэшрейту
// let sortMinersToHashrate = (action) => {
//     let b = {miners: {...action.miners[0].miners}}
//     let k = Object.keys(b.miners)
//     let miners = k.map(el => {
//         return {[el]: b.miners[el]}})
//     let minersSorted = miners.sort((el1, el2) => {
//         let key = Object.keys(el1);
//         let newKey = key[0]
//         let key2 = Object.keys(el2);
//         let newKey2 = key2[0]
//         if (el1[newKey].hr > el2[newKey2].hr) {return -1}})
//     return minersSorted.map(res => {
//         let x = {};
//         let keys = Object.getOwnPropertyNames(res)
//         for(const i in res) {x = res[i]}
//         return {[keys[0]]: x}})
// }
=======
>>>>>>> 71e8514da567b6dab1ed89278cf1204ffb95682a








