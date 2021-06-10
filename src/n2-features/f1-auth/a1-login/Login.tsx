import React from "react";
import {ChangeEvent} from "react";
import {useCallback} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import styled from "styled-components"
import {RootStateType} from "../../../n1-main/m2-bll/store";
import {loginTC} from "./auth-reducer";


export const Login = () => {

    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)
    const appStatus = useSelector<RootStateType, string>(state => state.app.status)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const error = useSelector<RootStateType, string | null>(state => state.app.error)

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
            {/*<h3>SIGN IN</h3>*/}
            <LoginForm>
                <TitleContainer>SIGN IN</TitleContainer>
                <InputContainer>
                    <SpanContainer>Email</SpanContainer>
                <InputRegistration type={'email'}
                       // placeholder={'Enter email'}
                       onChange={onClickEmail}/>
                    <SpanContainer>Password</SpanContainer>
                <InputRegistration type={'password'}
                       // placeholder={'Password'}
                       onChange={onClickPassword}/>
                <InputRegistration type={'checkbox'} onChange={checkedHandler}/>
                    <ButtonContainer>
                <ButtonRegistration disabled={appStatus === 'loading'} onClick={onclickHandler}>Login</ButtonRegistration>
                    </ButtonContainer>
                    <Content>
                        Don’t have an account?
                    </Content>
                    <ContentLogin> Sign Up</ContentLogin>
                </InputContainer>
            </LoginForm>
            {error ? <ErrorContainer> {error} </ErrorContainer> : null}

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
  //display: flex;
  //flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 413px;
  height: 540px;
  background: #F9F9FE;
  border-radius: 8px

`
const ErrorContainer = styled.div`
  margin-top: 30px;
  margin-left: 45px;
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 15px;
  color: #ef0f00;
  font-family: 'Popins', sans-serif;
`

const TitleContainer = styled.h3`
  display: flex;
  justify-content: center;
  font-family: 'Popins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #2D2E46;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

const InputRegistration = styled.input`
  margin-top: 10px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #24254A;
  opacity: 0.2;
  position: relative;

  &:focus {
    outline: none;
  }
`

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`

const ButtonRegistration = styled.button`
  background: #21268F;
  box-shadow: 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: 1px;
  height: 36px;
  width: 266px;
  left: 0px;
  top: 0px;
  margin-top: 20px;


  &:active {
    background-color: #b1b1b1 !important;
  }

  font-family: 'Popins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ECECF9;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`

const SpanContainer = styled.span`

  align-self: end;
  margin-left: 35px;
  margin-top: 10px;
  margin-bottom: 0;
  font-family: 'Popins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: #24254A;
  opacity: 0.5;
`

const Content = styled.div`
  //width: 347px;
  //height: 48px;
  //left: 467px;
  //top: 330px;
  margin-top: 30px;
  font-family: 'SF UI Display';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #2D2E46;
  opacity: 0.5;
`

const ContentLogin = styled.div`

  display: flex;
  //width: 98px;
  //height: 24px;
  //left: 591px;
  margin-top: 20px;

  font-family: SF UI Display;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #21268F;
`