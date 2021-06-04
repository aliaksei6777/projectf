import React, {ChangeEvent, SetStateAction} from "react";
import styled from "styled-components"
import shape from "../../../../assets/images/Shape.png"
import Preloader from "../../../../n3-components/Preloader/Preloader";
import {ErrorSnackbar} from "../../../../n3-components/ErrorSnackbar/Errorsnackbar";


export const RegistrationPage = React.memo((props: registrationPropsType) => {
    return (
        <RegisterContainer>
            {props.appStatus === 'loading' && <Preloader/>}
            <FormContainer>
                <TitleContainer>Sing up</TitleContainer>
                <InputContainer>
                    <SpanContainer>Email</SpanContainer>
                    <InputRegistration
                        onChange={props.onChangeDataInput(props.setEmail)}
                        value={props.email}
                    />
                    <SpanContainer>Password</SpanContainer>
                    <InputRegistration
                        type={(!props.passwordShow) ? 'password' : 'text'}
                        onChange={props.onChangeDataInput(props.setPassword)}
                        value={props.password}
                    />
                    <SpanContainer>Confirm password</SpanContainer>
                    <InputRegistration
                        type={(!props.confirmPasswordShow) ? 'password' : 'text'}
                        onChange={props.onChangeDataInput(props.setConfirmPassword)}
                        value={props.confirmPassword}
                    />
                    <FirstImgPassword src={shape} onClick={props.isPasswordShow}/>
                    <SecondImgPassword src={shape} onClick={props.isConfirmPasswordShow}/>
                </InputContainer>
                {props.error ? <ErrorSnackbar error={props.error}/> : null}
                <ButtonContainer>
                    <ButtonCancel onClick={props.clickCancelButton}>Cancel</ButtonCancel>
                    <ButtonRegistration
                        disabled={props.appStatus === 'loading'}
                        onClick={props.clickRegistrationButton}>Register</ButtonRegistration>
                </ButtonContainer>
            </FormContainer>
        </RegisterContainer>
    )
})

//styled-components

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  //background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
  position: relative;
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

const SpanContainer = styled.span`
  align-self: end;
  margin-left: 35px;
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
  opacity: 0.2;

  &:focus {
    outline: none;
  }
`

const SecondImgPassword = styled.img`
  position: absolute;
  margin-top: 150px;
  margin-left: 300px;
`

const FirstImgPassword = styled.img`
  position: absolute;
  margin-top: 90px;
  margin-left: 300px;
`



const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`

const ButtonRegistration = styled.button`
  background: #21268F;
  width: 100px;
  box-shadow: 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: 1px;

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

const ButtonCancel = styled.button`
  background: #D7D8EF;
  border-radius: 30px;
  width: 100px;
  border: 1px;

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
  color: #21268F;
  opacity: 0.8;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`

//types

type registrationPropsType = {
    error: string | null
    email: string
    password: string
    confirmPassword: string
    onChangeDataInput: (setFunction: Function) => (e: ChangeEvent<HTMLInputElement>) => void
    clickRegistrationButton: () => void
    clickCancelButton: () => void
    passwordShow: boolean
    confirmPasswordShow: boolean
    isPasswordShow: () => void
    isConfirmPasswordShow: () => void
    setEmail: React.Dispatch<SetStateAction<string>>
    setPassword: React.Dispatch<SetStateAction<string>>
    setConfirmPassword: React.Dispatch<SetStateAction<string>>
    setPasswordShow: React.Dispatch<SetStateAction<boolean>>
    setConfirmPasswordShow: React.Dispatch<SetStateAction<boolean>>
    appStatus: string
}