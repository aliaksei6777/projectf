import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../n1-main/m2-bll/store";
import {useHistory, useParams} from "react-router-dom";
import {resetPassword} from "../a3-recovery/recovery-thunk";
import {PATH} from "../../../n1-main/m1-ui/u3-routes/Routes";
import {setAppError, setAppStatus} from "../../../n1-main/m1-ui/app-reducer";
import shape from "../../../assets/images/Shape.png";


export const NewPassword = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector<RootStateType, string>((state) => state.app.status)
    const error = useSelector<RootStateType, string | null>(state => state.app.error)
    const [passwordShow, setPasswordShow] = useState<boolean>(false)
    const {token} = useParams<Record<string, string | undefined>>();
    const history = useHistory();

    const [email, setEmail] = useState<string>('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }
    const onClickHandler = () => {
        dispatch(resetPassword(email, token ? token : ''))
        setEmail('')
    }

    if (appStatus === 'succeeded') {
        history.push(PATH.LOGIN);
    }



    useEffect(() => {
        return () => {
            dispatch(setAppStatus('idle'))
            dispatch(setAppError(null))
        }
    }, [])

    const onChangeDataInput = useCallback((setFunction: Function) => (e: ChangeEvent<HTMLInputElement>) => {
            return setFunction(e.currentTarget.value)
        },
        [])

    const isPasswordShow = useCallback(() => {
        setPasswordShow(!passwordShow)
    }, [passwordShow, setPasswordShow])
    return (
        <NewPasswordContainer>
            <FormContainer>
                <TitleContainer>NewPassword page</TitleContainer>
                <InputContainer>
                    <InputRegistration
                        type={(!passwordShow) ? 'password' : 'text'}
                        onChange={onChangeDataInput(setEmail)}
                        value={email}
                    />
                    <FirstImgPassword src={shape} onClick={isPasswordShow}/>
                    {/*<InputRegistration type={'password'} value={email} onChange={onChangeHandler} placeholder={"Password"}/>*/}
                    <Content>
                        Create new password and we will send you further instructions to email
                    </Content>
                    <ButtonContainer>
                        <ButtonRegistration onClick={onClickHandler}
                                            disabled={appStatus === 'loading'}> send</ButtonRegistration>
                    </ButtonContainer>

                </InputContainer>
            </FormContainer>
        </NewPasswordContainer>

    )
}

//styled-components
const NewPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
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
const FirstImgPassword = styled.img`
  position: absolute;
  //margin-top: 90px;
  margin-left: 150px;
`


