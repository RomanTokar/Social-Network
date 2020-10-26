import authAPI from '../api/authAPI';
import {startSubmit, stopSubmit} from 'redux-form';
import types from '../actionTypes/auth-actionTypes';
import profileAPI from '../api/profileAPI';
import securityAPI from '../api/securityAPI';
import {batch} from 'react-redux';

export const
    setUserDataAC = (authData, profileData) => ({
      type: types.SET_USER_DATA,
      payload: {authData: {...authData, isAuth: true}, profileData},
    }),

    userLogoutAC = () => ({type: types.USER_LOGOUT}),

    updatePhotoAuthAC = (photos) => ({type: types.SET_PHOTO, payload: {photos}}),

    setCaptchaUrlAC = (captcha) => ({type: types.SET_CAPTCHA_URL, payload: {captcha}});

export const
    setUserDataTC = () => async (dispatch) => {
      const {resultCode, data: authData} = await authAPI.getAuthData();

      if (!resultCode) {
        const profileData = await profileAPI.getProfile(authData.id);

        dispatch(setUserDataAC(authData, profileData));
      }
    },

    loginTC = (formData) => async (dispatch) => {
      dispatch(startSubmit('login'));

      const {resultCode, messages} = await authAPI.login(formData);

      if (!resultCode) {
        dispatch(setUserDataTC());
      } else {
        batch(() => {
          if (resultCode === 10) {
            dispatch(getCaptchaUrlTC());
          }

          const message = messages.length > 0 ? messages.join(', ') : 'Some error';

          dispatch(stopSubmit('login', {_error: message}));
        });
      }
    },

    logoutTC = () => async (dispatch) => {
      const {resultCode} = await authAPI.logout();

      if (!resultCode) {
        dispatch(userLogoutAC());
      }
    },

    getCaptchaUrlTC = () => async (dispatch) => {
      const {url} = await securityAPI.getCaptchaUrl();

      dispatch(setCaptchaUrlAC(url));
    };