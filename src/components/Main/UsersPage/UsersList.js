import React, {memo} from "react";
import Grid from "@material-ui/core/Grid";
import UserItem from "./UserItem";


const UsersList = ({users, isFetching}) => {

    return (
        <Grid container spacing={2}>
            {users.length
                ? users.map((user) => <UserItem key={user.id} isFetching={isFetching}>{user}</UserItem>)
                : new Array(45).fill('').map((el, index) => <UserItem key={index} isFetching={isFetching}>{el}</UserItem>)}
        </Grid>
    )
};

export default memo(UsersList);