import {Dispatch} from "redux";



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


export const setErrorRegistration = (error: string | null) => {
    return {type: 'registration/SET-ERROR-REGISTRATION', error} as const
}

export const setSuccessRegistration = (success: boolean) => {
    return {type: 'registration/SET-SUCCESS-REGISTRATION', success} as const
}



//type
export type InitialStateType = {
    error: string | null
    success: boolean
}
type setErrorRegistrationActionType = ReturnType<typeof setErrorRegistration>
type setSuccessRegistrationActionType = ReturnType<typeof setSuccessRegistration>

export type ActionsType = setErrorRegistrationActionType | setSuccessRegistrationActionType