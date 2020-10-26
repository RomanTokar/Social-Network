import profileAPI from '../api/profileAPI';
import types from '../actionTypes/profile-actionTypes';
import {getUserData} from '../selectors/auth-selectors';
import {batch} from 'react-redux';
import {setUserDataTC, updatePhotoAuthAC} from './auth-actions';
import followAPI from '../api/followAPI';
import {stopSubmit} from 'redux-form';

export const
    setProfileAC = (profile) => ({type: types.SET_PROFILE, payload: profile}),

    setStatusAC = (status) => ({type: types.SET_STATUS, payload: {status}}),

    toggleIsFetchingAC = isFetching => ({
      type: types.TOGGLE_IS_FETCHING,
      payload: {isFetching},
    }),

    toggleIsOwnerAC = isOwner => ({
      type: types.TOGGLE_IS_OWNER,
      payload: {isOwner},
    }),

    updatePhotoAC = (photos) => ({type: types.SET_PHOTO, payload: {photos}}),

    setFollowedAC = (followed) => ({
      type: types.SET_FOLLOWED,
      payload: {followed},
    });

export const
    setProfileTC = (isOwner, userId) => async (dispatch, getState) => {
      dispatch(toggleIsFetchingAC(false));

      batch(async () => {
        let profileData;

        if (isOwner || userId === getState().auth.authData.id) {
          profileData = getUserData(getState()).profileData;

          dispatch(toggleIsOwnerAC(true));
        } else {
          profileData = await profileAPI.getProfile(userId);

          dispatch(toggleIsOwnerAC(false));

          await dispatch(setFollowedTC(userId));
        }

        dispatch(setProfileAC(profileData));
        await dispatch(setStatusTC(profileData.userId));
        dispatch(toggleIsFetchingAC(true));
      });
    },

    setStatusTC = (userId) => async (dispatch) => {
      const status = await profileAPI.getStatus(userId);

      dispatch(setStatusAC(status));
    },

    updateStatusTC = (status) => async (dispatch) => {

      const {resultCode} = await profileAPI.updateStatus(status);

      if (!resultCode) {
        dispatch(setStatusAC(status));
      }
    },

    updatePhotoTC = (file) => async (dispatch) => {
      const {resultCode, data: {photos}} = await profileAPI.updatePhoto(file);

      if (!resultCode) {
        batch(() => {
          dispatch(updatePhotoAC(photos));
          dispatch(updatePhotoAuthAC(photos));
        });
      }
    },

    toggleFollowUserTC = (isFollow, userId) => async (dispatch) => {
      const {resultCode} = await followAPI.toggleFollowUser(isFollow, userId);

      if (!resultCode) {
        dispatch(setFollowedAC(isFollow));
      }
    },

    setFollowedTC = (userId) => async (dispatch) => {
      const followed = await followAPI.getUserFollowed(userId);

      dispatch(setFollowedAC(followed));
    },

    updateProfileTC = (formData) => async (dispatch) => {
      const {resultCode, messages} = await profileAPI.updateProfile(formData);

      if (!resultCode) {
        dispatch(setUserDataTC());
      } else {
        const message = messages.length > 0
            ? messages.join(', ')
            : 'Some error';

        dispatch(stopSubmit('edit', {_error: message}));
      }
    };
