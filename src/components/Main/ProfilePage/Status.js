import React, {memo} from "react";
import {CardActionArea, Typography} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Field, reduxForm} from "redux-form";
import CustomTextField from "../../common/FormControls/CustomTextField";
import {maxLengthCreator, required} from "../../../tools/validators/validators";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
    root: {
        position: 'relative',
        padding: 10,
        margin: '5px 0',
    },
    dropdown: {
        backgroundColor: 'whitesmoke',
        boxShadow: '1px 1px 10px 1px grey',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 5,
        cursor: 'auto'
    },
});

const maxLength300 = maxLengthCreator(300);

const Status = ({isFetching, status, handleSubmit, submitting, reset, handleClick, handleClickAway, open, loading}) => {
    const classes = useStyles();

    const ownHandleSubmit = (formData) => {
        reset()
        handleSubmit(formData)
    }

    const ownHandleClickAway = (event) => {
        reset()
        handleClickAway(event)
    }


    return (
        <ClickAwayListener onClickAway={ownHandleClickAway}>
            <CardActionArea className={classes.root} onClick={handleClick} component={"div"}>
                <Typography variant={"body1"}>
                    {isFetching ? (status || 'change status') : <Skeleton/>}
                </Typography>
                {open ? (
                    <form onSubmit={ownHandleSubmit}>
                        <Grid container direction={"column"} spacing={1} className={classes.dropdown}>
                            <Grid item>Change Status</Grid>
                            <Grid item>
                                <Field variant={"outlined"} fullWidth size={"small"} autoFocus value={status} autoComplete={'off'}
                                       name={'status'} component={CustomTextField} validate={[required, maxLength300]}/>
                            </Grid>
                            <Grid item container alignItems={"center"}>
                                <Button type={"submit"} color={"primary"} variant={"contained"}
                                        disabled={submitting}
                                >Save
                                </Button>
                                {loading &&
                                <CircularProgress size={20} style={{margin: 5}}/>
                                }
                            </Grid>
                        </Grid>
                    </form>
                ) : null}
            </CardActionArea>
        </ClickAwayListener>
    )
}

export default memo(reduxForm({form: 'status', enableReinitialize : true})(Status));