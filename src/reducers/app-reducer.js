import types from '../actionTypes/app-actionTypes';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE_APP:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;