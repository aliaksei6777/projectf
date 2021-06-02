import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../n1-main/m2-bll/store";
import {sendRecoveryEmail} from "./recovery-thunk";
import {setAppError, setAppStatus} from "../../../n1-main/m1-ui/app-reducer";


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
                <h3>Recovery page</h3>
                <div>
                    <input value={email} onChange={onChangeEmail} placeholder={"enter your email"}/>
                    <button onClick={onClickHandler} disabled={appStatus === 'loading'}> send</button>
                </div>
                {error ? <ErrorContainer> error: {error} </ErrorContainer> : null}
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