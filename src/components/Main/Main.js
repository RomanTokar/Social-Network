import React from "react";
import {useSelector} from "react-redux";
import {useRoutes} from "../../hooks";

const Main = () => {
    const isAuth = useSelector(state => state.auth.authData.isAuth);
    const routes = useRoutes(isAuth);

    return (
        <main style={{padding: '2%',backgroundColor: 'white'}}>
            {routes}
        </main>
    )
}

export default Main;