import React, {useEffect} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {initializeAppTC as initializeApp} from "./actions/app-actions";
import {useDispatch, useSelector} from "react-redux";
import Main from "./components/Main/Main";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";

const App = () => {
    const initialized = useSelector(state => state.app.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!initialized) {
            dispatch(initializeApp())
        }
    }, [dispatch, initialized])

    return (
        initialized &&
        <Grid container direction={"column"}>
            <Grid item container lg={12} md={12} sm={12} >
                <AppBar color={"primary"} position={"fixed"}>
                    <Header/>
                </AppBar>
                <Toolbar/>
            </Grid>
            <Grid item style={{height: 30}}/>
            <Grid item container lg={12} md={12} sm={12}>
                <Grid item lg={2} md={1}/>
                <Grid item container lg={8} md={10} sm={12}>
                    <Grid item lg={2} md={2} sm={3} xs={12}>
                        <NavBar/>
                    </Grid>
                    <Grid item lg={10} md={10} sm={9} xs={12}>
                        <Main/>
                    </Grid>
                </Grid>
                <Grid item lg={2} md={1}/>
            </Grid>
            <Grid item style={{height: 30}}/>
        </Grid>
    )
}

export default App;