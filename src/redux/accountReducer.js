const FETCHING = 'FETCHING/account';
const ADD_ACCOUNT_DATA = 'ADD_ACCOUNT_DATA';
const CLEAR_CASH = 'CLEAR_CASH';





let initialState = {
    isFetching: true,
    accountAddress: null,
    accountData: undefined
}

const accountReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_ACCOUNT_DATA:{
            // console.log(action)
            if (action.payload){
                stateCopy.accountData = {...action.payload}
            }
            return stateCopy
        }
        case FETCHING: {
            stateCopy.isFetching = action.payload
            return stateCopy
        }
        case CLEAR_CASH: {
            stateCopy.accountData = undefined
            return stateCopy
        }
        default: {
            return stateCopy
        }

    }
}

export const fetchingAccount = (payload) => {
    return {type: FETCHING, payload}
}

export const clearCash= () => {
    return {type: CLEAR_CASH}
}

export default accountReducer;










