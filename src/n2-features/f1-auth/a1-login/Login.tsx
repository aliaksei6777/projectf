import React from "react";
import { ChangeEvent } from "react";
import { useCallback } from "react";
import { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components"
import { RootStateType } from "../../../n1-main/m2-bll/store";
import { loginTC } from "./auth-reducer";




export const Login = () => {

    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)
    const appStatus = useSelector<RootStateType, string>(state => state.app.status)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const onClickEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
        
    const onClickPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.currentTarget.checked)

    const dispatch = useDispatch()
    const onclickHandler = useCallback(() => {
        dispatch(loginTC(email, password, rememberMe))
    }, [email, password, rememberMe, dispatch])

    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <MainContainer>
            <h3>SIGN IN</h3>
            <LoginForm>
                <input type={'email'}
                       placeholder={'Enter email'}
                       onChange={onClickEmail}/>
                <input type={'password'}
                       placeholder={'Password'}
                       onChange={onClickPassword}/>
                <input type={'checkbox'} onChange={checkedHandler}/>
                <button disabled={appStatus === 'loading'} onClick={onclickHandler}>submit</button>
            </LoginForm>
        </MainContainer>
    )
}


//styled-components

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const LoginForm = styled.div`
    display: flex;
  flex-direction: column;
  
`