import {Button} from "@material-ui/core";
import React, {useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {updatePhotoTC} from "../../../actions/profile-actions";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    modal: {
        position: 'absolute',
        width: 400,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: 20
    },
    input: {
        display: 'none'
    }
})

const ModalWindow = ({handleClose}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [src, setSrc] = useState('');

    const savePhoto = (event) => {
        onClose()
        if (inputRef.current.files.length) {
            dispatch(updatePhotoTC(inputRef.current.files[0]))
        }
    }

    const onChange = (event) => {
        const src = URL.createObjectURL(event.currentTarget.files[0])
        setSrc(src);
    }

    const onClose = () => {
        setSrc('')
        URL.revokeObjectURL(inputRef.current.files[0])
        handleClose()
    }

    return (
        <Grid container direction={"column"} alignItems={"center"} className={classes.modal}>
            <Grid item>
                {src &&
                <img src={src} alt="avatar" width={300} style={{padding: 10}}/>
                }
            </Grid>
            <Grid item container justify={"space-around"}>
                <Grid item>
                    <input
                        className={classes.input} accept=".jpg, .jpeg, .png"
                        id="contained-button-file" type="file"
                        ref={inputRef} onChange={onChange}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                </Grid>
                <Grid item>
                    <Button color={"primary"} variant={"contained"} onClick={savePhoto}>Save</Button>
                </Grid>
                <Grid item>
                    <Button color={"secondary"} variant={"contained"} onClick={onClose}>Cancel</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ModalWindow;