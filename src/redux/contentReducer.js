const SELECT_COIN = 'SELECT_COIN';
const FETCHING = 'FETCHING';

const ADD_COIN = 'ADD_COIN';


let initialState = {
    coins: [],
    selectedCoin: '',
    isFetching: true,
}

let count = 0

const contentReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.coins = [...state.coins];
    switch (action.type) {
        case ADD_COIN: {
            stateCopy.coins = [...action.payload]
            return stateCopy
        }
        case SELECT_COIN: {
            stateCopy.selectedCoin = action.coinName
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

export const selectCoin = (coinName) => {
    return {type: SELECT_COIN, coinName}
}
export const fetching = (status) => {
    return {type: FETCHING, status}
}
export default contentReducer;










