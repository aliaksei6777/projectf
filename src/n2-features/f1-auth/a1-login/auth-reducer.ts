import {Dispatch} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {setAppError, SetAppErrorActionType, setAppStatus, SetAppStatusActionType } from '../../../n1-main/m1-ui/app-reducer';
import { RootStateType } from '../../../n1-main/m2-bll/store';
import { authAPI } from './login-api';

const initialState: AuthInitialStateType = {
    isLoggedIn: false,
    user: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: 3,
        updated: 3,
        isAdmin: false,
        rememberMe: false,
        error: ''
    }
}

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        case 'LOGIN/SET_USER_DATA':
            return {...state, user: action.payload.userData}
        case  'LOGIN/UPDATE_USER_DATA':
            return {
                ...state,
                user: {...state.user, name: action.payload.user.name, avatar: action.payload.user.avatar}
            }
        default:
            return state
    }
}
export const setIsLoggedIn = (isLoggedIn: boolean) =>
    ({type: 'LOGIN/SET-IS-LOGGED-IN', payload: {isLoggedIn}}) as const

export const setUserData = (userData: UserDataType) =>
    ({type: 'LOGIN/SET_USER_DATA', payload: {userData}}) as const

export const updateUserData = (user: UserDataType) =>
    ({type: 'LOGIN/UPDATE_USER_DATA', payload: {user}} as const)

// get & update profile
export const getAuthUserDataTC = () => async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await authAPI.me()
        dispatch(setUserData(res.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppStatus('loading'))
        dispatch(setAppError(null))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {...e})
    }
}

export const updateUserDataTC = (name?: string, avatar?: string) =>
    async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
        dispatch(setAppStatus('loading'))
        dispatch(setAppError(null))
        try {
            const res = await authAPI.updateUserData(name, avatar)
            dispatch(updateUserData(res.data.updatedUser))
            dispatch(setAppStatus('succeeded'))
            dispatch(setAppError(null))
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(error))
            console.log('Error: ', {...e})
        }
}


//log in & log out
export const loginTC = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await authAPI.login(email, password, rememberMe)
        dispatch(setIsLoggedIn(true))
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {...e})
    }
}


export const logoutTC = () => async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await authAPI.logout()
        dispatch(setIsLoggedIn(false))
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(res.data.info))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {...e})
    }
}


//types

type AuthInitialStateType = {
    isLoggedIn: boolean
    user: UserDataType
}
type ActionsType =
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof updateUserData>
    | SetAppStatusActionType
    | SetAppErrorActionType

export type UserDataType = {
    avatar?: string,
    created: number,
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    error?: string,
    updated: number,
    _id: string,
}