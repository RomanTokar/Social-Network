import * as React from "react";
import {useDispatch} from "react-redux";
import {loginTC} from "../../../actions/auth-actions";
import Login from "./Login";
import Grid from "@material-ui/core/Grid";

const LoginContainer = () => {
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(loginTC(formData))
    };

    return (
        <Grid container alignItems={"center"} direction={"column"}>
            <Login onSubmit={onSubmit} />
        </Grid>
    )
}

export default LoginContainer;