import * as React from 'react';
import {useEffect} from 'react';
import UsersList from './UsersList';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCurrentPage,
  getIsFetching,
  getIsFriend,
  getTerm,
  getTotalPageCount,
  getUsers
} from '../../../selectors/users-selectors';
import PaginationContainer from './PaginationContainer';
import {changePageAC, getUsersTC, setTermAC} from '../../../actions/users-actions';
import {useLocation, useParams} from 'react-router-dom';
import SearchContainer from './SearchContainer';

const UsersContainer = () => {
  const users = useSelector(state => getUsers(state));
  const isFetching = useSelector(state => getIsFetching(state));
  const currentPage = useSelector(state => getCurrentPage(state));
  const totalPageCount = useSelector(state => getTotalPageCount(state));
  const isFriend = useSelector(state => getIsFriend(state));
  const term = useSelector(state => getTerm(state));

  const dispatch = useDispatch();
  const {page} = useParams();
  const {pathname} = useLocation();

  const localTerm = new URL(window.location.href).searchParams.get('term');
  const localIsFriend = pathname.match(/(?<=^\/).+(?=\/)/)[0] !== 'users';

  useEffect(() => {
    dispatch(getUsersTC(currentPage, localIsFriend, term));
  }, [dispatch, currentPage, localIsFriend, term]);

  useEffect(() => {
    dispatch(setTermAC(localTerm || ''));
  }, [dispatch, localTerm]);

  useEffect(() => {
    dispatch(changePageAC(+page))
  }, [dispatch, page])

  return (
    <>
      <PaginationContainer {...{currentPage, totalPageCount, isFriend, term}}/>
      <SearchContainer {...{isFetching, term, isFriend}}/>
      <UsersList {...{users, isFetching, isFriend}}/>
    </>
  );
};

export default UsersContainer;