import React, {ChangeEvent, SetStateAction} from "react";
import styled from "styled-components"


const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`


export const RegistrationPage = React.memo(() => {

    return (
        <RegisterContainer>
            <h3>Registration page</h3>
            <div>
                Email
                <input />
            </div>
            <div>
                Password
                <input />
            </div>
            <div>
                Confirm password
                <input/>
            </div>

            <div>
                <button>Cancel</button>
                <button>Register</button>
            </div>
        </RegisterContainer>
    )
})