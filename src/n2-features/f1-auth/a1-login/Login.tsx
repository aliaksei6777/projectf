import React from "react";
import {ChangeEvent} from "react";
import {useCallback} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import styled from "styled-components"
import {RootStateType} from "../../../n1-main/m2-bll/store";
import {loginTC} from "./auth-reducer";
import shape from "../../../assets/images/Shape.png"
import {PATH} from "../../../n1-main/m1-ui/u3-routes/Routes";



export const Login = () => {

    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)
    const appStatus = useSelector<RootStateType, string>(state => state.app.status)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [passwordShow, setPasswordShow] = useState<boolean>(false)
    const error = useSelector<RootStateType, string | null>(state => state.app.error)

    const onClickEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value), [setEmail])
    const onClickPassword = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value), [setPassword])

    const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.currentTarget.checked)
    const passwordShowHandler = () => {
        setPasswordShow(!passwordShow)
    }
    const dispatch = useDispatch()
    const onclickHandler = useCallback(() => {
        dispatch(loginTC(email, password, rememberMe))
    }, [email, password, rememberMe, dispatch])

    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <LoginContainer>
            <FormContainer>
                <TitleContainer>Sing in</TitleContainer>
                <InputContainer>
                    <SpanContainer>Email</SpanContainer>
                    <InputRegistration onChange={onClickEmail} value={email} type={'email'}/>
                    <SpanContainer>Password</SpanContainer>
                    <InputRegistration
                        type={(!passwordShow) ? 'password' : 'text'}
                        onChange={onClickPassword}
                        value={password}
                    />
                    <ShowPassword src={shape} onClick={passwordShowHandler}/>
                    <Remember>
                        <input type={"checkbox"} onChange={e => setRememberMe(e.currentTarget.checked)} />
                        <span>Remember Me</span>
                    </Remember>
                </InputContainer>
                <NavLinkForgotContainer>
                    <StyledForgotLink to={PATH.RECOVERY_PASSWORD}>Forgot Password</StyledForgotLink>
                </NavLinkForgotContainer>
                <ButtonContainer>
                    <ButtonLogin disabled={appStatus === 'loading'} onClick={onclickHandler}>Login</ButtonLogin>
                </ButtonContainer>
                <div style={{height: '20px'}}>
                    {error ? <ErrorContainer> {error} </ErrorContainer> : null}
                </div>
                <DontHaveAccount>Don't have an account?</DontHaveAccount>
                <NavLinkSignUpContainer>
                    <StyledSignUpLink to={PATH.REG}>Sign Up</StyledSignUpLink>
                </NavLinkSignUpContainer>
            </FormContainer>
        </LoginContainer>
    )
}


//styled-components

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  position: relative;
`
const FormContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 413px;
  height: 540px;
  background: #F9F9FE;
  border-radius: 8px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

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
const SpanContainer = styled.span`
  align-self: end;
  margin-left: 40px;
  margin-top: 10px;
  font-family: 'Popins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: #24254A;
  opacity: 0.5;
`
const InputRegistration = styled.input`
  margin-top: 10px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #24254A;
  background-color: transparent;
  color: black;
  &:focus {
    outline: none;
  }
`
const ShowPassword = styled.img`
  position: absolute;
  margin-top: 90px;
  margin-left: 300px;
`

const Remember = styled.div`
  width: 80%;
  margin-top: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`
const NavLinkForgotContainer = styled.div`
  width: 80%;
  margin: 30px auto 0px;
  text-align: right;
`

const StyledForgotLink = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #2D2E46;
  &:hover {
    color: #323af3
  }
`
const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
`
const ButtonLogin = styled.button`
  background: #21268F;
  box-shadow: 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: 1px;
  height: 36px;
  width: 266px;
  left: 0px;
  top: 0px;
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
const DontHaveAccount = styled.div`
  margin-top: 20px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #2D2E46;
  opacity: 0.5;
`
const NavLinkSignUpContainer = styled.div`
  width: 80%;
  margin: 10px auto 0px;
  text-align: center;
`

const StyledSignUpLink = styled(NavLink)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #21268F;
  text-decoration: none;
`

const ErrorContainer = styled.div`
  margin: 10px auto 0px;
  text-align: center;
  width: 70%;
  display: flex;
  justify-content: center;
  color: #ef0f00;
  font-family: 'Popins', sans-serif;
`