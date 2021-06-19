import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ErrorPage from "../../../n2-features/f3-error404/ErrorPage";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Profile} from "../../../n2-features/f2-profile/Profile";
import {Recovery} from "../../../n2-features/f1-auth/a3-recovery/Recovery";
import {NewPassword} from "../../../n2-features/f1-auth/a4-newPassword/NewPassword";
import { RegistrationPageContainer } from '../../../n2-features/f1-auth/a2-register/r1 - ui/RegistrationPageContainer';
import {CardsContainer} from "../../../n2-features/f5-cards/CardsContainer";
import {PackContainer} from "../../../n2-features/f4-cardsPack/PackContainer";
import {RecoveryCheckEmail} from "../../../n2-features/f1-auth/a3-recovery/RecoveryCheckEmail";

export const PATH = {
    LOGIN: '/login',
    REG: '/registration',
    RECOVERY_PASSWORD: '/recoveryPassword',
    RECOVERY_PASSWORD_CHECK_EMAIL: '/RecoveryCheckEmail',
    NEW_PASSWORD: '/set-new-password/:token?',
    PROFILE: '/profile',
    CARD_PACKS: '/card_packs',
    CARDS: '/cards'
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Profile/>}/>
                <Route path={PATH.LOGIN} exact render={() => <Login/>}/>
                <Route path={PATH.REG} exact render={() => <RegistrationPageContainer/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} exact render={() => <Recovery/>}/>
                <Route path={PATH.RECOVERY_PASSWORD_CHECK_EMAIL} exact render={() => <RecoveryCheckEmail/>}/>
                <Route path={PATH.NEW_PASSWORD} exact render={() => <NewPassword/>}/>
                <Route path={PATH.PROFILE} exact render={() => <Profile/>}/>
                <Route path={PATH.CARDS + '/:id'} exact render={() => <CardsContainer/>}/>
                <Route path={PATH.CARD_PACKS} exact render={() => <PackContainer/>}/>
                <Route path={'/404'} render={() => <ErrorPage/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default Routes;