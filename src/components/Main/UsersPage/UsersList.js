import React, {memo} from 'react';
import Grid from '@material-ui/core/Grid';
import UserItem from './UserItem';
import Alert from '@material-ui/lab/Alert';

const UsersList = ({users, isFetching}) => {
  const defaultUser = {
    name: '',
    id: null,
    photos: {
      large: null
    }
  };

  return (
    <Grid container spacing={2}>
      {isFetching
        ? (users.length
            ? users.map((user) => <UserItem key={user.id} isFetching={isFetching}>{user}</UserItem>)
            :
            <Grid container justify={'center'}>
              <Grid item>
                <Alert severity="info">
                  Nothing wasn't found
                </Alert>
              </Grid>
            </Grid>
        )
        : new Array(45)
          .fill(defaultUser)
          .map((user, index) => <UserItem key={index} isFetching={isFetching}>{user}</UserItem>)}
    </Grid>
  );
};

export default memo(UsersList);