import usersAPI from '../api/usersAPI';
import {batch} from 'react-redux';
import types from '../actionTypes/users-actionTypes';

export const
  setUsersAC = users => ({type: types.SET_USERS, payload: {users}}),

  setTermAC = term => ({type: types.SET_TERM, payload: {term}}),

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
    payload: {isFriend}
  }),

  toggleIsFetchingAC = isFetching => ({
    type: types.TOGGLE_IS_FETCHING,
    payload: {isFetching}
  });

export const
  getUsersTC = (pageNumber, isFriend, term) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(false));

    const {items, totalCount} = await usersAPI.getUsers(pageNumber, isFriend, term);

    batch(() => {
      dispatch(setUsersAC(items));
      dispatch(setTotalUsersCountAC(totalCount));
      dispatch(toggleIsFetchingAC(true));
    });
  };