import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk, {ThunkAction} from "redux-thunk";
import { registrationReducer } from "../../n2-features/f1-auth/a2-register/r2 - bll/registrationReducer";
import {ActionsType, appReducer} from "../m1-ui/app-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    registration: registrationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>

// export type AppThunk<ReturnType = void> = ThunkAction<void,RootStateType,unknown,ActionsType>
