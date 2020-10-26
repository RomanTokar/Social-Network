import React from "react";
import {Skeleton} from "@material-ui/lab";
import {Divider, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import StatusContainer from "./StatusContainer";
import Description from "./Description";

const useStyles = makeStyles({
    card: {
        minWidth: '92%',
        padding: '2% 4%',
        overflow: 'visible'
    },
    cardContent: {
        padding: 0,
    },
    divider: {
        margin: '10px 0'
    }
});

const ProfileInfo = ({isOwner, isFetching, profile: {fullName, status, aboutMe, lookingForAJobDescription, lookingForAJob}}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant={"h6"}>
                    {isFetching ? (fullName) : <Skeleton/>}
                </Typography>
                <StatusContainer {...{isFetching, status, isOwner}}/>
                <Divider className={classes.divider}/>
                <Description {...{isFetching, aboutMe, lookingForAJob, lookingForAJobDescription}}/>
            </CardContent>
        </Card>
    )
}

export default ProfileInfo;