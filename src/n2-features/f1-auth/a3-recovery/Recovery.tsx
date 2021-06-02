import React, {ChangeEvent, useState} from "react";
import styled from "styled-components"


const RecoveryContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Recovery = () => {
    let [email, setEmail] = useState<string>('')

    let onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        let email = event.currentTarget.value
        setEmail(email)
    }





    return (
        <>
            <RecoveryContainer>
                <h3>Recovery page</h3>
            </RecoveryContainer>
            <div>
                <input value={email} onChange={onChangeEmail}/>
                <button onClick={()=>alert(email)}> send</button>
            </div>
        </>
    )
}