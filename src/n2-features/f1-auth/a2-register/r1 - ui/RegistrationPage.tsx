import React, {ChangeEvent, SetStateAction} from "react";
import styled from "styled-components"


const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`
type registrationPropsType = {
    error: string | null
    email: string
    password: string
    confirmPassword: string
    onChangeDataInput: (setFunction: Function) => (e: ChangeEvent<HTMLInputElement>) => void
    clickRegistrationButton: () => void
    clickCancelButton: () => void
    setEmail: React.Dispatch<SetStateAction<string>>
    setPassword: React.Dispatch<SetStateAction<string>>
    setConfirmPassword: React.Dispatch<SetStateAction<string>>
}

export const RegistrationPage = React.memo((props: registrationPropsType) => {

    return (
        <RegisterContainer>
            <h3>Registration page</h3>
            <div>
                Email
                <input onChange={props.onChangeDataInput(props.setEmail)} value={props.email}/>
            </div>
            <div>
                Password
                <input type={'password'} onChange={props.onChangeDataInput(props.setPassword)} value={props.password}/>
            </div>
            <div>
                Confirm password
                <input type={'password'} onChange={props.onChangeDataInput(props.setConfirmPassword)}
                       value={props.confirmPassword}/>
            </div>
            {props.error ? <div> error: {props.error} </div> : null}
            <div>
                <button onClick={props.clickCancelButton}>Cancel</button>
                <button onClick={props.clickRegistrationButton}>Register</button>
            </div>
        </RegisterContainer>
    )
})