import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk, {ThunkAction} from "redux-thunk";
import {ActionsType, appReducer} from "../m1-ui/app-reducer";
import {forgotReducer} from "../../n2-features/f1-auth/a3-recovery/recovery-reducer";


const rootReducer = combineReducers({
    app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>

// export type AppThunk<ReturnType = void> = ThunkAction<void,RootStateType,unknown,ActionsType>
