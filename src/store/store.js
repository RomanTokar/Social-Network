import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';
import reducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;