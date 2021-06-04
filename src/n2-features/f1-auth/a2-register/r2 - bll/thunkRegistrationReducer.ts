import {Dispatch} from "redux"
import {registrationApi} from "../r3 - dal/registrationApi"
import {setErrorRegistration, setSuccessRegistration} from "./actionRegistrationReducer"
import {setAppStatus} from "../../../../n1-main/m1-ui/app-reducer";

export const setDataRegistrationTC = (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await registrationApi.registration(email, password)
        console.log(response.data)
        dispatch(setAppStatus('succeeded'))
        dispatch(setSuccessRegistration(true))
        dispatch(setErrorRegistration(null))

    } catch (e) {
        dispatch(setAppStatus('failed'))
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorRegistration(error))
        console.log('Error: ', {...e})
    }
}