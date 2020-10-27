import types from '../actionTypes/users-actionTypes';

let initialState = {
  users: [],
  currentPage: 0,
  totalPageCount: 0,
  term: '',
  isFriend: false,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
    case types.SET_TOTAL_USERS_COUNT:
    case types.CHANGE_PAGE:
    case types.TOGGLE_IS_FETCHING:
    case types.TOGGLE_IS_FRIEND:
    case types.SET_TERM:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;