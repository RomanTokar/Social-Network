import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey"
import CardActionArea from "@material-ui/core/CardActionArea";
import {Avatar, List, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useDispatch} from "react-redux";
import {logoutTC} from "../../actions/auth-actions";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItem from "@material-ui/core/ListItem";
import defaultAvatar from '../../assets/images/user.png'

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    list: {
        borderRadius: 5,
        position: 'absolute',
        top: 75,
        right: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'white',
        boxShadow: '1px 1px 10px 1px gray',
        '&::before': {
            content: '""',
            position: 'absolute',
            width: 0,
            height: 0,
            left: '70%',
            bottom: '100%',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '5px solid white'
        }
    },
    card: {
        backgroundColor: ({open}) => open ? blue[700] :blue[800],
        boxShadow: "none"
    },
    cardActionArea: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: 10
    },
    cardContent: {
        padding: 0
    },
    avatar: {
        width: '2em',
        height: '2em',
        margin: '0 10px',
        backgroundColor: "orange"
    },
    listItem: {
        transition: '0.25s',
        display: "flex",
        justifyContent: "center",
        cursor: 'pointer',
        color: 'black',
        '&:hover': {
            backgroundColor: grey[100]
        }
    }
});

const UserMenu = ({authData, profileData: {photos, fullName}}) => {
    const
        [open, setOpen] = useState(false),
        classes = useStyles({open}),
        dispatch = useDispatch();

    const logOut = () => {
        dispatch(logoutTC())
    }

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        authData.isAuth &&
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardActionArea} onClick={handleClick}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant='body1' style={{color: 'white'}}>{fullName}</Typography>
                        </CardContent>
                        <Avatar className={classes.avatar} src={photos.small ? photos.small : defaultAvatar}>R</Avatar>
                        <ExpandMoreIcon style={{color: 'lightgray'}}/>
                    </CardActionArea>
                </Card>
                {open &&
                <List className={classes.list}>
                    <ListItem className={classes.listItem} onClick={logOut}>Logout</ListItem>
                </List>
                }
            </div>
        </ClickAwayListener>
    );
}

export default UserMenu;