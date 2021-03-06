import React, {ChangeEvent, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../n1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/u3-routes/Routes";
import {RegistrationPage} from "./RegistrationPage";
import {setDataRegistrationTC} from "../r2 - bll/thunkRegistrationReducer";
import {setErrorRegistration} from "../r2 - bll/actionRegistrationReducer";

interface dataState {
    error: string | null
    success: boolean
}

export const RegistrationPageContainer = React.memo(() => {
        const {error, success} = useSelector<RootStateType, dataState>(st => st.registration)
        const appStatus = useSelector<RootStateType, string>(state => state.app.status)
        const [email, setEmail] = useState<string>('')
        const [password, setPassword] = useState<string>('')
        const [confirmPassword, setConfirmPassword] = useState<string>('')
        const [passwordShow, setPasswordShow] = useState<boolean>(false)
        const [confirmPasswordShow, setConfirmPasswordShow] = useState<boolean>(false)
        const dispatch = useDispatch()

        const onChangeDataInput = useCallback((setFunction: Function) => (e: ChangeEvent<HTMLInputElement>) => {
                return setFunction(e.currentTarget.value)
            },
            [])

        const clearInput = useCallback(() => {
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }, [setEmail, setPassword, setConfirmPassword])

        const clickRegistrationButton = useCallback(() => {
            if (password === confirmPassword) {
                dispatch(setDataRegistrationTC(email, password))
                clearInput()
            } else {
                dispatch(setErrorRegistration('Passwords do not match'))
            }
        }, [email, password, confirmPassword, clearInput, dispatch])

        const clickCancelButton = useCallback(() => {
            clearInput()
            dispatch(setErrorRegistration(null))
        }, [clearInput, dispatch])

        const isPasswordShow = useCallback(() => {
            setPasswordShow(!passwordShow)
        }, [passwordShow, setPasswordShow])

        const isConfirmPasswordShow = useCallback(() => {
            setConfirmPasswordShow(!confirmPasswordShow)
        }, [confirmPasswordShow, setConfirmPasswordShow])

        // if (!success) {
        //     return <Redirect to={PATH.LOGIN}/>
        // }

        return <div>
            <RegistrationPage
                error={error}
                onChangeDataInput={onChangeDataInput}
                email={email} password={password}
                confirmPassword={confirmPassword}
                clickRegistrationButton={clickRegistrationButton}
                clickCancelButton={clickCancelButton}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                passwordShow={passwordShow}
                confirmPasswordShow={confirmPasswordShow}
                isConfirmPasswordShow={isConfirmPasswordShow}
                isPasswordShow={isPasswordShow}
                setPasswordShow={setPasswordShow}
                setConfirmPasswordShow={setConfirmPasswordShow}
                appStatus={appStatus}
            />
        </div>
    }
)

