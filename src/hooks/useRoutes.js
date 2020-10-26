import React, {lazy, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const ProfileContainer = lazy(() => import('../components/Main/ProfilePage/ProfileContainer'));
const UsersContainer = lazy(() => import('../components/Main/UsersPage/UsersContainer'));
const LoginContainer = lazy(() => import('../components/Main/LoginPage/LoginContainer'));
const EditContainer = lazy(() => import('../components/Main/EditPage/EditContainer'))

export const useRoutes = (isAuth) => (
    <Suspense fallback={null}>
        {isAuth
            ? <Switch>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users/:page' render={() => <UsersContainer/>}/>
                <Route path='/friends/:page' render={() => <UsersContainer/>}/>
                <Route path={'/edit'} render={() => <EditContainer/>}/>
                <Redirect to={'/profile'}/>
            </Switch>
            : <Switch>
                <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                <Redirect to={'/login'}/>
            </Switch>
        }
    </Suspense>
)