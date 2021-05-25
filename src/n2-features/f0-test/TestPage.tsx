import React from "react";
import styled from "styled-components"

const TestPageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const TestPage = () => {
    return (
        <TestPageContainer>
                <h3>Test Page</h3>
        </TestPageContainer>
    )
}