import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";
import { registrationReducer } from "../../n2-features/f1-auth/a2-register/r2 - bll/registrationReducer";
import { appReducer} from "../m1-ui/app-reducer";
import {authReducer} from "../../n2-features/f1-auth/a1-login/auth-reducer";
import {cardsPacksReducer} from "../../n2-features/f4-cardsPack/pack-reducer";
import {cardsReducer} from "../../n2-features/f5-cards/cards-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    registration: registrationReducer,
    auth: authReducer,
    cardPacks: cardsPacksReducer,
    cards: cardsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>

