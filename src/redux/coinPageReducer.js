const ADD_MINERS = 'ADD_MINERS';
const FETCHING = 'FETCHING';


let initialState = {
    miners: [],
    isFetching: true
}

const coinPageReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.miners = [...state.miners];

    switch (action.type) {
        case ADD_MINERS: {
            stateCopy.miners = [...action.payload]
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

export const fetching = (payload) => {
    return {type: FETCHING, payload}
}


export default coinPageReducer;
