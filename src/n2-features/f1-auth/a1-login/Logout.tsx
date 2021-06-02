import React from 'react';
import {useDispatch} from 'react-redux';
import {logoutTC} from "./auth-reducer";
import styled from "styled-components";

type LoginPropsType = {}

const Logout: React.FC<LoginPropsType> = () => {

    const dispatch = useDispatch()

    let onclickHandler = () => {
        dispatch(logoutTC())
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
