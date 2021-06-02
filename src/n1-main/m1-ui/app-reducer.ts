import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { authAPI } from "../../n2-features/f1-auth/a1-login/login-api";
import { RootStateType } from "../m2-bll/store";

const initialState = {
    status: 'idle',
    error: null as string | null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        case 'APP/SET-IS-INITIALIZED': {
            return {...state, isInitialized: true}
        }
        default:
            return state
    }
}

export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppIsInitialized = (isInitialized: boolean) => ({type: 'APP/SET-IS-INITIALIZED', isInitialized} as const)


export const initializeAppTC = () => async (dispatch: ThunkDispatch<RootStateType, unknown, AppActionsType>) => {
    try {
        const res = await authAPI.me()
        dispatch(setAppIsInitialized(true))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
    }
}

//type
export type InitialStateType = typeof initialState
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>
export type SetAppErrorActionType = ReturnType<typeof setAppError>
export type AppActionsType = SetAppStatusActionType | SetAppErrorActionType | ReturnType<typeof setAppIsInitialized>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
