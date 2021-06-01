export type ForgotStateType = {
    success: boolean;
    error: string;
}

export const ForgotInitState: ForgotStateType = {
    success: false,
    error: "",
}

export const forgotReducer = (state = ForgotInitState, action: ActionsType): ForgotStateType => {
    switch (action.type) {
        case "SET-SUCCESS": {
            return {
                ...state,
                error: '',
                success: action.success
            }
        }
        case "SET-ERROR": {
            return {
                ...state,
                error: action.error,
                success: false     //??
            }
        }

        default: {
            return state
        }
    }
}

export const setSuccess = (success: boolean) => ({type: 'SET-SUCCESS', success} as const)
export const setError = (error: string) => ({type: 'SET-ERROR', error} as const)


export type setSuccessType = ReturnType<typeof setSuccess>
export type setErrorType = ReturnType<typeof setError>


type ActionsType = setSuccessType
    | setErrorType







