import {setUserDataTC} from './auth-actions';
import types from '../actionTypes/app-actionTypes';

export const
  initializeAppAC = () => ({type: types.INITIALIZE_APP});

export const
  initializeAppTC = () => (dispatch) => {
    Promise.all([dispatch(setUserDataTC())])
      .then(() => {
        dispatch(initializeAppAC());
      });
  };