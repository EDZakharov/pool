const ADD_MINERS = 'ADD_MINERS';
const SHOW_FULL_STATS_DATA = 'SHOW_FULL_STATS_DATA';
const FETCHING = 'FETCHING';
const ADD_INPUT_DATA = 'ADD_INPUT_DATA';
const ADD_ACCOUNT_ADDRESS = 'ADD_ACCOUNT_ADDRESS';
const ADD_BLOCKS = 'ADD_BLOCKS';


let initialState = {
    miners: [],
    blocks: undefined,
    fullStats: false,
    isFetching: true,
    inputData: undefined,
    accountAddress:null
}

const coinPageReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.miners = [...state.miners];

    switch (action.type) {
        case ADD_MINERS: {
            stateCopy.miners = [...action.payload]
            return stateCopy
        }
        case ADD_BLOCKS: {
            // console.log(action.payload)
            if({...action.payload} !== undefined){
                stateCopy.blocks = {...action.payload}
            }
            return stateCopy
        }
        case SHOW_FULL_STATS_DATA: {
            stateCopy.fullStats = action.payload
            return stateCopy
        }
        case FETCHING: {
            stateCopy.isFetching = action.payload
            return stateCopy

        }
        case ADD_ACCOUNT_ADDRESS: {
            if (action.payload !== null) {
                stateCopy.accountAddress = action.payload
                if(action.payload !== ''){
                    if(action.payload.length > 20){
                        localStorage.setItem('account',action.payload)
                    }
                }
            } else {
                stateCopy.accountAddress = null
            }
            return stateCopy
        }
        case ADD_INPUT_DATA: {
            stateCopy.accountAddress = action.payload
            localStorage.setItem('account',action.payload)
            return stateCopy

        }
        default: {
            return stateCopy
        }

    }
}

export const fetching = (payload) => {
    return {type: FETCHING, payload}
}

export const addInputValue = (payload) => {
    return {type: ADD_INPUT_DATA, payload}
}

export const addAccountAddress = (payload) => {
    return {type: ADD_ACCOUNT_ADDRESS, payload}
}
export default coinPageReducer;