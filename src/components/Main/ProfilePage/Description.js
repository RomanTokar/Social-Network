import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Skeleton} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import {blue} from "@material-ui/core/colors";

const useStyles = makeStyles({
    title: {
        color: blue[500]
    },
    content: {
        wordWrap: 'break-word'
    }
})

const Description = ({isFetching, aboutMe, lookingForAJobDescription, lookingForAJob}) => {
    const classes = useStyles();

    return (
        isFetching
            ? <div>
                <Typography className={classes.content}>
                    <span className={classes.title}>about Me:  </span>
                    {aboutMe}
                </Typography>
                <Typography className={classes.content}>
                    <span className={classes.title}>lookingForAJob:  </span>
                    {lookingForAJob ? 'Yes' : 'No'}
                </Typography>
                <Typography className={classes.content}>
                    <span className={classes.title}>lookingForAJobDescription:  </span>
                    {lookingForAJobDescription}
                </Typography>
            </div>
            : <Skeleton variant={"rect"} height={200}/>
    )
}

export default Description;