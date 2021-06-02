import {Dispatch} from "redux";
import {setErrorRegistrationActionType, setSuccessRegistrationActionType} from "./actionRegistrationReducer";

//type
export type InitialStateType = {
    error: string | null
    success: boolean
}

export type ActionsType = setErrorRegistrationActionType | setSuccessRegistrationActionType

export const initialState = {
    error: null,
    success: false
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "registration/SET-ERROR-REGISTRATION": {
            return {...state, error: action.error}
        }
        case "registration/SET-SUCCESS-REGISTRATION": {
            return {...state, success: action.success}
        }
        default:
            return state
    }
}


