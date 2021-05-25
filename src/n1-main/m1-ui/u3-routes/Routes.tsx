import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ErrorPage from "../../../n2-features/f3-error404/ErrorPage";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Profile} from "../../../n2-features/f2-profile/Profile";
import {Register} from "../../../n2-features/f1-auth/a2-register/Register";
import {Recovery} from "../../../n2-features/f1-auth/a3-recovery/Recovery";
import {NewPassword} from "../../../n2-features/f1-auth/a4-newPassword/NewPassword";
import {TestPage} from "../../../n2-features/f0-test/TestPage";

export const PATH = {
    LOGIN: '/login',
    REG: '/registration',
    RECOVERY_PASSWORD: '/recoveryPassword',
    NEW_PASSWORD: '/newPassword',
    PROFILE: '/profile',
    TEST: '/test'
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Profile/>}/>
                <Route path={PATH.LOGIN} exact render={() => <Login/>}/>
                <Route path={PATH.REG} exact render={() => <Register/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} exact render={() => <Recovery/>}/>
                <Route path={PATH.NEW_PASSWORD} exact render={() => <NewPassword/>}/>
                <Route path={PATH.PROFILE} exact render={() => <Profile/>}/>
                <Route path={PATH.TEST} exact render={() => <TestPage/>}/>
                <Route path={'/404'} render={() => <ErrorPage/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default Routes;