import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import {Button, CardActionArea, CardMedia} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import defaultAvatar from '../../../assets/images/user.png';
import Skeleton from "@material-ui/lab/Skeleton";
import Modal from "@material-ui/core/Modal";
import ModalWindow from "./ModalWindow";
import CardActions from "@material-ui/core/CardActions";
import {useDispatch} from "react-redux";
import {toggleFollowUserTC} from "../../../actions/profile-actions";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        minWidth: '92%',
        padding: '4%',
    },
    media: {
        position: 'relative',
        height: 0,
        paddingTop: '100%',
        opacity: 1,
        '&:hover': {
            cursor: 'pointer',
        }
    },
    popper: {
        position: 'absolute',
        bottom: 0,
        color: 'white',
        padding: 10,
        backgroundColor: 'black',
        opacity: 0.6,
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            color: 'whitesmoke',
            backgroundColor: 'gray'
        }
    }
});

const Avatar = ({isOwner, isFetching, profile: {photos, userId, followed}}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [openChangePhoto, setOpenChangePhoto] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onMouseEnter = (event) => {
        setOpenChangePhoto(true)
    }

    const onMouseLeave = (event) => {
        setOpenChangePhoto(false)
    }

    const handleClose = (event) => {
        setOpenModal(false)
    }

    const handleOpen = (event) => {
        setOpenModal(true)
    }

    const toggleIsFetching = async (event) => {
        setButtonDisabled(true)
        await dispatch(toggleFollowUserTC(!followed, userId))
        setButtonDisabled(false)
    }

    const editProfile = (event) => {
        history.push('/edit')
    }

    return (
        <Card className={classes.card}>
            {isFetching
                ? <CardMedia onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}
                             className={classes.media}
                             image={photos.large ? photos.large : defaultAvatar}
                >
                    {openChangePhoto && isOwner &&
                    <CardActionArea className={classes.popper} onClick={handleOpen}>
                        <div>
                            Change Photo
                        </div>
                    </CardActionArea>
                    }
                </CardMedia>
                : <Skeleton animation="pulse" variant="rect" className={classes.media}/>
            }
            <Modal
                open={openModal}
            >
                {ModalWindow({handleClose})}
            </Modal>
            <CardActions style={{display: "flex", justifyContent: "center", margin: 10}}>
                {isFetching &&
                (isOwner
                        ? <Button color={"primary"} variant={"contained"} onClick={editProfile}>Edit profile</Button>
                        : followed
                            ? <Button color={"primary"} variant={"outlined"} disabled={buttonDisabled} onClick={toggleIsFetching}>Unfollow</Button>
                            : <Button color={"primary"} variant={"contained"} disabled={buttonDisabled} onClick={toggleIsFetching}>Follow</Button>
                )
                }
            </CardActions>
        </Card>
    )
}

export default Avatar;