const FETCHING = 'FETCHING/account';
const ADD_ACCOUNT_DATA = 'ADD_ACCOUNT_DATA';




let initialState = {
    isFetching: true,
    isAccountData: false,
    accountData: {}

}

const accountReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.accountData = {...state.accountData}
    switch (action.type) {
        case ADD_ACCOUNT_DATA:{
            if (action.payload === null){
                stateCopy.isAccountData = false;
            } else {
                stateCopy.accountData = {...action.payload}
                stateCopy.isAccountData = true;
            }
            return stateCopy
        }
        case FETCHING: {
            stateCopy.isFetching = action.payload
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
export default accountReducer;










