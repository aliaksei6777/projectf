import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk, {ThunkAction} from "redux-thunk";
import { authReducer } from "../../n2-features/f1-auth/a1-login/auth-reducer";
import {appReducer} from "../m1-ui/app-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>
