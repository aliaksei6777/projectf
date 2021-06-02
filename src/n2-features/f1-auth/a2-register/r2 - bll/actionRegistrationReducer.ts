//type
export type setErrorRegistrationActionType = ReturnType<typeof setErrorRegistration>
export type setSuccessRegistrationActionType = ReturnType<typeof setSuccessRegistration>


export const setErrorRegistration = (error: string | null) => {
    return {type: 'registration/SET-ERROR-REGISTRATION', error} as const
}

export const setSuccessRegistration = (success: boolean) => {
    return {type: 'registration/SET-SUCCESS-REGISTRATION', success} as const
}