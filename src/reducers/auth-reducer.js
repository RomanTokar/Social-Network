import types from "../actionTypes/auth-actionTypes";

let initialState = {
    authData: {
        id: null,
        login: null,
        email: null,
        captcha: null,
        isAuth: false
    },
    profileData: {
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null
        }
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case types.SET_PHOTO:
            return {
                ...state,
                profileData: {...state.profileData, ...action.payload}
            }
        case types.SET_CAPTCHA_URL:
            return {
                ...state,
                authData: {...state.authData, ...action.payload}
            }
        default:
            return state;
    }
}

export default authReducer;