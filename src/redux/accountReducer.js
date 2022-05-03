const FETCHING = 'FETCHING/account';
const ADD_ACCOUNT_DATA = 'ADD_ACCOUNT_DATA';
const ADD_ACCOUNT_ADDRESS = 'ADD_ACCOUNT_ADDRESS';




let initialState = {
    isFetching: true,
    isAccountData: false,
    accountAddress: null,
    accountData: {}
}

const accountReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.accountData = {...state.accountData}
    switch (action.type) {
        case ADD_ACCOUNT_DATA:{
            if (action.payload === null){
                stateCopy.isAccountData = false;
            }
            if (action.payload !== null){
                stateCopy.accountData = {...action.payload}
                stateCopy.isAccountData = true;
                stateCopy.isFetching = false;

            }
            return stateCopy
        }
        case FETCHING: {
            stateCopy.isFetching = action.payload
            return stateCopy
        }
        case ADD_ACCOUNT_ADDRESS: {
            if (action.payload !== null) {
                if(action.payload.length > 20){
                    stateCopy.accountAddress = action.payload
                    localStorage.setItem('account',action.payload)
                }
            } else {
                stateCopy.accountAddress = null
            }
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
export const addAccountAddress = (payload) => {
    return {type: ADD_ACCOUNT_ADDRESS, payload}
}
export default accountReducer;










