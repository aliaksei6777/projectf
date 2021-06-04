import React from "react";
import styled from "styled-components";

type errorSnackbarType = {
    error: string
}

export const ErrorSnackbar = (props: errorSnackbarType) => {
    return <>
        <ErrorContainer> error: {props.error} </ErrorContainer>
    </>

}

//styled-components
const ErrorContainer = styled.div`
  margin-top: 30px;
  margin-left: 45px;
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 15px;
  color: #ef0f00;
  font-family: 'Popins', sans-serif;
  background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
`