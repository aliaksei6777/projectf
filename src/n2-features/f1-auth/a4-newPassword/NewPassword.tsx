import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../n1-main/m2-bll/store";
import {useHistory, useParams} from "react-router-dom";
import {resetPassword} from "../a3-recovery/recovery-thunk";
import {PATH} from "../../../n1-main/m1-ui/u3-routes/Routes";
import {setAppError, setAppStatus} from "../../../n1-main/m1-ui/app-reducer";


export const NewPassword = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector<RootStateType, string>((state) => state.app.status)

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
    return (
        <NewPasswordContainer>
            <h3>NewPassword page</h3>
            <div>
                <input value={email} onChange={onChangeHandler} placeholder={"enter new password"}/>
                <button onClick={onClickHandler} disabled={appStatus === 'loading'}> send</button>
            </div>
        </NewPasswordContainer>

    )
}

//styled-components
const NewPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`