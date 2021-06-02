import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components";
import {PATH} from "../u3-routes/Routes";
import Logout from "../../../n2-features/f1-auth/a1-login/Logout";

const HeaderContainer = styled.div`
  height: 80px;
  background-color: #9ac4ce;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
const Nav = styled.nav`
`
const StyledLink = styled(NavLink)`
  color: black;
  padding: 10px;
  text-decoration: none;
  transition: color .4s;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;

  &.active {
    color: indianred;
  }
  &:hover {
    color: white
  }
`


export const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <StyledLink to={PATH.PROFILE}>Profile</StyledLink>
                <StyledLink to={PATH.LOGIN}>Login</StyledLink>
                <StyledLink to={PATH.REG}>Registration</StyledLink>
                <StyledLink to={PATH.RECOVERY_PASSWORD}>Recovery Password</StyledLink>
                <StyledLink to={PATH.NEW_PASSWORD}>Change Password</StyledLink>
                <StyledLink to={PATH.TEST}>TEST page</StyledLink>
            </Nav>
            <div><Logout/></div>
        </HeaderContainer>
    )
}


