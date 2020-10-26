import types from '../actionTypes/profile-actionTypes';

let initialState = {
    profile: {
        status: null,
        followed: false,
    },
    isOwner: false,
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PROFILE:
        case types.SET_STATUS:
        case types.SET_PHOTO:
        case types.SET_FOLLOWED:
            return {
                ...state,
                profile: {...state.profile, ...action.payload}
            }
        case types.TOGGLE_IS_FETCHING:
        case types.TOGGLE_IS_OWNER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default profileReducer;