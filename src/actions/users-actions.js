import usersAPI from '../api/usersAPI';
import {batch} from 'react-redux';
import types from '../actionTypes/users-actionTypes';

export const
  setUsersAC = users => ({type: types.SET_USERS, payload: {users}}),

  setTotalUsersCountAC = totalUsersCount => ({
    type: types.SET_TOTAL_USERS_COUNT,
    payload: {totalPageCount: Math.ceil(totalUsersCount / 45)}
  }),

  changePageAC = currentPage => ({
    type: types.CHANGE_PAGE,
    payload: {currentPage}
  }),

  changeIsFriendAC = isFriend => ({
    type: types.TOGGLE_IS_FRIEND,
    payload: {isFriend},
  }),

  toggleIsFetchingAC = isFetching => ({
    type: types.TOGGLE_IS_FETCHING,
    payload: {isFetching}
  });

export const
  getUsersTC = (pageNumber, isFriend) => async (dispatch) => {
    batch(() => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(changePageAC(pageNumber));
      dispatch(changeIsFriendAC(isFriend));
    });

    const {items, totalCount} = await usersAPI.getUsers(pageNumber, isFriend);

    batch(() => {
      dispatch(setUsersAC(items));
      dispatch(setTotalUsersCountAC(totalCount));
      dispatch(toggleIsFetchingAC(true));
    });
  };