import React from "react";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {blue} from "@material-ui/core/colors";
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    navLink: {
        textDecoration: 'none',
        padding: 5,
        transition: '0.25s',
        '&:hover': {
            backgroundColor: blue[100]
        }
    },
    text: {
        color: blue[600],
        margin: 0
    },
    icon: {
        color: blue[600],
        padding: '0 10px',
        minWidth: 20
    },
    list: {
        padding: '5px 0',
        backgroundColor: blue[50],
        borderRadius: 5,
        margin: 5,
    }
})

const NavBar = () => {
    const classes = useStyles();
    const isAuth = useSelector(state => state.auth.authData.isAuth);

    const CustomListItem = ({to, text, Icon}) => {
        return (
            <ListItem to={to} component={Link} classes={{root: classes.navLink}}>
                <ListItemIcon className={classes.icon}>
                    <Icon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary={text} className={classes.text}/>
            </ListItem>
        )
    }

    return (
        isAuth &&
        <List component="nav" className={classes.list}>
            <CustomListItem to={'/profile'} text={'Profile'} Icon={PersonIcon}/>
            <CustomListItem to={'/users/1'} text={'Users'} Icon={PeopleIcon}/>
            <CustomListItem to={'/friends/1'} text={'Friends'} Icon={PeopleIcon}/>
        </List>
    )
}

export default NavBar;