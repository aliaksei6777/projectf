import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components";
import {PATH} from "../u3-routes/Routes";
import Logout from "../../../n2-features/f1-auth/a1-login/Logout";
import ProgressBar from "../../../n3-components/ProgressBar/ProgressBar";
import {useSelector} from "react-redux";
import {RootStateType} from "../../m2-bll/store";


export const Header = () => {
    const appStatus = useSelector<RootStateType, string>(state => state.app.status)

    return <>
        <HeaderContainer>
            <Nav>
                <StyledLink to={PATH.PROFILE}>Profile</StyledLink>
                <StyledLink to={PATH.LOGIN}>Sign In</StyledLink>
                {/*<StyledLink to={PATH.REG}>Registration</StyledLink>*/}
                {/*<StyledLink to={PATH.RECOVERY_PASSWORD}>Recovery Password</StyledLink>*/}
                {/*<StyledLink to={PATH.NEW_PASSWORD}>New Password</StyledLink>*/}
                <StyledLink to={PATH.CARD_PACKS}>Cards Pack</StyledLink>
            </Nav>
            <div><Logout/></div>
        </HeaderContainer>
        <div style={{height:"6px"}}>
            {appStatus === 'loading' ? <ProgressBar/> : null}
        </div>
    </>
}

//styled-components
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


