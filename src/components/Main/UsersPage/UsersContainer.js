import * as React from 'react';
import {useEffect} from 'react';
import UsersList from './UsersList';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCurrentPage,
  getIsFetching,
  getIsFriend,
  getTotalPageCount,
  getUsers
} from '../../../selectors/users-selectors';
import PaginationContainer from './PaginationContainer';
import {getUsersTC} from '../../../actions/users-actions';
import {useLocation, useParams} from 'react-router-dom';

const UsersContainer = () => {
  const users = useSelector(state => getUsers(state));
  const isFetching = useSelector(state => getIsFetching(state));
  const currentPage = useSelector(state => getCurrentPage(state));
  const totalPageCount = useSelector(state => getTotalPageCount(state));
  const isFriend = useSelector(state => getIsFriend(state));

  const dispatch = useDispatch();
  const {page} = useParams();
  const {pathname} = useLocation();

  const localIsFriend = pathname.match(/(?<=^\/).+(?=\/)/)[0] !== 'users';

  useEffect(() => {
    if (+page <= totalPageCount || totalPageCount === 0) {
      if (!isFriend && +page === currentPage && localIsFriend === isFriend) {

      } else {
        dispatch(getUsersTC(+page, localIsFriend));
      }
    }
  }, [dispatch, page, localIsFriend, totalPageCount, currentPage, isFriend]);

  return (
    <>
      <PaginationContainer {...{currentPage, totalPageCount, isFriend}}/>
      <UsersList {...{users, isFetching}}/>
    </>
  );
};

export default UsersContainer;