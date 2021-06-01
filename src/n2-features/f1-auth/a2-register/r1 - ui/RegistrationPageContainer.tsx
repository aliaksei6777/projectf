import React, {ChangeEvent, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../n1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/u3-routes/Routes";
import { RegistrationPage } from "./RegistrationPage";

interface dataState {
    error: string | null
    success: boolean
}

export const RegistrationPageContainer = React.memo(() => {
        const [email, setEmail] = useState<string>('')
        const [password, setPassword] = useState<string>('')
        const [confirmPassword, setConfirmPassword] = useState<string>('')
     

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
                clearInput()
            } 
        }, [email, password, confirmPassword, clearInput])

        const clickCancelButton = useCallback(() => {
            clearInput()
        }, [clearInput])

       

        return <div>
            <RegistrationPage
                onChangeDataInput={onChangeDataInput}
                email={email} password={password}
                confirmPassword={confirmPassword}
                clickRegistrationButton={clickRegistrationButton}
                clickCancelButton={clickCancelButton}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
            />
        </div>
    }
)
