import React from "react";
import styled from "styled-components"
import { StyledButton } from "../../n1-main/m1-ui/u1-common/styles/Button";

const TestPageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const TestPage = () => {
    return (
        <TestPageContainer>
                <h3>Test Page</h3>
            <StyledButton>button</StyledButton>
        </TestPageContainer>
    )
}