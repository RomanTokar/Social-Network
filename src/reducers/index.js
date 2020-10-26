import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import {reducer as formReducer} from "redux-form";
import types from "../actionTypes/auth-actionTypes";

const rootReducer = (state, action) => {
    if (action.type === types.USER_LOGOUT) {
       state = undefined;
    }

    return reducer(state, action)
}

const reducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

export default rootReducer;