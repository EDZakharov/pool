const ADD_COINS = 'ADD_COINS';
const ADD_COIN_STATUS = 'ADD_COIN_STATUS';


let initialState = {
    coins: [],
    selectedCoin: '',
}

const ethReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.coins = [...state.coins];
    switch (action.type) {
        case ADD_COINS: {
            const index = stateCopy.coins.findIndex(el => el.pool === action.coin.pool)
            if (index === -1){
                stateCopy.coins.push(action.coin)
                return stateCopy
            } else {
                stateCopy.coins[index] = action.coin
                return stateCopy
            }
        }
        case ADD_COIN_STATUS: {
            stateCopy.selectedCoin = action.coinName
            console.log(stateCopy.selectedCoin)
            return stateCopy
        }
        default: {
            return stateCopy
        }

    }
}



export const addCoins = (coin) => {
    return {type: ADD_COINS, coin}
}
export const addCoinStatus = (coinName) => {
    return {type: ADD_COIN_STATUS, coinName}
}



export default ethReducer;