import * as React from "react";
import {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useShallowEqualSelector} from "../../../hooks";
import {useDispatch} from "react-redux";
import {setProfileTC} from "../../../actions/profile-actions";
import {Grid} from "@material-ui/core";
import Avatar from "./Avatar";
import ProfileInfo from "./ProfileInfo";

const ProfileContainer = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const isOwner = !userId;
    const state = useShallowEqualSelector(state => ({
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        isOwner: state.profilePage.isOwner,
    }))

    useEffect(() => {
        dispatch(setProfileTC(isOwner, +userId))
    }, [dispatch, isOwner, userId])

    return (
        <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <Avatar {...state}/>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}>
                <ProfileInfo {...state}/>
            </Grid>
        </Grid>
    )
}

export default ProfileContainer;