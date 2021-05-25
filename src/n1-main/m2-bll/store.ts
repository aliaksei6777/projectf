import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk, {ThunkAction} from "redux-thunk";
import {ActionsType, appReducer} from "../m1-ui/app-reducer";


const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>

// export type AppThunk<ReturnType = void> = ThunkAction<void,RootStateType,unknown,ActionsType>
