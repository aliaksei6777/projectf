import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../n1-main/m2-bll/store";
import {sendRecoveryEmail} from "./recovery-thunk";
import {setAppError, setAppStatus} from "../../../n1-main/m1-ui/app-reducer";
import {PATH} from "../../../n1-main/m1-ui/u3-routes/Routes";
import {NavLink} from "react-router-dom";


export const Recovery = () => {
    const appStatus = useSelector<RootStateType, string>(state => state.app.status)
    const error = useSelector<RootStateType, string | null>(state => state.app.error)
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }
    const onClickHandler = () => {
        dispatch(sendRecoveryEmail(email))
        setEmail('')
    }

    useEffect(() => {
        return () => {
            dispatch(setAppStatus('idle'))
            dispatch(setAppError(null))
        }
    }, [])

    return (
        <>
            <RecoveryContainer>
                <FormContainer>
                    <TitleContainer>Forgot your password?</TitleContainer>
                    <InputContainer>
                        <SpanContainer>Email</SpanContainer>
                        <InputRegistration value={email} onChange={onChangeEmail}/>
                        <Content>
                            Enter your email address and we will send you further instructions
                        </Content>
                        <ButtonContainer>
                            <ButtonRegistration onClick={onClickHandler} disabled={appStatus === 'loading'}> Send
                                Instructions</ButtonRegistration>
                        </ButtonContainer>
                        <ContentRemember>
                            Did you remember your password?
                        </ContentRemember>
                            <NavLinkContentLogging to={PATH.LOGIN}> Try logging in</NavLinkContentLogging>
                    </InputContainer>
                </FormContainer>
            </RecoveryContainer>
        </>
    )
}


//styled-components

const RecoveryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const FormContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 413px;
  height: 540px;
  background: #F9F9FE;
  border-radius: 8px;`

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

const Content = styled.div`
  width: 347px;
  height: 48px;
  left: 467px;
  top: 330px;
  margin-top: 30px;
  font-family: 'SF UI Display';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #2D2E46;
  opacity: 0.5;
`

const ContentRemember = styled.div`
  display: flex;
  width: 241px;
  height: 24px;
  left: 520px;
  margin-top: 40px;
  font-family: SF UI Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  text-align: center;
  color: #2D2E46;
  opacity: 0.5;
`

const NavLinkContentLogging = styled(NavLink)`
text-decoration: none;
  display: flex;
  width: 98px;
  height: 24px;
  left: 591px;
  margin-top: 20px;
  //font-family: SF UI Display;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #21268F;
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


