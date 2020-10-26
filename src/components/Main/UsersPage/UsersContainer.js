import * as React from 'react';
import {useEffect} from 'react';
import UsersList from './UsersList';
import {useDispatch} from 'react-redux';
import {
  getCurrentPage,
  getIsFetching,
  getIsFriend,
  getTotalPageCount,
  getUsers
} from '../../../selectors/users-selectors';
import {useShallowEqualSelector} from '../../../hooks';
import PaginationContainer from './PaginationContainer';
import {getUsersTC} from '../../../actions/users-actions';
import {useLocation, useParams} from 'react-router-dom';

const UsersContainer = () => {
  const
    userListState = useShallowEqualSelector(state => ({
      users: getUsers(state),
      isFetching: getIsFetching(state)
    })),
    paginationState = useShallowEqualSelector(state => ({
      currentPage: getCurrentPage(state),
      totalPageCount: getTotalPageCount(state),
      isFriend: getIsFriend(state)
    }));

  const dispatch = useDispatch();

  const
    {page} = useParams(),
    {pathname} = useLocation();

  const isFriend = pathname.match(/(?<=^\/).+(?=\/)/)[0] !== 'users';

  useEffect(() => {
    dispatch(getUsersTC(+page, isFriend));
  }, [dispatch, page, paginationState.currentPage, isFriend]);

  return (
    <>
      <PaginationContainer {...paginationState}/>
      <UsersList {...userListState}/>
    </>
  );
};

export default UsersContainer;