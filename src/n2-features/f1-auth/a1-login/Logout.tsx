import React from 'react';
import {useDispatch} from 'react-redux';
import {logoutTC} from "./auth-reducer";
import styled from "styled-components";
import {Redirect, useHistory} from "react-router-dom";
import {PATH} from "../../../n1-main/m1-ui/u3-routes/Routes";

type LoginPropsType = {}

const Logout: React.FC<LoginPropsType> = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    let onclickHandler = () => {
        dispatch(logoutTC())
        history.push(PATH.LOGIN)
    }
    return (
        <StyledLogout onClick={onclickHandler}> LOGOUT</StyledLogout>
    )
}

export default Logout;

//styled component
const StyledLogout = styled.span`
  color: black;
  padding: 10px;
  text-decoration: none;
  transition: color .4s;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  &:hover {
    color: white
  }
`
