import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import {useSelector} from "react-redux";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const useStyles = makeStyles({
    headerWrapper: {
        backgroundColor: blue[800],
    },
    header: {
        padding: 10,
    }
})

const Header = () => {
    const classes = useStyles();
    const profileData = useSelector(state => state.auth.profileData);
    const authData = useSelector(state => state.auth.authData);

    return (
        <>
            <Grid item container lg={12} md={12} sm={12} className={classes.headerWrapper}>
                <Grid item lg={2} md={1}/>
                <Grid item container lg={8} md={10} sm={12} className={classes.header} alignItems={"center"}>
                    <Grid item>
                        <Logo/>
                    </Grid>
                    <Grid item lg md sm/>
                    <Grid item>
                        <UserMenu profileData={profileData} authData={authData}/>
                    </Grid>
                </Grid>
                <Grid item lg={2} md={1}/>
            </Grid>
        </>
    )
}

export default Header;