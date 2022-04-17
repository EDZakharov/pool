const ADD_COIN = 'ADD_COIN';
const SELECT_COIN = 'SELECT_COIN';
const ADD_MINERS = 'ADD_MINERS';
// const RERENDER = 'RERENDER';


let initialState = {
    coins: [],
    selectedCoin: '',
    miners:[]
}

const contentReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.coins = [...state.coins];
    stateCopy.miners = [...state.miners];

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
            stateCopy.miners = []
            let b = {
                miners: {...action.miners[0]}
            }
            stateCopy.miners.push(Object.getOwnPropertyNames(b.miners.miners))
            console.log(stateCopy.miners)

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
// export const rerender = () => {
//     return {type: RERENDER}
// }
export default contentReducer;














