import {Dispatch} from "redux"
import {registrationApi} from "../r3 - dal/registrationApi"
import {setErrorRegistration, setSuccessRegistration} from "./actionRegistrationReducer"

export const setDataRegistrationTC = (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        const response = await registrationApi.registration(email, password)
        console.log(response.data)
        dispatch(setSuccessRegistration(true))
        dispatch(setErrorRegistration(null))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorRegistration(error))
        console.log('Error: ', {...e})
    }
}