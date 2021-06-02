import React from "react";
import styled from "styled-components"
import { StyledButton } from "../../n1-main/m1-ui/u1-common/styles/Button";
import {useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../n1-main/m1-ui/u3-routes/Routes";

const TestPageContainer = styled.div`
    text-align: center;
`

export const TestPage = () => {

    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <TestPageContainer>
                <h3>Test Page</h3>
            <StyledButton>button</StyledButton>
        </TestPageContainer>
    )
}