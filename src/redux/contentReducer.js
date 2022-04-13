const ADD_COIN = 'ADD_COIN';
// const ADD_STATUS = 'ADD_STATUS';
// const RELOAD = 'RELOAD';


let initialState = {
    coins: [],
    // selectedCoin: '',
}

const contentReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.coins = [...state.coins];
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
        // case ADD_STATUS: {
        //     stateCopy.selectedCoin = action.coinName
        //     console.log(stateCopy.selectedCoin)
        //     return stateCopy
        // }
        // case RELOAD: {
        //     return stateCopy
        // }
        default: {
            return state
        }

    }
}



export const addCoinData = (coin) => {
    return {type: ADD_COIN, coin}
}
// export const addStatus = (coinName) => {
//     return {type: ADD_STATUS, coinName}
// }
// export const reloadAC = () => {
//     return {type: RELOAD, }
// }


export default contentReducer;











// Ну если не трудно, то было бы не плохо, если будет куча монет разбить их
// по разным объектам и описывать там уже уникальные свойства каждой монеты.

//Пример:

// let objData = [
//     {
//         id: 1,
//         name: 'Etherium',
//         algo: 'eth',
//         poolHashrate: 100500 + 'GHS',
//         minersTotal: 1322,
//         maturedTotal: 143,
//         BlockHeight: 14553064,
//         lastBlockFound: 14553064,
//         Timestamp: `45 mins ago (Apr-09-2022 06:13:54 PM +UTC)`,
//         BlockReward: 2.093686490947335203,
//         Difficulty: 13256087656473761,
//     },
//     {
//         id: 2,
//         name: 'Raven',
//         algo: 'rvn',
//         poolHashrate: 100500 + 'GHS',
//         minersTotal: 1322,
//         maturedTotal: 143,
//         BlockHeight: 14553064,
//         lastBlockFound: 14553064,
//         Timestamp: `45 mins ago (Apr-09-2022 06:13:54 PM +UTC)`,
//         BlockReward: 2.093686490947335203,
//         Difficulty: 13256087656473761,
//     }
// ]



















