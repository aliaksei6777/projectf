import {Dispatch} from 'redux';
import {setAppError, setAppStatus} from "../../../n1-main/m1-ui/app-reducer";
import {recoverAPI} from "./api-recovery";


export const sendRecoveryEmail = (email: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await recoverAPI.recover(email)
        if (res.status === 200) {
            dispatch(setAppStatus('succeeded'))
            dispatch(setAppError(`recovery link will be sent to ${email}, if account exist`))
        } else {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError('Some error ocurred'))
        }
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}

export const resetPassword = (password: string, token: string | undefined) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await recoverAPI.reset(password, token)
        if (res.status === 200) {
            dispatch(setAppStatus('succeeded'))
            dispatch(setAppError(`Password has been changed`))
        } else {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError('Some error ocurred'))
        }
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}







